let Products = {}

document.querySelector('form').onsubmit = e => {  
    e.preventDefault()

    // Create a backend list of products
    const Product = {}
    
    const attributes = [
        'Nombre', 'Precio', 
        'Cantidad', 'Categoría'
    ] 

    // Attach a brand new product to the fronted table
    const tr = document.createElement('tr')
    const tbody = document.querySelector('tbody')

    tbody.appendChild(tr)

    for (const attribute of attributes) {
        // Backend
        let value = document.querySelector
        (`#${attribute}`).value
        
        Product[attribute] = value

        // Frontend
        const data = document.createElement('td')
        data.innerText = value 

        tr.appendChild(data)

        document.querySelector
        (`#${attribute}`).value = ''
    }

    const trashCan = document.createElement('td')
    trashCan.innerHTML = '<i class="fa fa-trash-o"></i>'
    tr.appendChild(trashCan)

    trashCan.onclick = () => {
        console.log('[Product Removed]', Product.Nombre)
        console.log('Products List', Products)

        delete Products[Product.Nombre]
        tbody.removeChild(tr)
    }
    

    Products[Product.Nombre] = Product
    console.log('[Product Registered]', Product.Nombre)
    console.log('Products List', Products)
}