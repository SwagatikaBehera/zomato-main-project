//Libraries
import express from "express";

//Database model
import { OrderModel } from "../../database/allModels";

// Validate
import { validateOrderById, validateNewOrder } from "../../validation/order";

const Router = express.Router();

/*
Route: /
Des:    Get all the orders based on id
Params: _id
Access: Public
Method: GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    await validateOrderById(req.params);
    const { _id } = req.params;

    const getOrders = await OrderModel.findOne({ user: _id });

    if (!getOrders) {
      return res.status(404).json({ error: "user not found" });
    }

    return res.status(200).json({ orders: getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /new
Des:    Add new order
Params: _id
Access: Public
Method: POST
*/
Router.post("/new", async (req, res) => {
  try {
    await validateOrderById(req.params);
    const { _id } = req.params;

    await validateNewOrder(req.body);

    const { orderDetails } = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails },
      },
      { new: true }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
