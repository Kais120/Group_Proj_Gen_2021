// Product filter page
const items = document.querySelectorAll('.dropdown-item');
const listProducts = document.querySelectorAll('.product');

for(i=0; i < items.length; i++ ){
    items[i].addEventListener("click", (e)=>{
         e.preventDefault();

         const filter = e.target.dataset.filter;
        //  console.log(filter);
        listProducts.forEach((product) => {
            if(filter == "all") {
                product.style.display = "block"
            }else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block"
                }else{
                    product.style.display = "none"
                }
            }
        })
    })
}