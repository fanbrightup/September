function sayName (firstName, lastName) {
    console.log('Name: %s-%s', firstName, lastName);
}

function lisa (firstName, lastName){
    sayName.apply(this);
    //或
    // sayName.call(lisa, firstName, lastName);
    // console.log(lisa.arguments);
}



lisa('lisa', 'liu');
