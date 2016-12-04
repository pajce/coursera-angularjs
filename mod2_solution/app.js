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

  service.itemsToBuy = [
    { name: "Chips", quantity: "10 bags" },
    { name: "Coca Cola", quantity: "5 bottles"},
    { name: "Chips", quantity: "7 bags" },
    { name: "Popcorn", quantity: "10 bags" },
    { name: "Pizza", quantity: "5 rings" },
    { name: "Cookies", quantity: "15 pieces"  },
    { name: "Chocolate", quantity: "3 tables" },
    { name: "Pepsi", quantity: "3 bottles" },
    { name: "Beer", quantity: "50 large bottles" }
  ] ;

  service.boughtItems =[ ];

  service.buyItem = function (itemIndex) {
    var item = service.itemsToBuy[itemIndex];
    service.boughtItems.push(item);
    service.getBoughtItems();
    service.removeItem();
};

  service.removeItem = function (itemIndex) {
    service.itemsToBuy.splice(itemIndex, 1);
  }
  service.getItemsToBuy = function () {
    return service.itemsToBuy;
  };

  service.getBoughtItems = function () {
    return service.boughtItems;
  };
}

})();
