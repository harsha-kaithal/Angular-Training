class Item{
    itemId: number;
    itemName: string;
    itemPrice: number;
    category: string;
    constructor(itemId:number,itemName:string,itemPrice:number,category:string){
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
    }

    display=()=>{
        console.log("Item Id: "+this.itemId+"\nItem Name: "+this.itemName+"\nItem Price: "+this.itemPrice+"\nCategory of Item: "+this.category)
    }

}

let item = new Item(1,'T-shirt',699,'Clothes');
item.display();