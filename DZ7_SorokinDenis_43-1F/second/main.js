class TrafficLight {
    constructor(redId, yellowId, greenId, messageId) {
        this.redLight = document.getElementById(redId);
        this.yellowLight = document.getElementById(yellowId);
        this.greenLight = document.getElementById(greenId);
        this.message = document.getElementById(messageId);
    }

    resetLights() {
        this.redLight.style.backgroundColor = "gray";
        this.yellowLight.style.backgroundColor = "gray";
        this.greenLight.style.backgroundColor = "gray";
        this.message.innerText = "";
        this.message.style.color = "black";
    }

    setLight(color, text, textColor) {
        this.resetLights();
        if (color === "red") {
            this.redLight.style.backgroundColor = color;
        } else if (color === "yellow") {
            this.yellowLight.style.backgroundColor = color;
        } else if (color === "green") {
            this.greenLight.style.backgroundColor = color;
        }
        this.message.innerText = text;
        this.message.style.color = textColor;
    }

    handleUserInput() {
        const userInput = prompt("Введите цвет (Красный, Желтый, Зеленый)").toLowerCase();
        if (userInput === "красный") {
            this.setLight("red", "STOP", "red");
        } else if (userInput === "желтый") {
            this.setLight("yellow", "WAIT", "yellow");
        } else if (userInput === "зеленый") {
            this.setLight("green", "GO", "green");
        } else {
            this.message.innerText = "Неверный ввод!";
            this.message.style.color = "black";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const trafficLight = new TrafficLight('red', 'yellow', 'green', 'message');
    const button = document.getElementById("inputButton");

    button.addEventListener("click", function() {
        trafficLight.handleUserInput();
    });
});
