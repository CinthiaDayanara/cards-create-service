# 🚀 Microservice `cards-create-service`

## 📌 Description
This microservice allows **creating cards** in a task management system with an optional **expiration date  
It follows the **KISS principle** for a simple and direct REST API design.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize 
- Docker

## 📂 Project Structure
```
cards-create-service/
│── src/
│   ├── controllers/
│   │   ├── cardsController.js
│   ├── models/
│   │   ├── Card.js
│   ├── routes/
│   │   ├── cardsRoutes.js
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Create a Card**
```sh
curl -X POST http://localhost:5006/cards -H "Content-Type: application/json" -d '{
  "list_id": 1,
  "title": "Review API Documentation",
  "description": "Complete the API integration",
  "due_date": "2024-02-05T12:00:00Z"
}'
```

