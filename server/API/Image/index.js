//Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//Database model
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../utils/AWS/S3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route: /
Des:    Upload given image to S3 bucket, and saves file link to mangodb
Params: none
Access: Public
Method: POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //s3 bucket options
    const bucketOptions = {
      Bucket: "zomatomasterproject",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);

    await ImageModel.create({ image: [{ location: uploadImage.Location }] });

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
