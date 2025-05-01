//import db

const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const validateListing = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is mandatory.")
    .isLength({ max: 100 })
    .withMessage("Title must be under 100 characters."),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required.")
    .isLength({ max: 500 })
    .withMessage("Description must be under 500 characters."),

  body("price")
    .notEmpty()
    .withMessage("Price is required.")
    .isNumeric()
    .withMessage("Price must be a number.")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0."),
];

exports.listingsGet = async (req, res) => {
  // let category = req.query.category;

  // let filteredListings = LISTINGS;

  // if (category.length == 0) {
  //   category = category.toLowerCase();
  //   console.log(category);
  //   filteredListings = LISTINGS.filter(
  //     (listing) => listing.category.toLowerCase() === category
  //   );
  // }

  const listings = await db.getAllListings();

  res.render("listings", { listings: listings });
};

exports.listingsCategoryGet = async (req, res) => {
  //know which category user is in
  // fetch listings from that categroy
  //redirect to listings + send listings of that category
  // res.send("getting listings from category: " + req.params.cat_name);
  res.redirect();
};

exports.listingGet = async (req, res) => {
  const listing = await db.getListing(req.params.id);
  res.render("viewListing", { listing: listing });
  // res.send("getting listing with id: " + req.params.id);
};

exports.listingCreateGet = async (req, res) => {
  res.render("createListingForm", {});
  // res.send("getting form to create listing");
};

exports.listingCreatePost = [
  validateListing,
  async (req, res) => {
    console.log(req.body.title);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors.array());
      return res.status(400).send("Error with creating new lsiting");
    }
    // add listing to db
    await db.insertListing(req.body);
    res.redirect("/listings");

    // res.send("posting new created listing");
  },
];

exports.listingUpdateGet = async (req, res) => {
  res.render("updateListingForm", {});
  // res.send("getting form to update listing");
};

exports.listingUpdatePost = async (req, res) => {
  res.send("posting updated listing");
};

exports.listingDelete = async (req, res) => {
  res.send("delting lisintg" + req.params.id);
};
