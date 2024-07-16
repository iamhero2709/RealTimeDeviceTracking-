# Real-Time Tracking App

A real-time tracking application built with Node.js, Express, EJS, and Socket.io.

## Features

- Real-time location tracking
- Uses Socket.io for real-time communication
- Serves dynamic views with EJS
- Organized structure for public assets (CSS and JS files)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/real-time-tracking-app.git
    cd real-time-tracking-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the server:**

    ```sh
    node server.js
    ```

4. **Visit the application:**

    Open your browser and go to `http://localhost:3000`

## Project Structure

```sh
real-time-tracking-app/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── views/
│   └── index.ejs
├── server.js
└── package.json
