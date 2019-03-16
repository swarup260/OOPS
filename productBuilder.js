const Product = require('./product')
class ProductBuilder {

    constructor(name) {
        this.name = name
        this.creationDate = new Date
        this.attributeSets = []
    }
    setSku(sku) {
        this.sku = sku
        return this
    }

    makeSimpleProduct() {
        this.type = 'simple'
        return this
    }
    makeConfigurableProduct() {
        this.type = 'configurable'
        return this
    }
    makeGroupProduct() {
        this.type = 'group'
        return this
    }
    makeGiftProduct() {
        this.type = 'gift'
        return this
    }
    makeVirtualProduct() {
        this.type = 'virtual'
        return this
    }

    makeDownloadableProduct() {
        this.type = 'downloadable'
        return this
    }

    setStatus(status) {
        this.status = status == null ? true : status
        return this
    }

    setQty(qty) {
        this.qty = qty
        return this
    }

    setPrice(price) {
        this.price = price
        return this
    }

    addAttribute(attributeName, attributeValue) {
        this.attributeSets.push({
            attributeName: attributeName,
            attributeValue: attributeValue
        })
        return this
    }

    setUpdationDate() {

    }


    build() {
        new Product(this)
    }
}

module.exports = ProductBuilder