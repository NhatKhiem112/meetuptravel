#!/bin/sh

echo "Starting MeetupTravel Application..."

# Check environment
echo "Checking environment variables..."
env

# Start all services
echo "Starting services with docker-compose..."
docker-compose up -d

echo "MeetupTravel Application is running!"

# Keep the container running
echo "Keeping container alive..."
tail -f /dev/null 