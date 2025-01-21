
# Ranked Choice Voting

Ranked Choice Voting is a web application that allows users to make decisions with friends via ranked voting. The project consists of a client-side application built with React and TypeScript, and a server-side application built with NestJS. The frontend is present in the client directory but is excluded from this documentation as the backend was the primary focus.

## Features

- Create and join polls
- Add nominations
- Rank nominations
- View results
- Real-time updates with WebSockets

- -- **Ranked Voting System**: Enables users to rank their preferences.
- -- **Backend Built with NestJS**: A robust and scalable server framework.
- -- **Redis Integration**: Utilizes Redis with ReJSON module for storing and querying voting data.
- -- **Dockerized Services**: Easy deployment and scaling using Docker and Docker Compose.
- -- **Scalable Architecture**: Designed to handle multiple users and concurrent voting processes efficiently.

## Getting Started

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **NestJS**: Framework for building scalable and maintainable backend systems.
- **Redis with ReJSON**: Advanced data storage and querying capabilities.

### Development Tools
- **Docker**: Containerization for services.
- **Prettier**: Code formatting.
- **Concurrently**: Running multiple processes simultaneously in development mode.


### Installation

1. Clone the repository:

```sh
git clone https://github.com/Ashim-Stha/Ranked-Choice-Voting-App.git
cd ranked-choice-voting
```

2. Install dependencies for the root directory:

```sh
npm install
```

3. Install dependencies for the client application:

```sh
cd client
npm install
cd ..
```

4. Install dependencies for the server application:

```sh
cd server
npm install
cd ..
```

5. Start the application:

```sh
npm run start
```

This will start the Docker container for Redis, the server, and the client application.

### Running Tests

To run tests for the client application:

```sh
npm run test --workspace=client
```

To run tests for the server application:

```sh
npm run test --workspace=server
```

### Storybook

To start Storybook for the client application:

```sh
npm run storybook --workspace=client
```

### Environment Variables

The application requires certain environment variables to be set. You can find the required variables in the `.env` files located in the client and server directories. Make sure to create these files and set the appropriate values before running the application.

#### Client `.env` Example

```env
VITE_API_HOST=127.0.0.1
VITE_API_PORT=3000
VITE_POLLS_NAMESPACE=polls
```

#### Server `.env` Example

```env
PORT=3000
CLIENT_PORT=8080
REDIS_HOST=localhost
REDIS_PORT=6379
POLL_DURATION=7200
JWT_SECRET=wowthisisabadsecret123
```

### WebSocket

The application uses WebSocket for real-time updates. The server-side implementation is done using the `socket.io` library, and the client-side uses the `socket.io-client` library.

### Redis

The application uses Redis for data storage and caching. The Redis instance is managed using Docker. Make sure you have Docker installed and running on your machine. The docker-compose.yml file in the root directory defines the services required for the application. You can start the services using the following command:

```sh
docker-compose up
```

## Scripts

- `npm run docker:compose`: Starts all Dockerized services.
- `npm run server:dev`: Starts the backend in development mode (requires Redis running).
- `npm run stop`: Stops all Docker services.

### Deployment

To deploy the application, you can use any cloud provider that supports Docker. Make sure to set the environment variables appropriately and configure the Docker services as needed.

## Future Enhancements

- Add authentication and user management.
- Implement automated testing for the backend.
- Optimize Redis queries for better performance.
- Enhance API documentation using tools like Swagger.

## License

This project is licensed under the MIT License.
