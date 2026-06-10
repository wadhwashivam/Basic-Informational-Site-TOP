# Basic Informational Site

A lightweight Node.js HTTP server built without any frameworks — just the Node.js standard library. Built as part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.

---

## What It Does

Serves static HTML pages based on the requested URL, with a custom 404 page for any unmatched routes.

| Route | Page Served |
|---|---|
| `localhost:8080/` | `index.html` |
| `localhost:8080/about` | `about.html` |
| `localhost:8080/contact-me` | `contact-me.html` |
| `localhost:8080/*` | `404.html` |

---

## Tech Stack

- **Runtime** — Node.js
- **Modules used** — `node:http`, `node:fs`
- **No frameworks, no dependencies**

---

## Project Structure

```
project/
├── index.js          # Node.js server
├── index.html        # Home page
├── about.html        # About page
├── contact-me.html   # Contact page
└── 404.html          # Not found page
```

---

## Getting Started

**Prerequisites** — Node.js installed on your machine.

**Clone the repo**
```bash
git clone <your-repo-url>
cd <project-folder>
```

**Run the server**
```bash
node index.js
```

**Open in your browser**
```
http://localhost:8080
```

---

## Key Concepts Covered

- Creating an HTTP server with `node:http`
- Reading files with `node:fs`
- Routing based on `req.url`
- Sending HTML responses with correct status codes and headers
- Handling 404 and 500 errors gracefully

---

## Part of The Odin Project

This project is part of the [Node.js course](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) on The Odin Project — a free, open-source full stack curriculum.