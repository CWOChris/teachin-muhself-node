function MakeCar(year, make, model){
    this.year = year;
    this.make = make;
    this.model = model;
    this.carColor = color;
}

const car1 = new MakeCar(2010, 'Toyota', 'Camry', 'Black');
const car2 = new MakeCar(2015, 'Honda', 'Accord', 'White');
const car3 = new MakeCar(2018, 'Tesla', 'Model 3', 'Red');

console.log(car1);