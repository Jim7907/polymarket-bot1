services:
  bot:
    build:
      context: .
      dockerfile: Dockerfile
    image: polymarket-weather-bot:latest
    container_name: polymarket-bot
    restart: unless-stopped
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
