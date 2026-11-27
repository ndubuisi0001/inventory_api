const { Customer } = require("../models");
const createCustomer = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        const customer = await Customer.create({
            name,
            email,
            phone,
            address
        });

        res.status(201).json({
            message: "Customer created successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create customer",
            error: error.message
        });
    }
};
const getAllCustomers = async (req, res) => {
    try {
         const customers = await Customer.findAll({
    where: {
        isActive: true
    }
});

        res.status(200).json({
            message: "Customers retrieved successfully",
            count: customers.length,
            customers
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve customers",
            error: error.message
        });
    }
};
const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
const customer = await Customer.findOne({
    where: {
        id: id,
        isActive: true
    }
});

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.status(200).json({
            message: "Customer retrieved successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve customer",
            error: error.message
        });
    }
};
const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findByPk(id);

        if (!customer) {
            return res.status(404).json({
                message: "customer not found"
            });
        }

        const {  name, email, phone, address  } = req.body;

        const updates = {};

        if (name !== undefined) updates.name = name;
        if (email !== undefined) updates.email= email;
        if (phone !== undefined) updates.phone= phone;
        if (address !== undefined) updates.address = address;


        await customer.update(updates);

        res.status(200).json({
            message: "customer updated successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update customer",
            error: error.message
        });
    }
};
const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findByPk(id);

        if (!customer) {
            return res.status(404).json({
                message: "customer not found"
            });
        }

        if (!customer.isActive) {
            return res.status(400).json({
                message: "customer is already inactive"
            });
        }

        await customer.update({
            isActive: false
        });

        res.status(200).json({
            message: "customer deactivated successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to deactivate customer",
            error: error.message
        });
    }
};
module.exports = {
    createCustomer,
     getAllCustomers, 
     getCustomerById, 
     updateCustomer, 
     deleteCustomer
};