// The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const filterProducts=(products,criterion)=>{
    return products.filter(products=>{
        return products.category ===criterion;
    })
}

let arr =[
    {id:1, name:'Shirt', category:'clothing'},
    {id:2, name:'momo', category:'food'},
    {id:3, name:'mobile', category:'electronics'}
]

let filerArr = filterProducts(arr,'food');
console.log(filerArr);