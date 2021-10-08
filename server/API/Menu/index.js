//Libraries
import express from "express";
import passport from "passport";

//Database model
import { MenuModel, ImageModel } from "../../database/allModels";

// Validation
import { validateMenuListById } from "../../validation/menu";

const Router = express.Router();

/*
Route: /menu/new
Des:    Add new menu
Params: none
Access: Public
Method: POST
*/

Router.post("/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    if (menuData._id) {
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            menus: { $each: menuData.menus },
          },
        },
        { new: true }
      );

      return res.json({ menu: updateMenu });
    }

    const createNewMenu = await MenuModel.create(menuData);

    return res.json({ menu: createNewMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /list
Des:    Get all the list menu based on id
Params: _id
Access: Public
Method: GET
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    await validateMenuListById(req.params);

    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route: /image
Des:    Get all the menu images based on id
Params: _id
Access: Public
Method: GET
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
