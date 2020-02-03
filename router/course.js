const express = require("express");
const router = express.Router();
const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" }
];
router.get("/:id", (req, res) => {
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("the id not found");

  res.send(course);
});

//POST
router.post("/", (req, res) => {
  const { error } = inputValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//PUT
router.put("/:id", (req, res) => {
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("the id not found");

  const { error } = inputValidation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

//DELETE
router.delete("/:id", (req, res) => {
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("the id not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

inputValidation = (input) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(input, schema);
};

module.exports = router;
