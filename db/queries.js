const pool = require("./pool");

async function getAllListings() {
  const { rows } = await pool.query("SELECT * FROM listings");
  return rows;
}

async function getAllDevs() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}

async function getDev(id) {
  const query = "SELECT * FROM developers WHERE id = $1";
  const values = [id];

  try {
    const result = await pool.query(query, values); //the $1 gets swapped with the values array
    return result.rows[0];
  } catch (err) {
    console.error("Error fetching dev:", err);
    throw err;
  }
}

async function getListing(listingId) {
  const query = "SELECT * FROM listings WHERE id = $1";
  const values = [listingId];

  try {
    const result = await pool.query(query, values); //the $1 gets swapped with the values array
    return result.rows[0];
  } catch (err) {
    console.error("Error fetching listing:", err);
    throw err;
  }
}

async function insertListing({ title, description, price }) {
  await pool.query(
    "INSERT INTO listings (title, description, price) VALUES ($1, $2, $3)",
    [title, description, price]
  );
}

module.exports = {
  getAllListings,
  getListing,
  insertListing,
  getAllDevs,
  getDev,
};
