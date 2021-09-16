const imgURL = 'https://raw.githubusercontent.com/ksundelife/static/master/img/js_shop_contents/';
let NAMES = [
    'MENS LONG JACKET', 
    'MENS BROUN COAT',
    'MENS BLUE JACKET',
    'MENS BLACK T-SHIRT',
    'MENS HOODIE',
    'MENS SPORTS JACKET',
    'MENS CLASSIC JACKET',
    'MENS INSULATED JACKET',
    'MENS BLUE T-SHIRT',
];
let PRICES = [51, 57, 55, 37, 45, 98, 94, 99, 37];

function getArrayOfObjects() {
    let local = [];

    for (let i = 0; i < NAMES.length; i++) {
        local.push({
            productName: NAMES[i],
            productPrice: PRICES[i],
            productImg: `${imgURL}product_${i + 1}.png`,
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
        this.container = document.querySelector('#product');
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
            <a href="single_page.html"><img class="product__img" alt="product" src="${item.productImg}"></a>
            <div class="product__content">
                <a href="single_page.html" class="product__name">${item.productName}</a>
                <div class="product__price">$${item.productPrice}</div>
            </div>
            <a href="#" class="product__add product__add__basket" onclick="dropBasket.init()"><i
                    class="fas fa-shopping-cart"></i>Add to Cart</a>
            <a href="#" class="product__add product__add__retweet"><i
                    class="fas fa-retweet"></i></a>
            <a href="#" class="product__add product__add__heart"><i class="far fa-heart"></i></a>
        </div>`
}


catalog.init();

let dropBasket = {
    container: null,
    items: [],
    init() {
        this.container = document.querySelector('#drop__basket');
        this._fillCatalogBasket();
        this._renderBasket();
    },
    _fillCatalogBasket() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    },
    _renderBasket() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplateBasket(item);
        });
        this.container.innerHTML = htmlStr;
    }
}
function createItemTemplateBasket(item) {
    return `<div class="dropdown__product">
                <a href="single_page.html" class="dropdown__photo"><img src="${item.productImg}" width="72" height="85" alt="" class=""></a>
                <div class="dropdown__content">
                    <a href="single_page.html" class="dropdown__text">${item.productName}</a>
                         <div class="dropdown__countprice">1<span class="dropdown__x">&nbsp;&nbsp;x&nbsp;&nbsp;</span>$${item.productPrice}</div>
                </div>
                <a href="#" class="dropdown__delete"><i class="fas fa-times-circle"></i></a>
            </div>`
}
function addEvent(elem, type, handler){
    if(elem.addEventListener){
      elem.addEventListener(type, handler, false);
    } else {
      elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}
for(var i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.dropdown__product'), 'click', addToCart);
  }
let buttonBasket = document.getElementsByTagName('product__add__basket');
for (let i = 0; i < buttonBasket.length; i++) {
    dropBasket.indexOf(i);
    buttonBasket[i].onclick = dropBasket.init;
}

function counter(){
    const productBasketCaunter = document.querySelector('#mini-counter');
    let i;
    const operations = []
    for (i = 0; i <= dropBasket.items.length; i++) {
      operations.push;
    }
    for (const operation of operations) {
        operation();
    }
    productBasketCaunter.innerHTML = i;
}
window.onload = counter;

//document.querySelector('.product__add__basket').onclick = dropBasket.init;
//dropBasket.init();
