//to read the color values

var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.querySelector(".color2");
//we have to change the background color: which is applied in the body tag
var body = document.querySelector("body");


function setGradient(){
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent = body.style.background+";";
}
//body.style.background = "linear-gradient(to right,red,blue)";
//any time input changes, we have to detect that => input
//getelementbyid
//alert(color1.value);
color1.addEventListener("input",setGradient);
    //body.style.background = color2.value;
    //console.log(color2.value);
//     //color2 isn't selected here so the default value stays at first
    //body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    //since it is an input color1.value
    //console.log(color1.value);

//color2.addEventListener("input",setGradient()); ->don't need brackets as the input changes functio is called till then pass the reference
color2.addEventListener("input",setGradient);
//color2.addEventListener("input",function(){
    //console.log(color1.value);
    //color2 isn't selected here so the default value stays at first
    //body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    //since it is an input color1.value
//  
//});