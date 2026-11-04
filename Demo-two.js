class Car{

    company;
    model;
    color;
    price;
    milage;
    wheels;

    initializeClassVariables(company,model,color,price,milage,wheels){
        this.company = company;
        this.model = model;
        this.color = color;
        this.price = price;
        this.milage = milage;
        this.wheels = wheels;
    }

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

const kc = new Car();
kc.initializeClassVariables("Kia","Carrens","Black","2500000",23.45,4);
kc.startCar();
kc.stopCar();
kc.carDetails();
