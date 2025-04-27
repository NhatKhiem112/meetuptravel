#!/bin/bash

echo "Starting MeetupTravel Application..."

# Build all components
docker-compose build

# Start all services
docker-compose up -d

echo "MeetupTravel Application is running!"

# Keep the container running
tail -f /dev/null 