//import db

exports.devsListGet = async (req, res) => {
  res.send("getting devs");
};

exports.devNewGet = async (req, res) => {
  res.send("getting form to create new dev");
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
  res.send("getting dev");
};

exports.devDelete = async (req, res) => {
  res.send("delting dev" + req.params.id);
};
