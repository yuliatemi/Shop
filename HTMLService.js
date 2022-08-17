
function ellipsis (string = '', maxlenght = 50) {
    if (string.length > maxlenght) {
        return string.substring (0, maxlenght) + '...'
    }
    return string
}



class HTMLService {
    paintProduct (product) {
         return ` 
       <li data-id="${product.id}">
        <image src="${product.image}" title="${product.title}" />
        <small>${ellipsis(product.title)}</small>
        <small><strong>$${product.price}</strong></small>
       </li> `
    }


    paintProducts (products = []) {
        return products.map (this.paintProduct).join ('')  
    }

    paintCartItem (item) {

        return `
        <li data-type="remove" data-id="${item.id}">
          (${item.amount})
           ${item.title}
           <strong>$${item.price}</strong>
        </li>`
    }



    paintCart ({items, totalPrice}) {
        if (items.length === 0) {
            return `<p>Корзина пуста</p>`
        }

        return `
          <ul class="cart-list">
            ${items.map(this.paintCartItem).join('')}
          </ul>
          <hr />
          <p class="info">
            <span>Jбщая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
            <button class="clear" data-type="clear">Очистить</button>
          </p>
        `
        
    }

}