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
        this.setLocalStorage();
        this.save(item.name,item.description,item.imageUrl,item.price);
    }

    loadItemsFromLocalStorage() {      
        let items = localStorage.getItem("items");
        let currentId = localStorage.getItem("currentId");
        
        this._items = items ? JSON.parse(items) : this._items;
        this._currentId = currentId ? JSON.parse(currentId) : this._currentId;        
    }

    setLocalStorage() {
        let currentId = JSON.stringify(this._currentId);
        let items = JSON.stringify(this._items);
        localStorage.setItem("currentId", currentId);
        localStorage.setItem("items", items);        
    }

    get items(){
        return this._items;
    }

    set items(items){
        this._items = items;
    }
    //Save products
    save({name, description, imageUrl, Price}){
        const data = { name,  description, imageUrl,Price };

        fetch('https://pure-harbor-89998.herokuapp.com/Product', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
}

