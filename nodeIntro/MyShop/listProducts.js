var faker = require('faker');

function fakeRun() {
    for(var i=1; i<=10; i++) {
        console.log(i +". " + faker.commerce.productName() + " is $" + faker.commerce.price());
    }
}

fakeRun();