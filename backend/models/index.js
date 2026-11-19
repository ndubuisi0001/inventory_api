const Product = require("./Product");
const Customer = require("./Customer");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
Customer.hasMany(Order, {
    foreignKey: "customerId"
});

Order.belongsTo(Customer, {
    foreignKey: "customerId"
});
Order.hasMany(OrderItem, {
    foreignKey: "orderId"
});

OrderItem.belongsTo(Order, {
    foreignKey: "orderId"
});
Product.hasMany(OrderItem, {
    foreignKey: "productId"
});

OrderItem.belongsTo(Product, {
    foreignKey: "productId"
});
module.exports = {
    Product,
    Customer,
    Order,
    OrderItem
};