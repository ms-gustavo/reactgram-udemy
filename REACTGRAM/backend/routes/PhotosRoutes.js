const express = require("express");
const router = express.Router();
const { validate } = require("../models/Photos");

// Controller
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotosById,
  updatePhoto,
} = require("../controllers/PhotoController");

//Middlewares
const {
  photoInsertValidation,
  photoUpdateValidation,
} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUpload");

//Routes

router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotosById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);

module.exports = router;
