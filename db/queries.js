const pool = require("./pool");

async function getAllListings() {
  const { rows } = await pool.query("SELECT * FROM listings");
  return rows;
}

async function getAllDevs() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}

async function insertListing(listing) {
  await pool.query("INSERT INTO listings (listing) VALUES ($1)", [listing]);
}

module.exports = {
  getAllListings,
  insertListing,
  getAllDevs,
};
