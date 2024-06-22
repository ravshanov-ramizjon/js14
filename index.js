let market = [
    {
        title: "moloko",
        type: 'milk',
        price: 12000,
        expDate: "2024-06-21"
    },
    {
        title: "cheese",
        type: 'milk',
        price: 68000,
        expDate: "2023-06-21"
    },
    {
        title: "watermelon",
        type: 'fruit',
        price: 8000,
        expDate: "2024-06-29"
    },
    {
        title: "banana",
        type: 'fruit',
        price: 24000,
        expDate: "2023-07-08"
    },
    {
        title: "apple",
        type: 'fruit',
        price: 5000,
        expDate: "2024-07-08"
    },
    {
        title: "baltika 7",
        type: 'alcohol',
        price: 18000,
        expDate: "2023-07-08"
    },
    {
        title: "jaguar",
        type: 'alcohol',
        price: 12000,
        expDate: "2025-07-08"
    },
]

let milkProducts = {
    total: 0,
    total_price: 0
}
let fruitProducts = {
    total: 0,
    total_price: 0
}
let alcoProducts = {
    total: 0,   
    total_price: 0
}




market.filter((item) => {
    if(item.type === 'milk') {
        milkProducts.total++
    } else if(item.type === 'alcohol') {
        alcoProducts.total++
    } else if(item.type === 'fruit') {
        fruitProducts.total++
    }
})



market.filter((item) => {
    if(item.type === 'milk') {
        milkProducts.total_price += item.price
    } else if(item.type === 'alcohol') {
        alcoProducts.total_price += item.price
    } else if(item.type === 'fruit') {
        fruitProducts.total_price += item.price
    }
})


let average_price = market.reduce ((a,b) => a + b.price, 0) / market.length 

let expiredProduct = []
market.filter((item) => {
    if(item.expDate < '2024-01-01'){
        expiredProduct.push(item.expDate + ' Просроченные')
    }
})

console.log(milkProducts, fruitProducts, alcoProducts, average_price + ' Средняя сумма всех продуктов', expiredProduct);