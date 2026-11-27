require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const sequelize = require("./config/database");
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "Inventory API is running"
    });
});

const PORT = 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Unable to connect to database:", error.message);
    }
};

startServer();
