let screen=document.querySelector("#screen");

function getValue(val){
    screen.value=screen.value+val;
}
function calculate(){
    let answer=eval(screen.value);
        screen.value=answer;
}
function clearScreen(){
    screen.value="";
}