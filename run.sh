#!/bin/sh

echo "Starting MeetupTravel Application..."

# Ensure we have executable permissions
chmod +x $(dirname $0)/run.sh

# Check environment
echo "Checking environment variables..."
env

# Install dependencies
echo "Installing dependencies..."
npm install

# Run database setup if needed
if [ "$SETUP_DB" = "true" ]; then
  echo "Setting up database..."
  node setup-db.js
fi

# Start health check server
echo "Starting application server..."
node app.js 