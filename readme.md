# Apriot IoT Platform v0.0.1

## Overview
A full-stack web application featuring an Angular frontend, Node.js/Express backend, and TimescaleDB for data storage. The application provides a CRUD interface for managing IoT data.

## Getting Started

### Prerequisites
- Node.js
- Angular CLI
- Docker & Docker Compose

### Installation

1. **Clone the Repository**
git clone <your-repository-url>  
cd your-repository-directory  


2. **Build and Run with Docker Compose**
docker-compose up --build  


### Accessing the Application
- **Frontend**: Access the Angular frontend at `http://localhost:4200`.
- **Backend**: The Node.js backend is accessible at `http://localhost:3000`.
- **PgAdmin**: Access PgAdmin at `http://localhost:5050`.

### Frontend (Angular)

#### Welcome Page
- Displays a welcoming message and an "Enter" button leading to the CRUD interface.

#### CRUD Page
- Provides interfaces for Create, Read, Update, and Delete operations.
- Displays results in a styled JSON format.

### Backend (Node.js/Express)

#### API Endpoints
- **Create (POST)**: `/api/create`
- **Read (GET)**: `/api/read/:id`
- **Update (PUT)**: `/api/update/:id`
- **Delete (DELETE)**: `/api/delete/:id`

### TimescaleDB & PgAdmin
- TimescaleDB is used for data storage.
- PgAdmin provides a web interface for database management.

## Environment Variables
Set these variables in the backend service of `docker-compose.yml`:
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

## Contributing
Pull requests are welcome.