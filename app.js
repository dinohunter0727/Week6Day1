const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let overSpace = $("#space");

for (var i = 0; i < storeItems.length; i++) {
    let item = storeItems[i];
    if (item.inStock) {
       overSpace.append(newProduct(item));
    }
}
    
function newProduct(item) {
    let price = item.price;
    let name = item.name;
    let details = item.details;
    let appended = "<div class='product'><p id='price'> $" + price + "</p><p id='name'>" + name + "</p><p id='details'>" + details + "</p></div>";
    return appended;
}

$("#toggle").on('click', function() {
    $(".product").toggleClass("darkProduct");
    $("body").toggleClass("darkBody");
    $("#title h2").toggleClass("darkTitle");
    $("#title div").toggleClass("darkTitle");
});

