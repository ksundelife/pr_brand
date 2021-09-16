let basket = {
    items: [],
    shown: false,
    container: null,
    itemsContainer: null,
    url: 'https://raw.githubusercontent.com/ksundelife/static/master/JSON/basket.json',
    init () {
        this.container = document.querySelector('#basket');
        this.itemsContainer = document.querySelector('#basket-items');
        this.getData(this.url)
            .then(basket => {this.items = basket.content})
            .finally(() => {
                this._render();
                this._handleActions();
                //this._renderTotalSum();
                this.getTotalSum()
                this.getCountsFromBasket();
                this.totalClear();

            })
    },
    getData(url) {
        return fetch(url) //JSON
            .then(data => data.json()) // JSON >>> Obj/Array
    },
    _render() {
        let str = '';
        this.items.forEach(item => {
           
            str += `<div class="dropdown__product" data-id="${item.productId}">
                        <a href="single_page.html" class="dropdown__photo"><img src="${item.productImg}"
                        alt="" class="dropdown__basket_img"></a>
                        <div class="dropdown__content">
                            <a href="single_page.html" class="dropdown__text">${item.productName}</a>
                            <div class="dropdown__countprice">${item.amount}<span
                            class="dropdown__x">&nbsp;&nbsp;x&nbsp;&nbsp;</span>$${item.productPrice * item.amount}</div>
                        </div>
                        <button class="dropdown__delete fas fa-times-circle" data-id="${item.productId}" name="remove"></button>
                    </div>`;
        });
        this.itemsContainer.innerHTML = str;
    },
    _handleActions() {
        document.querySelector('#basket-toggler').addEventListener('click', () => {
            this.shown = !this.shown;
            this.container.classList.toggle('invisible');
        });

        this.container.addEventListener('click', ev => {
            console.log(ev.target.name)
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        });
       
    },
    add(product) {
        let find = this.items.find(el => el.productId == product.productId);
            if (!find) {
                this.items.push(Object.assign(product, { amount: 1 }));
            } else {
                find.amount++;
            }
        this._render();
        getTotalSum();
        getCountsFromBasket();
    },
    _remove(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
        getTotalSum();
        getCountsFromBasket();
        totalClear();
    },
    getTotalSum() {
        let price = basket.items.map(a => a.productPrice);
        console.log(price);
        let sum = 0;
        for (let key in price) {
            sum += +(`${price[key] * basket.items[key].amount}`);
        }
        return document.querySelector('#total-sum').textContent = `$${sum}`;
    },
   
    getCountsFromBasket() {
        let counter = basket.items.map(a => a.amount);
        console.log(counter);
        let sum = 0;
        for (let key in counter) {
            sum += +counter[key];
        }
        return document.querySelector('#basket-count').textContent = `${sum}`;
        
    },
    totalClear() {
        document.querySelector('#clear-add').addEventListener('click', () => {
            basket.items.splice(0, basket.items.length);
            localStorage.removeItem('#basket-items');
            document.querySelector('#basket-items').textContent = `empty =(`;
            document.querySelector('#basket-count').textContent = `0`;
            document.querySelector('#total-sum').textContent = `$0`;
            console.log('Корзина очишена.');
        }); 
    },
};

basket.init();

function  getTotalSum() {
    let price = basket.items.map(a => a.productPrice);
    console.log(price);
    let sum = 0;
    for (let key in price) {
        sum += +(`${price[key] * basket.items[key].amount}`);
    }
    return document.querySelector('#total-sum').textContent = `$${sum}`;
}

function getCountsFromBasket() {
    let counter = basket.items.map(a => a.amount);
    console.log(counter);
    let sum = 0;
    for (let key in counter) {
        sum += +counter[key];
    }
    return document.querySelector('#basket-count').textContent = `${sum}`;
}

