// https://www.youtube.com/watch?v=I5kj-YsmWjM
//CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    // console.log(input);
    // hi Emma
     display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
