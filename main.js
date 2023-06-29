///////////////
// Evan.Pole //
///////////////

let buffer = "";
let calc = "";
let waitcalc = "";
let calcbox = document.getElementById("calcbox");

//Settings
calcbox.value = "0";


//function

function calculerExpression(expression) {
    expression = expression.replace(/\s/g, '');
  
    var caracteresValides = /^[0-9+\-*/^().]+$/;
    if (!caracteresValides.test(expression)) {
      return 'Expression invalide';
    }
  
    try {
      var resultat = eval(expression); 
      return resultat;
    } catch (error) {
      return 'Erreur lors de l\'évaluation de l\'expression';
    }
  }

function addcalc(input) {

    if (input == 'c') {
        calcbox.value = "";
        buffer = "";
        calc = "";
        input = "";
    }
    if (input == '=') {
        console.log(calculerExpression(buffer));
        calcbox.value = calculerExpression(buffer);
        buffer = calculerExpression(buffer)
        input = "";
    }
    buffer += input;
    calcbox.value = buffer;

}



  
// setTimeout(() => {
//     console.log(info);
//     document.getElementById("calcbox").value = "hoho"
// }, 150);
