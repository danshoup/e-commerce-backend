// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
  // belongsTo here...
// Categories have many Products
  // hasMany here...
// Products belongToMany Tags (through ProductTag)
  // belongsToMany here...
// Tags belongToMany Products (through ProductTag)
  // belongsToMany here...
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
