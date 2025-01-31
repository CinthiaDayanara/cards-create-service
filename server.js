require("dotenv").config();
const express = require("express");
const cardsRoutes = require("./src/routes/cardsRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/cards", cardsRoutes);

const PORT = process.env.PORT || 5006;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Create Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
