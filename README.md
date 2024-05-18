# Express Request Logging Middleware

This is a simple Node.js application using Express that demonstrates how to implement custom middleware for logging details about incoming requests. The application includes a sample endpoint and logs request details to a file named `access.log`.

## Features

- Logs request details (IP address, URL, method, and timestamp) to a file
- Provides a sample endpoint (`/get-users`)
- Handles undefined routes with a 400 error response

## Requirements

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the Express server:

    ```bash
    node app.js
    ```

2. The server will run on port 5000 by default. You can access it at `http://localhost:5000`.

## Endpoints

### GET /get-users

This endpoint returns a JSON response indicating a successful request to the dummy get users API.

#### Example Request

```bash
curl http://localhost:5000/get-users
