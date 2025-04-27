const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 8000;

// Kiểm tra trạng thái của Docker Compose
const checkDockerServices = () => {
  return new Promise((resolve, reject) => {
    exec('docker-compose ps --services --filter "status=running"', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error checking Docker services: ${error}`);
        return resolve(false);
      }
      
      const runningServices = stdout.trim().split('\n').filter(service => service);
      console.log(`Running services: ${runningServices.join(', ')}`);
      
      // Kiểm tra xem có ít nhất một service đang chạy
      return resolve(runningServices.length > 0);
    });
  });
};

// Health check endpoint
app.get('/', async (req, res) => {
  try {
    const isHealthy = await checkDockerServices();
    
    if (isHealthy) {
      res.status(200).send('OK - Services are running');
    } else {
      res.status(500).send('ERROR - Services are not running properly');
    }
  } catch (error) {
    console.error(`Health check error: ${error}`);
    res.status(500).send('ERROR - Could not check service health');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Health check server listening at http://localhost:${port}`);
});

// Start Docker Compose services if not already started
exec('docker-compose up -d', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting Docker services: ${error}`);
    return;
  }
  console.log(`Docker services started: ${stdout}`);
}); 