const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product.product_name
  }).then(all_tags => {
    res.json(all_tags);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({
    where: {
      id: req.params.id
    },
    include: Product.product_name
  }).then(tag => {
    res.json(tag);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(new_tag => {
    res.json(new_tag);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
        tag_id: req.params.id
      }
    }
  ).then(updated_tag => {
    res.json(updated_tag);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  });
});

module.exports = router;
