var color1;
var color2;
var color3;
var color4;
var color5;
var lightness;

function randomPalette(){
	color1 = Math.floor(Math.random() * 71);
	color2 = color1 + 72;
	color3 = color2 + 72;
	color4 = color3 + 72;
	color5 = color4 + 72;
	lightness = 50;
	document.getElementById("color1").style.backgroundColor = "hsl(" + color1 + ", 100%, " + lightness + "%)";
	document.getElementById("color2").style.backgroundColor = "hsl(" + color2 + ", 100%, " + lightness + "%)";
	document.getElementById("color3").style.backgroundColor = "hsl(" + color3 + ", 100%, " + lightness + "%)";
	document.getElementById("color4").style.backgroundColor = "hsl(" + color4 + ", 100%, " + lightness + "%)";
	document.getElementById("color5").style.backgroundColor = "hsl(" + color5 + ", 100%, " + lightness + "%)";
	generateRules();
}

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