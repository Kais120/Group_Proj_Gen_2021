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
        setLocalStorage();
    }

    loadItemsFromLocalStorage() {      
        let items = localStorage.getItem("items");
        let currentId = localStorage.getItem("currentId");
        
        this._items = items ? JSON.parse(items) : this._items;
        this._currentId = currentId ? currentId : this._currentId;        
    }

    setLocalStorage() {
        let currentId = this._currentId;
        let items = JSON.stringify(this._currentId);
        localStorage.setItem("currentId", currentId);
        localStorage.setItem("items", items);        
    }

    get items(){
        return this._items;
    }

    set items(items){
        this._items = items;
    }
}

