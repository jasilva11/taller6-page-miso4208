var color1;
var color2;
var color3;
var color4;
var color5;
var lightness;

function randomPalette(){
	color1 = Math.floor(Math.random() * 360);
	color2 = Math.floor(Math.random() * 360);
	color3 = Math.floor(Math.random() * 360);
	color4 = Math.floor(Math.random() * 360);
	color5 = Math.floor(Math.random() * 360);
	lightness = 50;
	document.getElementById("color1").style.backgroundColor = "hsl(" + color1 + ", 100%, " + lightness + "%)";
	document.getElementById("color2").style.backgroundColor = "hsl(" + color2 + ", 100%, " + lightness + "%)";
	document.getElementById("color3").style.backgroundColor = "hsl(" + color3 + ", 100%, " + lightness + "%)";
	document.getElementById("color4").style.backgroundColor = "hsl(" + color4 + ", 100%, " + lightness + "%)";
	document.getElementById("color5").style.backgroundColor = "hsl(" + color5 + ", 100%, " + lightness + "%)";
	generateRules();
}

var rgbToHex = function (rgb) { 
  var hex = Math.ceil(Number(rgb)).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#"+red+green+blue;
};

function clearPalette(){
	document.getElementById("color1").style.backgroundColor = "hsl(0, 100%, 100%)";
	document.getElementById("color2").style.backgroundColor = "hsl(0, 100%, 100%)";
	document.getElementById("color3").style.backgroundColor = "hsl(0, 100%, 100%)";
	document.getElementById("color4").style.backgroundColor = "hsl(0, 100%, 100%)";
	document.getElementById("color5").style.backgroundColor = "hsl(0, 100%, 100%)";
	lightness = 100;
	generateRules();
}

function generateRules(){
  var rgb = hslToRgb(color1/360, 1, lightness/100);
  var hex = fullColorHex(rgb[0], rgb[1], rgb[2]);
  document.getElementById('css-rules').value = "\n" + ".website-background{ color: "+ hex +";}" + "\n\n";
  rgb = hslToRgb(color2/360, 1, lightness/100);
  hex = fullColorHex(rgb[0], rgb[1], rgb[2]);
  document.getElementById('css-rules').value += ".element-text{ color: "+ hex +";}" + "\n\n";
  rgb = hslToRgb(color3/360, 1, lightness/100);
  hex = fullColorHex(rgb[0], rgb[1], rgb[2]);
  document.getElementById('css-rules').value += ".element-border{ color: "+ hex +";}" + "\n\n";
  rgb = hslToRgb(color4/360, 1, lightness/100);
  hex = fullColorHex(rgb[0], rgb[1], rgb[2]);
  document.getElementById('css-rules').value += ".element-background{ color: "+ hex +";}" + "\n\n";
  rgb = hslToRgb(color5/360, 1, lightness/100);
  hex = fullColorHex(rgb[0], rgb[1], rgb[2]);
  document.getElementById('css-rules').value += ".header{ color: "+ hex +";}" + "\n\n";
}