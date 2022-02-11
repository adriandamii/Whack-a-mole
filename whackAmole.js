function animals() {
    var arrAnimals = [];
    arrAnimals.push("&#128047;");//tigru
    arrAnimals.push("&#128040;");//coala
    arrAnimals.push("&#128023;");//mistret
    return arrAnimals[Math.floor(Math.random() * 3)];
}

function appearMoles() {
    var animal = animals();
    var positionValue = Math.floor(Math.random() * 6);
    var mole = document.getElementsByTagName("span")[positionValue];
    var capMole = document.getElementById("moleCap" + positionValue);
    capMole.style.color = "black";
    mole.innerHTML = animal;
    setTimeout(() => {
        var mole = document.getElementsByTagName("span")[positionValue];
        var capMole = document.getElementById("moleCap" + positionValue);
        capMole.style.color = "white";
        mole.innerHTML = "___";
    }, 700);
}

function molesArr() {
    var allMoles = [], allCapMoles = [];
    for (var i = 0; i < 6; ++i) {
        var elements = document.getElementsByTagName("span")[i];
        elementsCap = document.getElementById("moleCap" + i);
        allMoles.push(elements);
        allCapMoles.push(elementsCap);
    }
    checkMole(allMoles, allCapMoles);
}

function checkMole(allMoles, capMoles) {
    var inc = 0;
    allMoles.forEach((elementMole, i) => {
        var elementCapMole = capMoles[i];
        elementMole.style.cursor = "pointer";
        elementMole.addEventListener("click", function() {
            if (elementMole.innerHTML === "___") {
                document.getElementById("validClickText").textContent = "You must be quicker than this!"
            } else if ((elementMole.innerHTML = "&#128040;") || (elementMole.innerHTML = "&#128023;") || (elementMole.innerHTML = "&#128047;")) {
                elementCapMole.style.color = "white";
                elementMole.innerHTML = "___";
                ++inc;
                document.getElementById("score").textContent = "Score: " + inc;
                document.getElementById("validClickText").textContent = "Very good!"
            }
        });
    });
}

function start() {
    var button = document.getElementById("startButton");
    button.addEventListener("click", function() {
        button.hidden = "true";
        document.getElementById("score").textContent = "Score: 0";
        molesArr();
        setInterval(appearMoles, 700);
        setInterval(appearMoles, 500);
    });
}

start();