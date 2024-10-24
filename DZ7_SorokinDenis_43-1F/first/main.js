// Базовый класс Cars
class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

// Класс SportCar, наследующий от Cars
class SportCar extends Cars {
    constructor(model, color, wheels, maxSpeed) {
        super(model, color, wheels);
        this.maxSpeed = maxSpeed;
    }

    showSpeed() {
        console.log(`Максимальная скорость: ${this.maxSpeed} км/ч`);
    }
}

// Класс Truck, наследующий от Cars
class Truck extends Cars {
    constructor(model, color, wheels, loadCapacity) {
        super(model, color, wheels);
        this.loadCapacity = loadCapacity;
    }

    showLoadCapacity() {
        console.log(`Грузоподъёмность: ${this.loadCapacity} тонн`);
    }
}

// Класс ElectricCar, наследующий от Cars
class ElectricCar extends Cars {
    constructor(model, color, wheels, batteryCapacity) {
        super(model, color, wheels);
        this.batteryCapacity = batteryCapacity;
    }

    showBatteryCapacity() {
        console.log(`Ёмкость батареи: ${this.batteryCapacity} кВт·ч`);
    }
}

// Создание экземпляров каждого класса

const mySportCar = new SportCar('Ferrari', 'Красный', 4, 350);
mySportCar.start();
mySportCar.showSpeed();

const myTruck = new Truck('Volvo', 'Синий', 8, 20);
myTruck.start();
myTruck.showLoadCapacity();

const myElectricCar = new ElectricCar('Tesla', 'Белый', 4, 100);
myElectricCar.start();
myElectricCar.showBatteryCapacity();
