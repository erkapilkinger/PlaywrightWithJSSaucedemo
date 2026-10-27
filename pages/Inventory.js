class Inventory {
    constructor(page) {
        this.page = page;
        this.inventoryItems = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    getProductcard(productname) {
        return this.inventoryItems.filter({ hasText: productname });
    }

    async addProductToCart(productname) {
        const product= this.getProductcard(productname);
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }
    
} 

module.exports = { Inventory }; 