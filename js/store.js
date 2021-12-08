// Initialize a new TaskManager with currentId set to 0
import ItemsController from './itemsController.js';
const itemsController = new ItemsController(0);

// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

const sampleItems = [
    {'name':'juice',
    'imgUrl':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious',
    'price': 10.00},
    {'name':'Tayto',
    'imgUrl':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips',
    'price': 20.00}
];
//saving samples to local storage
localStorage.setItem("items", JSON.stringify(sampleItems));

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

    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const imgUrl = newItemImgUrl.value;
    const price = newPrice.value;

    // Add the task to the task manager
    itemsController.addItem(name, description, imgUrl, price);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImgUrl.value = '';

    //new object for rednering
    const itemObj = {
        name: name,
        description: description,
        imgUrl: imgUrl,
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
    newImg.src = item.imgUrl;
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

