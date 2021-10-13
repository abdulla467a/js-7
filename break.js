const products =[
    {name:'samsung', price: 12000},
    {name:'asus', price: 100},
    {name:'lenevo', price: 200},
    {name:'hp', price: 100},
    {name:'acer', price: 8800},
    {name:'razer', price: 900},
    {name:'mac', price: 800},
    {name:'dell', price: 77200},
    {name:'sony', price: 17000},
    {name:'walton', price: 5200}
];

// for(const product of products){
//     if (product.price < 10000){
//         break;
//     }
//     console.log(product)
// }

for(const product of products){
    if(product.price < 1000){
        continue;
    }
    console.log(product)
}