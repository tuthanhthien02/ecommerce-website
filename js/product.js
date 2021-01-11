const getProducts = async () => {
    try {
        
        const results = await fetch("/data/product.json");
        const data = await results.json();
        
        const products = data.products;
        return products;
        
    } catch (error) {
        console.log(error)
    }
}

// load products

window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    dispalyProductItems(products);
});

const categoryCenter = document.querySelector(".category__center");

const dispalyProductItems = items => {
    let displayProduct = items.map(product => `
    <div class="product flex">
        <div class="product__header">
            <img src="${product.image}" alt="">
        </div>
        <div class="product__footer">
        <h3>${product.title}</h3>
        <div class="rating">
            <svg>
            <use xlink:href="./images/sprite.svg#icon-star-full"></use>
            </svg>
            <svg>
            <use xlink:href="./images/sprite.svg#icon-star-full"></use>
            </svg>
            <svg>
            <use xlink:href="./images/sprite.svg#icon-star-full"></use>
            </svg>
            <svg>
            <use xlink:href="./images/sprite.svg#icon-star-full"></use>
            </svg>
            <svg>
            <use xlink:href="./images/sprite.svg#icon-star-full"></use>
            </svg>
        </div>
        <div class="product__price">
            <h4>$${product.price}</h4>
        </div>
        <a href="">
            <button class="btn product__btn">Add To Cart</button>
        </a>
        <ul class="flex">
            <li>
            <a href="" class="flex">
                <svg>
                <use xlink:href="./images/sprite.svg#icon-eye"></use>
                </svg>
            </a>
            </li>
            <li>
            <a href="" class="flex">
                <svg>
                <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                </svg>
            </a>
            </li>
            <li>
            <a href="" class="flex">
                <svg>
                <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                </svg>
            </a>
            </li>
        </ul>
        </div>
    </div>
    `);

    displayProduct = displayProduct.join('');

    if(categoryCenter){
        categoryCenter.innerHTML = displayProduct;
    }
}

// filtering

const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.querySelector(".category__container__tabs");

if(categoryContainer){
    categoryContainer.addEventListener("click", async e => {

        const target = e.target.closest(".category__tabs");
        
        if(!target) return;
        
        const id = target.dataset.id;
        const products = await getProducts();

        if(id){

            Array.from(filterBtn).forEach(btn => {
                btn.classList.remove("active");
            });
            
            target.classList.add("active");
        }

        let menuCategory = products.filter(product =>  {
            if(product.category === id){
                return product;
            }
        });

        if(id === "All Products"){
            dispalyProductItems(products);
        }
        else{
            dispalyProductItems(menuCategory);
        }

    });
}