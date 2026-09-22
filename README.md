# Java Three-Tier Application

A simple product management application using Java, Spring Boot, and MySQL.

## Architecture

```text
Presentation Tier
HTML + CSS + JavaScript
        |
        | REST API
        v
Application Tier
Java + Spring Boot
        |
        | JPA / Hibernate
        v
Data Tier
MySQL
```

## Features

- View products
- Add products
- Delete products
- Update products through REST API
- Get product by ID
- Health endpoint

## Requirements

- Java 17+
- Maven 3.9+
- MySQL 8+

## Database Setup

```bash
mysql -u root -p < database/schema.sql
```

Edit `backend/src/main/resources/application.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

## Start Backend

```bash
cd backend
mvn clean spring-boot:run
```

Backend:

```text
http://localhost:8080
```

Health:

```text
http://localhost:8080/api/products/health
```

## Start Frontend

Open:

```text
frontend/index.html
```

in a browser after starting the backend.

## API

```text
GET    /api/products
GET    /api/products/{id}
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

Example POST:

```json
{
  "name": "Laptop",
  "price": 65000
}
```

## Project Structure

```text
java-three-tier-app/
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── backend/
│   ├── pom.xml
│   └── src/
├── database/
│   └── schema.sql
└── README.md
```

This project contains application code and local development instructions only.
