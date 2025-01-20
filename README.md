# Ranked Choice Voting App

This project is a backend implementation for a ranked-choice voting application. It allows users to make collective decisions through ranked voting while leveraging Redis for efficient data storage and processing. The frontend is present in the `client` directory but is excluded from this documentation as the backend was the primary focus.

## Features

- **Ranked Voting System**: Enables users to rank their preferences.
- **Backend Built with NestJS**: A robust and scalable server framework.
- **Redis Integration**: Utilizes Redis with ReJSON module for storing and querying voting data.
- **Dockerized Services**: Easy deployment and scaling using Docker and Docker Compose.
- **Scalable Architecture**: Designed to handle multiple users and concurrent voting processes efficiently.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **NestJS**: Framework for building scalable and maintainable backend systems.
- **Redis with ReJSON**: Advanced data storage and querying capabilities.

### Development Tools
- **Docker**: Containerization for services.
- **Prettier**: Code formatting.
- **Concurrently**: Running multiple processes simultaneously in development mode.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ashim-Stha/Ranked-Choice-Voting-App.git
   cd ranked-choice-voting-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Services**:
   - Using Docker Compose:
     ```bash
     npm run docker:compose
     ```
   - Start Backend Development Server:
     ```bash
     npm run server:dev
     ```

4. **Access Redis**:
   Redis will be running on port `6379` by default.

## Docker Setup

- The application uses Docker Compose for managing services.
- Redis is configured with the `redislabs/rejson:2.0.0` image to support JSON data types.
- Data is persisted in a Docker volume (`redisdata`) to ensure durability across restarts.

### Example `docker-compose.yml`
```yaml
version: '3.8'

services:
  redis:
    image: 'redislabs/rejson:2.0.0'
    ports:
      - '6379:6379'
    volumes:
      - 'redisdata:/data'
volumes:
  redisdata:
```

## Scripts

- `npm run docker:compose`: Starts all Dockerized services.
- `npm run server:dev`: Starts the backend in development mode (requires Redis running).
- `npm run stop`: Stops all Docker services.

## Future Enhancements

- Add authentication and user management.
- Implement automated testing for the backend.
- Optimize Redis queries for better performance.
- Enhance API documentation using tools like Swagger.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.


