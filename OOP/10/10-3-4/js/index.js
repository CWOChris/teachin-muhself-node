function MakeCar(year, make, model, color) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
    this.dealership = "Bob's Car Lot";
    this.previousOwners = [];
    this.horn = function() {
        console.log("Beep!");
    };
}

MakeCar.prototype.addPreviousOwner = function(ownerName) {
    this.previousOwners.push(ownerName);
};

MakeCar.prototype.runnings = function() {
    this.running = true;
};

const car1 = new MakeCar(2018, "Toyota", "Camry", "Black");
const car2 = new MakeCar(2019, "Honda", "Accord", "Blue");
const car3 = new MakeCar(2020, "Ford", "Mustang", "Red");

car2.addPreviousOwner("Bob");
car3.addPreviousOwner("Sally");
car3.addPreviousOwner("Joe");

console.log(car2);
console.log(car3);

const students = ["Bob", "Sally", "Joe"];
Array.prototype.concat = function() {
    for (i=0; i < students.length; i++) {
        let studentString = "";
        studentString = studentString + students[i] + " ";
    }
    console.log(studentString);
};

students.concat();
console.log(students);