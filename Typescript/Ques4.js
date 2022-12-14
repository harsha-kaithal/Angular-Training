var Item = /** @class */ (function () {
    function Item(itemId, itemName, itemPrice, category) {
        var _this = this;
        this.display = function () {
            console.log("Item Id: " + _this.itemId + "\nItem Name: " + _this.itemName + "\nItem Price: " + _this.itemPrice + "\nCategory of Item: " + _this.category);
        };
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
    }
    return Item;
}());
var item = new Item(1, 'T-shirt', 699, 'Clothes');
item.display();
