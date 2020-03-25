fetch('products.json')
    .then((data) => {
        return data.json()
    })
    .then((fetchedProducts) => {
        fetch('hand.hbs')
            .then((handData) => {
                return handData.text()
            })
            .then((handData) => {
                let hbsTemplate = Handlebars.compile(handData);

                var products = hbsTemplate(fetchedProducts);
                document.querySelector('.product-container').innerHTML = products
            })
    });

