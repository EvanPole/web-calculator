///////////////
// Evan.Pole //
///////////////

let buffer = "";
let calc = 0;
let calcbox = document.getElementById("calcbox");

//Settings
calcbox.value = "0";


//function
function setcalc(value) {

}

function getcalc(value) {

}

function addcalc(input) {
    if (input == 'c') {
        calcbox.value = "";
        buffer = "";
        calc = "";
        input = "";
    }
    buffer += input;
    // console.log(buffer);
    calcbox.value = buffer;
}


// setTimeout(() => {
//     console.log(info);
//     document.getElementById("calcbox").value = "hoho"
// }, 150);
