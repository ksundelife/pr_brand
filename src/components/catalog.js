function createItemTemplateIndex(item) {
   
    return `<div class="product-wrap">
                <a href="single_page.html"><img class="product__img" src="${item.productImg}" alt="product"></a>
                <div class="product__content">
                    <a href="single_page.html" class="product__name">${item.productName}</a>
                    <div class="product__price">$${item.productPrice}</div>
                </div>
                <button
                    class="product__add fas fa-shopping-cart"
                    name="add"
                    data-id="${item.productId}" 
                    data-price="${item.productPrice}" 
                    data-name="${item.productName}" 
                    data-image="${item.productImg}"
                > Add to Cart
                </button>
            </div>`
}
function createItemTemplateProduct(iteme) {
   
    return `<div class="product-wrap">
                <a href="single_page.html"><img class="product__img" alt="product" src="${iteme.productImg}"></a>
                <div class="product__content">
                    <a href="single_page.html" class="product__name">${iteme.productName}</a>
                    <div class="product__price">$${iteme.productPrice}</div>
                </div>
                <button
                    class="product__add fas fa-shopping-cart"
                    name="add"
                    data-id="${iteme.productId}" 
                    data-price="${iteme.productPrice}" 
                    data-name="${iteme.productName}" 
                    data-image="${iteme.productImg}"
                    > Add to Cart
                </button>
                <button href="#" class="product__add product__add__retweet fas fa-retweet"></button>
                <button href="#" class="product__add product__add__heart far fa-heart"></button>
            </div>`
}


/* С помощью JSON получаем базу */

let urlIndexPage = "https://raw.githubusercontent.com/ksundelife/static/master/JSON/index.json";
let urlProductPage = "https://raw.githubusercontent.com/ksundelife/static/master/JSON/product.json";

let catalogI = {
    container: null,
    items: [],
    basket: null,
    init (url) {
        this.container = document.querySelector('#catalog');
        this.getData(url)
            .then(items => {this.items = items})
            // .catch(() => { document.write('ERROR') })
            .finally(() => {
                this._render();
                this.basket = basket;
                this.handleActions();
            })
    },
    getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    },
    handleActions() {
        this.container.addEventListener('click', evt => {
            console.log(evt.target)
            console.log(evt.target.name)
            if (evt.target.name == 'add') {
                let datas = evt.target.dataset;

                let newProd = {
                    productId: datas.id,
                    productPrice: +datas.price,
                    productName: datas.name,
                    productImg: datas.image
                }

                this.basket.add(newProd);
            }
        })
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplateIndex(item);
        });
        this.container.innerHTML = htmlStr;
    }
}

let catalogP = {
    container: null,
    items: [],
    basket: null,
    init (url) {
        this.container = document.querySelector('#product');
        this.getData(url)
            .then(items => {this.items = items})
            // .catch(() => { document.write('ERROR') })
            .finally(() => {
                this._render();
                this.basket = basket;
                this.handleActions();
            })
    },
    getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    },
    handleActions() {
        this.container.addEventListener('click', evt => {
            console.log(evt.target)
            console.log(evt.target.name)
            if (evt.target.name == 'add') {
                let datas = evt.target.dataset;

                let newProd = {
                    productId: datas.id,
                    productPrice: +datas.price,
                    productName: datas.name,
                    productImg: datas.image
                }

                this.basket.add(newProd);
            }
        })
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(iteme => {
            htmlStr += createItemTemplateProduct(iteme);
        });
        this.container.innerHTML = htmlStr;
    }
}
