const imgURL = 'https://raw.githubusercontent.com/ksundelife/static/master/img/js_shop_contents/';
let NAMES = [
    'MENS MARINA T-SHIRT', 
    'WOMENS RED BLOUSE', 
    'MENS BLUE JACKET',
    'WOMENS BLOUSE WITH FLOWERS',
    'WOMENS STRIPED BLOUSE',
    'MENS CLASSIC JACKET',
    'MENS BEIGE TROUSERS',
    'MENS HOODIE'
];
let PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

function getArrayOfObjects() {
    let local = [];

    for (let i = 0; i < NAMES.length; i++) {
        local.push({
            productName: NAMES[i],
            productPrice: PRICES[i],
            productImg: `${imgURL}product${i + 1}.png`,
            productId: 'prod_' + i
            //rates (звезды)
        })
    }
    return local;
}

let catalog = {
    container: null,
    items: [],
    init() {
        this.container = document.querySelector('#catalog');
        this._fillCatalog();
        this._render();
    },
    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }
}

function createItemTemplate(item) {
    return `<div class="product-wrap">
                <a href="single_page.html"><img class="product__img" src="${item.productImg}" alt="product"></a>
                <div class="product__content">
                    <a href="single_page.html" class="product__name">${item.productName}</a>
                    <div class="product__price">$${item.productPrice}</div>
                </div>
                <a href="shopping_cart.html" class="product__add"><i class="fas fa-shopping-cart"></i>Add to
                    Cart</a>
            </div>`
}


catalog.init();