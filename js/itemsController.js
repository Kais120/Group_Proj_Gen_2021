// Create a ItemsController class
export default class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this._items = [];
        this._currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description,imageUrl, price = 0) {
        const item = {
            // Increment the currentId property
            id: this._currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
            price: price
        };

        // Push the item to the items property
        this._items.push(item);
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems)
            this._items = items;       
        }
    }

    get items(){
        return this._items;
    }

    set items(items){
        this._items = items;
    }
}

