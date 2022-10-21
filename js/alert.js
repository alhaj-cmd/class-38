
const getInputvalueByid = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputvalueByid('inputField');
    const quentity = getInputvalueByid('inputData');
    addProductToDisplay(product,quentity);
    // localStorage.setItem(product,quentity);
    saveItemlocalstore(product,quentity);
}

const getShopinglocalstore =()=>{
    let saveCart =localStorage.getItem('cart');
    let cart ={};
    if(saveCart){
        cart = JSON.parse(saveCart);
    }
    return cart;
}

const saveItemlocalstore = (product,quentity) =>{
    const cart =getShopinglocalstore();
    cart[product] = quentity;
    const cartStringiFied = JSON.stringify(cart)

    localStorage.setItem('cart',cartStringiFied);

}

const addProductToDisplay =(product, quentity) =>{
    const productContainer =document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quentity}`;
    productContainer.appendChild(li);
}

const displaysaveCartProduct = () =>{
    const cart = getShopinglocalstore();
    for(const product in cart){
        const quentity = cart[product];
        console.log(product, quentity);
        addProductToDisplay(product, quentity);
    }
}
displaysaveCartProduct()
