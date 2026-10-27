module.exports = {
    urls:{
        login: process.env.BASE_URL,
        inventory: process.env.BASE_URL + '/inventory.html'
    },
    texts:{
        productsTitle: 'Products',
        sauceLabsBackpackText: 'Sauce Labs Backpack',
        sauceLabsBikeLightText: 'Sauce Labs Bike Light'
    },
    sortOptions: {
        priceLowToHigh: 'Price (low to high)',
        priceHighToLow: 'Price (high to low)',
        nameAsc: 'Name (A to Z)',
        nameDesc: 'Name (Z to A)'
    }

}
