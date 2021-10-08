//Libraries
import express from "express";
import passport from "passport";

//Database model
import { RestuarantModel } from "../../database/allModels";

// Validation
import {
  validateRestaurantCity,
  validateRestaurantSearchString,
} from "../../validation/restaurant";
import { validateRestaurantId } from "../../Validation/restaurant";

const Router = express.Router();

/*
 Route:   /restaurants/new
 Des:     add new restaurant
 Access:  PRIVATE
Method:   POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newRestaurant = await RestuarantModel.create(req.body.restaurantData);
    return res.json({ restaurants: newRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
 Route:   /restaurants/update
 Des:     update existing restaurant data
 Access:  PRIVATE
Method:   PATCH
*/

Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
  try {
    const updatedRestaurant = await RestuarantModel.findByIdAndUpdate(
      req.body.restaurantData._id,
      { $set: req.body.restaurantData },
      { new: true }
    );
    if (!updatedRestaurant)
      return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

    return res.json({ restaurants: updatedRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /
Des:    Get all the restaurant details based in city
Params: none
Access: Public
Method: GET
*/

Router.get("/", async (req, res) => {
  try {
    await validateRestaurantCity(req.query);

    const { city } = req.query;
    const restaurants = await RestuarantModel.find({ city });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /
Des:    Get individual restaurant details based on id
Params: _id
Access: Public
Method: GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    await validateRestaurantId(req.params);

    const { _id } = req.params;
    const restaurant = await RestuarantModel.findOne(_id);
    if (!restaurant)
      return res.status(400).json({ error: "Restaurant Not Found" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /search
Des:    Get restaurant details based on search string 
Params: none
Body:   searchString    
Access: Public
Method: GET
*/
Router.get("/search", async (req, res) => {
  try {
    await validateRestaurantSearchString(req.body);

    const { searchString } = req.body;

    const restaurants = await RestuarantModel.find({
      name: { $regex: searchString, $options: "i" }, //i=case-insensitive
    });

    if (!restaurants)
      return res
        .status(404)
        .json({ error: `No Restaurant matched with ${searchString}` });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
