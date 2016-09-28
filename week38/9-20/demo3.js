function sayName (firstName, lastName) {
    console.log('Name: %s-%s', firstName, lastName);
}

function lili (firstName, lastName){
    // sayName(firstName,lastName);
    sayName.apply(this, [firstName, lastName]);
    //或
    // sayName.apply(lili, [firstName, lastName]);
}

function lucy (firstName, lastName){
    // sayName(firstName,lastName);
    // sayName.apply(this, arguments);
    //或
    // sayName.apply(lucy, arguments);
    sayName(arguments[0],arguments[1]);
}
lili('lili', 'liu');  //Name: lili-liu
lucy('lucy', 'liu');  //Name: lucy-liu
