//import db

const db = require("../db/queries");

const devs = [];
exports.devsListGet = async (req, res) => {
  const devs = await db.getAllDevs();
  res.render("devs", { devs: devs });
};

exports.devNewGet = async (req, res) => {
  res.render("createDevForm", {});
  // res.send("getting form to create new dev");
};

exports.devNewPost = async (req, res) => {
  res.send("Posting new dev form");
};

exports.devUpdateGet = async (req, res) => {
  res.send("getting form to update dev");
};

exports.devUpdatePost = async (req, res) => {
  res.send("post updated dev");
};

exports.devGet = async (req, res) => {
  const dev = await db.getDev(req.params.id);
  res.render("viewDev", { dev: dev });
};

exports.devDelete = async (req, res) => {
  res.send("delting dev" + req.params.id);
};
