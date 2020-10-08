"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var path = require('path');

var rootDir = require('../util/path');

var p = path.join(rootDir, 'data', 'products.json');

var getProductsFromFile = function getProductsFromFile(cb) {
  // return products;
  fs.readFile(p, function (err, fileContent) {
    if (err) {
      cb([]);
    } else cb(JSON.parse(fileContent));
  });
};

module.exports =
/*#__PURE__*/
function () {
  function Product(title) {
    _classCallCheck(this, Product);

    this.title = title;
  }

  _createClass(Product, [{
    key: "save",
    value: function save() {
      var _this = this;

      getProductsFromFile(function (products) {
        products.push(_this);
        fs.writeFile(p, JSON.stringify(products), function (err) {
          if (err) console.log(err);
        });
      });
    }
  }], [{
    key: "fetchAll",
    value: function fetchAll(cb) {
      getProductsFromFile(cb);
    }
  }]);

  return Product;
}();