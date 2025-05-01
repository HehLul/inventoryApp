//import db

const LISTINGS = [
  {
    title: "Hello",
    description: "This i scoo lsaas pls buy",
    price: 13000,
    id: 43243,
  },
];

exports.listingsGet = async (req, res) => {
  res.render("listings", { listings: LISTINGS });
  // res.send("getting listings");
};

exports.listingsCategoryGet = async (req, res) => {
  res.send("getting listings from category: " + req.params.cat_name);
};

exports.listingGet = async (req, res) => {
  res.send("getting listing with id: " + req.params.id);
};

exports.listingCreateGet = async (req, res) => {
  res.render("createListingForm", {});
  // res.send("getting form to create listing");
};

exports.listingCreatePost = async (req, res) => {
  res.send("posting new created listing");
};

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
