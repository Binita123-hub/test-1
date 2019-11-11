/***** Arrays*/
//  arrays [] start with large bracket [ ], start elements from 0 ,1,2,...

//Initialize new array
var names = ['John' , 'Mark', ' Jane'];
var age = ['20' , '22', '24'];

console.log(names);
console.log(names.length);

//Mutate array and data
 //exp 1
names[0] = 'deo';
console.log(names);
//exp 2
names[2] = 'Bean';
console.log(names);
//exp 3
names[names.length] = 'Marry';
console.log(names);
//exp 4
names[5] = 'Marry';
console.log(names);

//Different data type
var john = ['John', 'smith' , 1995 ,' designer' ,'flase'];
john.push('red'); //puss add elements in end of Arrary
john.unshift('Mr.');//unshift add elements in begining  of Arrary
console.log(john);

john.pop();//pop remove elements from the end
john.pop(); 
john.shift(); //shift remover first elenments
console.log(john);

console.log(john.indexOf(1995)); //shows position of elements




var text=["text-1","text-2","text-3"]
 document.getElementById("array").innerHTML=text;

 var valuetext=["first","second","third"]
 valuetext[1] = "fourth";
 console.log(valuetext);

 var indextext=["index1","index2","index3","index3"]
 indextext[4]="index1";
 console.log(indextext);

 var furit=["Banana", "Orange", "Apple", "Mango"];
 //document.getElementById("fruits").innerHTML=furit.pop();
 document.getElementById("fruits").innerHTML=furit[furit.length-1];









