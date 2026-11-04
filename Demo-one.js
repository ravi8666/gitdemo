class Car{

    company = "Kia";
    model = "Carrens";
    color = "Black";
    price = 2500000;
    milage = 23.45;
    wheels = 4;

    startCar(){
        console.log(this.company+" car has started");
    }

    stopCar(){
        console.log(this.company+" car has started");
    }

    carDetails(){
        console.log("company of the car is " + this.company);
        console.log("model of the car is " + this.model);
        console.log("color of the car is " + this.color);
        console.log("price of the car is " + this.price);
        console.log("milage of the car is " + this.milage);
        console.log("wheels of the car is " + this.wheels);
    }


}

const car1 = new Car();

console.log(car1);

console.log(car1.wheels);

car1.startCar();
car1.stopCar();
car1.carDetails();
