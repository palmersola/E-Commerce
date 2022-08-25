const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: Product
  }).then(all_categories => {
    res.json(all_categories);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    where: {
      id: req.params.id
    },
    include: Product
  }).then(all_categories => {
    res.json(all_categories);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(new_category => {
    res.json(new_category);
  });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(updated_category => {
    res.json(updated_category);
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(res.json("category deleted"));
});

module.exports = router;
