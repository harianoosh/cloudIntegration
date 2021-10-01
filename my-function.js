exports.say = (req, res) => {
  console.log(req.query.keyword)
  let message = 'Anoosh Hari Says '+(req.query.keyword || 'Hello');
  res.status(200).send(message);
};
