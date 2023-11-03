class Simpsons {
    constructor(firstName){
        this.firstName = firstName;
        this.lastName = "Simpson";
        this.street = "Evergreen Terrace";
        this.timesSaidHi = 0;
        this.timesSaidHiTo = 0;
    }
    printName(){
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    }
    sayHiToOtherSimpson(anotherSimpson){
        this.timesSaidHi++;
        anotherSimpson.timesSaidHiTo++;
        console.log(`${this.firstName} ${this.lastName} says hi to ${anotherSimpson.firstName} ${anotherSimpson.lastName}. 
        ${this.firstName} has said hi ${this.timesSaidHi} times. ${anotherSimpson.firstName} has said hi to ${this.firstName}
         ${this.lastName} ${anotherSimpson.timesSaidHiTo} times.}
         ${anotherSimpson.firstName} ${anotherSimpson.lastName} lives at ${anotherSimpson.street}.`);
    }
}

const homer = new Simpsons("Homer");
const marge = new Simpsons("Marge");
const bart = new Simpsons("Bart");
const lisa = new Simpsons("Lisa");
const maggie = new Simpsons("Maggie");

homer.sayHiToOtherSimpson(marge);
marge.sayHiToOtherSimpson(maggie);
bart.sayHiToOtherSimpson(homer);
lisa.sayHiToOtherSimpson(bart);
maggie.sayHiToOtherSimpson(homer);


homer.printName();