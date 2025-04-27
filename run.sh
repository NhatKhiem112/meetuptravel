#!/bin/sh

echo "Starting MeetupTravel Application..."

# Ensure we have executable permissions
chmod +x $(dirname $0)/run.sh

# Check environment
echo "Checking environment variables..."
env

# Install dependencies for health check server
echo "Installing dependencies..."
npm install express

# Start all services
echo "Starting services with docker-compose..."
docker-compose up -d

# Start health check server
echo "Starting health check server..."
node app.js &

echo "MeetupTravel Application is running!"

# Keep the container running
echo "Keeping container alive..."
tail -f /dev/null 