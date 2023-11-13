const products = [
    {
        title: "JBL 3 ",
        price: 99.90,
        priceUnity: 'R$' 
    },
        {
        title: "Sony ",
        price: 89.90,
        priceUnity: 'R$' 
    },
]

function loadProduct() {
    const elementoPai = document.getElementById('product-list-row');

    products.forEach(product => {
        let colDiv = document.createElement('div')
        colDiv.className = 'col-sm-6 col-md-4 col-lg-3 mb-5';
        
        let productDiv = document.createElement('div');
        productDiv.className = 'product';

        let imageDiv = document.createElement('div');
        imageDiv.className = 'image-product';
        productDiv.appendChild(imageDiv);

   
        let titleSpan = document.createElement('span');
        titleSpan.className = 'title-product';
        titleSpan.textContent = product.title;
        productDiv.appendChild(titleSpan);


        let priceSpan = document.createElement('span');
        priceSpan.className = 'price-product';
        priceSpan.textContent = `${product.priceUnity} ${product.price}`;
        productDiv.appendChild(priceSpan);


        let buyButton = document.createElement('button');
        buyButton.className = 'buy-button';
        buyButton.textContent = 'Adc ao Carrinho';
        productDiv.appendChild(buyButton);

        colDiv.appendChild(productDiv);

        elementoPai.appendChild(colDiv);

 
    })  

}

function trocarTema() {
    const body = document.body;
    const isDarkTheme = body.classList.contains('dark-theme');

    body.classList.toggle('dark-theme', !isDarkTheme );
    
}

loadProduct()