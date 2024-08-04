const product = [

    {
        id:1,
        name: "Laptob",
        price: 1000
    },
    {
        id: 2,
        name: "Mobltel",
        price: 500
    },
    {
        id: 3,
        name: "TV",
        price: 2000
    }, 

];
console.log(product);

const Custom = [
    
    {
        id: 1,
        name: "john",
        year: "20",
        gender: "female",
    }
    ,

    {
        id: 2,
        name: "jenny",
        year: "50",
        gender: "male"
    }
    ,
    {
        id: 3,
        name: "john keby",
        year: "45",
        gender: "male",
    }
    ,

];
console.log(Custom);


function  comparePrice(product1, product2)
{
    if (product1.price > product2.price){
        return product1;
    }
    else
    {
        return product2;
    }
    
}

const product1 = {
    name: 'basketbal',
    price: 2095
    };
const product2 = {
    name: 'socket',
    price: 1090
    };

console.log(comparePrice(product1, product2));