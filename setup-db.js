require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function setupDatabase() {
  console.log('Starting database setup...');
  
  // Lấy thông tin kết nối từ biến môi trường hoặc sử dụng giá trị mặc định
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true
  };

  try {
    // Kết nối đến MySQL server (không có database cụ thể)
    console.log('Connecting to MySQL server...');
    const connection = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password,
      multipleStatements: true
    });

    // Tạo database meetuptravel nếu chưa tồn tại
    console.log('Creating database if not exists...');
    await connection.query('CREATE DATABASE IF NOT EXISTS meetuptravel');
    
    // Sử dụng database meetuptravel
    console.log('Using meetuptravel database...');
    await connection.query('USE meetuptravel');
    
    // Đọc nội dung file SQL
    console.log('Reading SQL file...');
    const sqlFilePath = path.join(__dirname, 'mysql', 'meetuptravel.sql');
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
    
    // Tách các câu lệnh SQL riêng biệt
    console.log('Executing SQL content...');
    const statements = sqlContent.split(';').filter(statement => statement.trim() !== '');
    
    // Thực thi từng câu lệnh SQL
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await connection.query(statement);
        } catch (err) {
          console.error('Error executing statement:', statement.slice(0, 100) + '...');
          console.error('Error details:', err.message);
        }
      }
    }
    
    // Đóng kết nối sau khi hoàn thành
    console.log('Closing connection...');
    await connection.end();
    
    console.log('Database setup completed successfully!');
    return true;
  } catch (error) {
    console.error('Database setup failed:', error);
    return false;
  }
}

// Thực thi function thiết lập database
setupDatabase()
  .then(success => {
    if (success) {
      console.log('Database ready for use.');
    } else {
      console.error('Failed to set up database.');
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('Unexpected error:', err);
    process.exit(1);
  }); 