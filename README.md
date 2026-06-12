# Basic Informational Site

A lightweight web server built using the Express framework and modern JavaScript (ES Modules). Built as part of The Odin Project Node.js curriculum.

## What It Does

Serves static HTML pages based on the requested URL using Express routing, featuring a catch-all 404 page for unmatched paths.

| Route | Page Served |
|---|---|
| localhost:3000/ | index.html |
| localhost:3000/about | about.html |
| localhost:3000/contact-me | contact-me.html |
| localhost:3000/* | 404.html |

## Tech Stack

- **Runtime** — Node.js (v22+)
- **Framework** — Express
- **Module System** — ECMAScript Modules (ES Modules)
- **Environment Management** — dotenv

## Project Structure

```
project/
├── node_modules/     # Installed npm dependencies
├── .env              # Environment variables (Port configuration)
├── .gitignore        # Files ignored by Git (e.g., node_modules, .env)
├── index.js          # Express server setup and routing
├── index.html        # Home page
├── about.html        # About page
├── contact-me.html   # Contact page
├── 404.html          # Not found page
├── package.json      # Project metadata and dependencies
└── package-lock.json # Dependency tree lockfile
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repo and navigate to the project directory:

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install the project dependencies (express and dotenv):

```bash
npm install
```

3. Create a `.env` file in the root directory and define your port:

```
NODE_PORT=3000
```

### Run the Server

To start the server with Node's native hot-reloading (auto-restarts on file changes):

```bash
node --watch index.js
```

### Open in your browser

Go to [http://localhost:3000](http://localhost:3000) to view your site.

## Key Concepts Covered

- Migrating a vanilla HTTP server to Express
- Organizing code using ES Modules (import/export)
- Managing environment configurations using a `.env` file and dotenv
- Manually reconstructing `__dirname` inside an ES Module scope using `node:url`
- Serving static HTML files efficiently with Express's `res.sendFile()` method
- Catching unmatched routes with a global fallback middleware for custom 404 handling

## Part of The Odin Project

This project is part of the Node.js course on [The Odin Project](https://www.theodinproject.com/) — a free, open-source full stack curriculum.