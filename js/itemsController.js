// Create a ItemsController class
export default class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description,imageUrl, price = 0) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
            price: price
        };

        // Push the item to the items property
        this.items.push(item);
    }
}

