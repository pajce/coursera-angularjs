(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.items =  ShoppingListCheckOffService.getItemsToBuy();
  listToBuy.size =  ShoppingListCheckOffService.getItemsToBuy().length;

  listToBuy.buyItem = function (itemIndex) {
     ShoppingListCheckOffService.buyItem(itemIndex);
     }
  }


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    { name: "Coca Cola", quantity: "5 bottles"},
    { name: "Chips", quantity: "7 bags" },
    { name: "Popcorn", quantity: "10 bags" },
    { name: "Cookies", quantity: "15 pieces"  },
    { name: "Chocolate", quantity: "3 tables" },
    { name: "Pepsi", quantity: "3 bottles" }
  ] ;

 var boughtItems =[ ];

  service.buyItem = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    boughtItems.push(item);
    service.getBoughtItems();
    service.removeItem();
};

  service.removeItem = function (itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
  }
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return service.boughtItems;
  };
}
})();
