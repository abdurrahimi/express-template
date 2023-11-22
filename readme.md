# Express API Starter

This project is developed using **Node.js** and **Express.js** for handling backend functionalities.

## Getting Started

### Prerequisites
- Node.js v16.3.1
- Express.js v4.18.2
- sequelize v6.35.0

### Installation
1. Clone this repository.
2. Run **`npm install`** or **`yarn install`** if you prefer Yarn.
3. Set up the environment variables by creating a **`.env`** file (use **`.env.example`** as a template).
4. Start the application by running **`npm run dev`** or **`yarn dev`**.

## Setting Up a New Table
### Setup Database
1. go to **`config/database.js`**
2. find const driver
3. you can change your selected database based on const config

### Steps to Create a New Table
1. Create the table using your preferred database management tool.
2. Run **`npm run model:pull`** to automatically generate the required model.
3. Your new model is now available for use within the application.

Enjoy utilizing the generated model for your backend operations!