const productService = new ProductService (data)
const cartService = new CartService ()
const htmlService = new HTMLService ()

const productsContainer = document.getElementById ('products')
const cartContainer = document.getElementById ('cart')

const filterInput = document.getElementById ('filter')

filterInput.addEventListener('input', event => {
    const value = event.target.value
    
    const filteredProducts = productService.filterBy (value)

    renderProducts(filteredProducts)
})


productsContainer.addEventListener ('click', event => {
    const id = event.target.dataset.id 
       ? event.target.dataset.id 
       : event.target.closest('li')?.dataset.id


    if(id) {
        cartService.add(
            productService.getById(+id)
        )
        renderCart()
    }
})

cartContainer.addEventListener('click', event => {
    const type = event.target?.dataset.type
    const id = event.target?.dataset.id

    switch (type) {
        case 'clear':
            cartService.clear()
            renderCart()
            break
        case 'remove':
            cartService.remove(id)
            renderCart()
            break    
    }
})

function renderProducts (products) {
    productsContainer.innerHTML = htmlService.paintProducts (products)
}

function renderCart () {
    cartContainer.innerHTML = htmlService.paintCart (
      cartService.getInfo ()
    )

}


renderCart ()
renderProducts (productService.products)

