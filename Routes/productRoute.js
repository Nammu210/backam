const {
  addProducts,
  fetchData,
  deleteProduct,
  fetchParticularbyCat,
  fetchParticularbySubCat,
  addProductTodb,
  searchproduct,
} = require("../Controller/product");

const productRoute = require("express").Router();

productRoute.post("/data", addProducts);
productRoute.post("/datas", addProductTodb);

productRoute.get("/fetchdata", fetchData);
productRoute.get("/fetchbycat/:category", fetchParticularbyCat);
productRoute.delete("/deleteall", deleteProduct);
productRoute.get("/search", searchproduct);

module.exports = productRoute;
