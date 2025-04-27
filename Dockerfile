FROM alpine:latest

RUN apk add --no-cache docker docker-compose

WORKDIR /app

COPY . .

# Install docker-compose if needed
RUN if ! command -v docker-compose &> /dev/null; then \
    apk add --no-cache python3 py3-pip && \
    pip3 install docker-compose; \
  fi

# Start the application using docker-compose
CMD ["docker-compose", "up", "-d"] 