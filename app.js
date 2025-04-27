require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = process.env.PORT || 8000;

// Cấu hình kết nối database
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meetuptravel'
};

// Tạo pool kết nối MySQL
const pool = mysql.createPool(dbConfig);

// Kiểm tra kết nối database
async function checkDatabaseConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

// Tạo endpoint kiểm tra sức khỏe đơn giản
app.get('/', async (req, res) => {
  res.status(200).send('OK - Health check passed');
});

// Thêm thông tin chi tiết hơn về môi trường và database
app.get('/info', async (req, res) => {
  const dbConnected = await checkDatabaseConnection();
  
  res.json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      connected: dbConnected,
      host: dbConfig.host,
      database: dbConfig.database
    }
  });
});

// Thêm endpoint để kiểm tra dữ liệu trong database
app.get('/api/tours', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, title, price FROM tours LIMIT 10');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ error: 'Database error', message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Health check server listening at http://localhost:${port}`);
  
  // Kiểm tra kết nối database khi khởi động
  checkDatabaseConnection()
    .then(connected => {
      if (connected) {
        console.log('Connected to database successfully');
      } else {
        console.warn('Not connected to database');
      }
    });
}); 