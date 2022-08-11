
var sunSets = new Array(":)", ":/", ":(")

imgArray[0] = new Image();
imgArray[0].src = url(desertscape.png);

function getRandomNumber() {
     var t = Math.floor(Math.random() * sunSets.length);
     return sunSets[t]
}

function getElement(id) {
    return document.getElementById(id);
}


function spin() {
    const slot1 = getElement('slot1');
    const slot2 = getElement('slot2');
    const slot3 = getElement('slot3');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    slot1.innerHTML = `${num1}`;
    slot2.innerHTML = `${num2}`;
    slot3.innerHTML = `${num3}`;

    var goob = document.getElementById('goob')

    if (num1 == num2 && num1 == num3) {
        console.log("Winner!!")
        goob.innerHTML = "Winner!!";
    //    window.alert("YOU WIN $100!!!");
    } else {
        goob.innerHTML ="";
        console.log('Loser')
    }
}
document.getElementById("goob").style.transitionDuration = "1s";

function mDown(obj){
    obj.style.backgroundColor = "#1ec5e5"
    obj.innerHTML = "Good Luck!"
}
function mUp(obj){
    obj.style.backgroundColor="#D94A38"
    obj.innerHTML = "Spin Here!!";
}