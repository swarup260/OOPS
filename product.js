class Product {
    constructor(name,sku,type,price,qty,attributeSets,creationDate,updationDate,status){
        this.name = name
        this.sku = sku
        this.type = type
        this.price = price
        this.qty = qty
        this.attributeSets = attributeSets
        this.creationDate = creationDate
        this.updationDate = updationDate
        this.status = status
    }
}

module.exports = Product;