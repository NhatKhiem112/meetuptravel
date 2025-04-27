#!/bin/sh

echo "Starting Health Check Server..."

# Ensure we have executable permissions
chmod +x $(dirname $0)/run.sh

# Check environment
echo "Checking environment variables..."
env

# Install dependencies for health check server
echo "Installing dependencies..."
npm install express

# Start health check server directly
echo "Starting health check server..."
node app.js 