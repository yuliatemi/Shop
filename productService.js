

class ProductService {

constructor (products = []) {
    this.products = products
}

    
    get (index) {
        return this.products[index]
    }

    filterBy (search = '') {
        if (!search.trim()) return this.products
    
        return this.products.filter (product =>{
            return product.title.toLowerCase().includes(search.toLocaleLowerCase())
        })
    
    }
    
    getById (id) {
        return this.products.find (product => {
           return product.id === id
        })
    }

    
}





   
