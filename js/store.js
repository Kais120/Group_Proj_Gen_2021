// Initialize a new TaskManager with currentId set to 0
import ItemsController from './itemsController.js';
const itemsController = new ItemsController(0);

// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

//loading samples to controller items
itemsController.loadItemsFromLocalStorage();

const items = itemsController.items;
//rendering each item
items.forEach(item => addItemCard(item));

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemNameInput = document.querySelector('#itemName');
    const newItemDescription = document.querySelector('#itemDescription');
    const newItemImgUrl = document.querySelector('#itemImgUrl');
    const newPrice = document.querySelector('#itemPrice');

     // Get the values of the inputs
     const name = encodeURIComponent(newItemNameInput.value);
     const description = encodeURIComponent(newItemDescription.value);
     const imageUrl = encodeURIComponent(newItemImgUrl.value);
     const price = encodeURIComponent(newPrice.value);
 

    /*
        Validation code here
    */

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  
    
    if (!imageUrl.match(expression)) {
        alert("Please enter a valid URL");        
        return;
    }


   
    // Add the task to the task manager
    itemsController.addItem(name, description, imageUrl, price);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImgUrl.value = '';
    newPrice.value = '';

    //new object for rednering
    const itemObj = {
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
    };

    //call rendering function
    addItemCard(itemObj)
});


function addItemCard(item){
    //accessing items table
    const itemsTblBody = document.getElementById("itemsTableBody");
    // new tr element for table
    const newTr = document.createElement("tr");
    // new td for image
    const newImgTd = document.createElement("td");
    //new img for img td
    const newImg = document.createElement("img");
    //new name td
    const newNameTd = document.createElement("td");
    //new new desctiption td
    const newDescTd = document.createElement("td");
    //new price td
    const newPriceTd = document.createElement("td");


    //setting img props
    newImg.src = item.imageUrl;
    newImg.alt = item.name;
    newImg.className = "item-img";
    //appending img to imgTd
    newImgTd.appendChild(newImg);

    //setting name td
    newNameTd.innerHTML = item.name;

    //setting name td
    newDescTd.innerHTML = item.description;

    //setting price td
    newPriceTd.innerHTML = item.price;

    //appending tds to the newtr
    newTr.appendChild(newImgTd);
    newTr.appendChild(newNameTd);
    newTr.appendChild(newDescTd);
    newTr.appendChild(newPriceTd);

    //append to the table body
    itemsTblBody.appendChild(newTr);
}

