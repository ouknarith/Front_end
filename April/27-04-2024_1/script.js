function isSameProduct(product1, product2) {
    return (
        product1.name === product2.name && 
        product1.price === product2.price
    );
}

const product1 = {
    name: 'basketball',
    price: 2095
};

const product2 = {
    name: 'socket',
    price: 1090
};

const product3 = {
    name: 'basketball',
    price: 2095
};

console.log((isSameProduct(product1, product2).toString()).repeat(3)); // falsefalsefalse


console.log(isSameProduct(product1, product3)); // true



console.log('Good Morning' .toLowerCase().repeat(3));
console.log('TESTING' .toLowerCase());

console.log('Good everning' .toUpperCase());
console.log('trying' .toUpperCase());


console.log('hello' .repeat(5));
console.log('test' .repeat(5));