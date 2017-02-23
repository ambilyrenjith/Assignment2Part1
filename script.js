//STEP 1
/*
var name = window.prompt("Enter your name");
var result = name.length;
window.alert(result); */
//STEP 2
/*
var name = window.prompt("Enter your name");
var num = window.prompt("Enter a number to find the position of the letter");
window.alert(name.charAt(num)); */
//STEP 3
/*
var firstName = window.prompt("Enter your firstname");
var secondName = window.prompt("Enter your lastname");
window.alert("Your name is  "+ firstName +" " + secondName);
*/
//STEP 4
/*
var str = "The quick brown fox jumps over the lazy dog";
window.alert(str.indexOf("fox"));
  */
//STEP 5
/*var str = "The quick brown fox jumps over the lazy fox";
window.alert(str.lastIndexOf("fox"));*/
//STEP 6
/*var str = "The quick brown fox jumped over the lazy dog";
var name = window.prompt("Enter your full name");
window.alert(str.replace("lazy dog", name));*/
//STEP 7
/*var str = "The quick brown fox jumps over the lazy dog";
var word = window.prompt("Enter a word");
window.alert(str.search(word));*/
//STEP 8
/*var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(30);
var res = new_string.toUpperCase();
window.console.log(res);*/
//STEP 9
/*var str = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  ";
var newstring = str.trim();
var res = String(newstring).toLowerCase();
window.console.log(res);*/
//STEP 10
/*var str = "the quick brown fox jumps over the lazy dog";
var str1 = str.charAt(0);
var str3 = str1.toUpperCase();
var str2 = str.slice(1);
window.console.log(str3.concat(str2));*/