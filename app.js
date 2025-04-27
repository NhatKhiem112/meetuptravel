const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Tạo endpoint kiểm tra sức khỏe đơn giản
app.get('/', (req, res) => {
  res.status(200).send('OK - Health check passed');
});

// Thêm thông tin chi tiết hơn về môi trường
app.get('/info', (req, res) => {
  res.json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Health check server listening at http://localhost:${port}`);
}); 