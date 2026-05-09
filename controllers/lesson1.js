const emilyRoute= (req, res) => {
  res.send('Emily is the best!');
}

const hannahRoute = (req, res) => {
  res.send('Hannah is the best!');
}

module.exports = {
  emilyRoute,
  hannahRoute
};