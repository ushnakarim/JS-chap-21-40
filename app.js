// !!!!!!!!!!! CHAPTER 21-25 !!!!!!!

// QUESTION NO 01
// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// var firstLast = first + last
// document.write(firstLast)


// QUESTION NO 02
// var fav_phone = prompt("My favourite phone is ");
// document.write(fav_phone+"<br>")
// document.write("Length of the string:"+fav_phone.length)


// QUESTION NO 03
// var str = "Pakistan";
// document.write(str+"<br>")
// document.write("Index of 'n':"+str.indexOf("n"))


// QUESTION NO 04
// var str = "Hello World";
// document.write(str+"<br>")
// document.write("Last Index of 'l':"+str.lastIndexOf("l"))


// QUESTION NO 05
// var str = "Pakistan";
// document.write(str+"<br>")
// document.write("Character at index 3:"+str[3])


// QUESTION NO 06
// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// document.write(first+last)


// QUESTION NO 07
// var city = "Hyderabad";
// document.write(city+"<br>")
// var rep = city.replace("Hyderabad","Islamabad");
// document.write("<br>"+rep) 

// QUESTION NO 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message_new = message.replace(/and/g,"&");
// document.write(message_new)

// QUESTION NO 09
// var x = "472";
// document.write(typeof(x)+" "+x+"<br>")
// var y = parseInt(x);
// document.write(typeof(y)+" "+y)

// QUESTION NO 10
// var a = prompt("Enter input");
// var b = a.toUpperCase();
// document.write(b)

// QUESTION NO 11
// var a = prompt("Enter input");
// var b = a.toLocaleUpperCase;
// document.write(b)

// QUESTION NO 12
// var x = 35.36;
// document.write(typeof(x)+" "+x+"<br>")
// var y = String(x);
// document.write(typeof(y)+" "+y)

// QUESTION NO 13
// var a = prompt("Enter username");
// if(a===a.charCodeAt(33,44,46,64)){
//     alert("Enter valid username !");
// }
// else{
//     alert("CORRECT");
// }

// QUESTION NO 14
// var bakery = ["cake","biscuit","juice","milk"];
// var sell = String(prompt("enter item : "));
// var sell1 = sell.toLowerCase();
// for(i = 0 ; i < bakery.length ; i++){
//     if(bakery[i] == sell1){
//         a = bakery.indexOf(bakery[i])
//         alert(sell1+" is available at our bakery on index "+a);
//         break
//     }
//     else{
//         alert("sorry "+sell1+" is not available");
//         break
//     }
// }

// QUESTION NO 16
// var university = 'University of Karachi';
// var a = university.split("<br>",3);
// document.write(a);

// QUESTION NO 18
// var a = "the quick brown fox jumps over the lazydog";
// var b = a.match(/the/g).length
// alert(b);

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------

// CHAPTER NO 26-30

// QUESTION NO 01
// var numb = 3.546587;
// document.write(Math.round(numb)+"<br>")
// document.write(Math.floor(numb)+"<br>")
// document.write(Math.ceil(numb)+"<br>")

// QUESTION NO 02
// var numb = -3.546587;
// document.write(Math.round(numb)+"<br>")
// document.write(Math.floor(numb)+"<br>")
// document.write(Math.ceil(numb)+"<br>")

// QUESTION NO 03
// var numb = -5;
// document.write(Math.abs(numb))

// QUESTION NO 04
// var numb = parseInt(Math.floor(Math.random() *6) +1);
// document.write("random dice number :"+numb+"<br>")

// var numb2 = parseInt(Math.floor(Math.random() *6) +1);
// document.write("random dice number :"+numb2)

// QUESTION NO 05
// var numb = Math.floor(Math.random()*2)+1;
// document.write("random coin value :"+numb+"<br>")

// QUESTION NO 06
// var numb = Math.floor(Math.random()*100)+1;
// document.write("random number between 1-100 is :"+numb+"<br>")

// QUESTION NO 07
// var weight = parseFloat(prompt("Enter your wieght "));
// alert(weight);

// QUESTION NO 08
// var sceret = prompt("Enter the sceret number varying from 1-10");
// var numb = Math.floor(Math.random()*10)+1;
// if(numb==sceret){
//     alert("Congrats ! you guessed the correct number");
// }
// else{
//     alert("Try Again");
// }

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------

// CHAPTER NO 31-34

// QUESTION NO 01
// var date = new Date();
// document.write(date)


// q2
// var a = ["january","february","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date();
// var m = date.getMonth() ;
// document.write(a[m])

// q3
// var a = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date = new Date();
// var b = date.getDay();
// document.write(a[b])

// q4
// var a = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var date = new Date();
// var b = date.getDay();
// if( a[b] == "Sun" || a[b] == "Sat" ){
//     alert("it is funday today ! ")
// }



// q5
// var a = new Date();
// var b = a.getDate();
// if (b<=15){
//     alert("first fifteen days of month")
// }
// else{
//     alert("last fifteen days of month ")
// }



// q6
// var a = new Date();
// var b = a.getMilliseconds();
// var c = a.getMinutes();
// document.write("date : "+a+"<br>")

// document.write("time in milisecond : "+b+"<br>")

// document.write("time in minutes : "+c+"<br>")


// q7
// var a = new Date();
// var b = a.getHours();
// if(b<12){
//     alert("its am")
// }
// else{
//     alert("its pm")
// }


// q8
// var a = new Date("Thu Dec 31, 2020")
// document.write(a)


// q13
// var a = new Date();
// var b = prompt("enter your age :");
// var c = a.getFullYear();
// var d = c - b
// document.write("your birth year is : "+d);


// q14
// document.write("<h1>K-ELECTRIC BILL</h1><br>");
// var a = prompt("enter your name : ");
// var b = new Date().getMonth();
// var c = prompt("enter numbers of units : ");
// var d = 16;
// var f = c*d
// document.write("Consumer name  :"+a+"<br>");
// document.write("billing for the month of :"+b+"<br>");
// document.write("units consumed :"+c+"<br>");
// document.write("Amount payable within due date :"+f+"<br>");
// var e = 350;
// document.write("late payment surcharge : "+e+"<br>");
// document.write("amount payable after due date : "+(f+e));

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------
// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------


// / ...................................ch 35-38.............................................


//q1
// function TellDate(){
//     var a = new Date();
//     document.write(a)
// }

// TellDate()



// // q2
// function greet(){
//     var a = prompt("enter your first name :");

//     var b = prompt("enter your last name :");

//     document.write("welcome, "+a+" "+b)

// }
// greet()


// q3
// function SumIt(){
//     var a = +prompt("enter your first num :");

//     var b = +prompt("enter your second num :");

//     document.write("added, "+ (a+b))

// }
// SumIt()



// q4
// function Calculator(num1,num2,operator){
//     if (operator == "+"){
//         b = num1 + num2
//     }
//     else if (operator == "-"){
//         b = num1 - num2
//     }
//     else if (operator == "*"){
//         b = num1 + num2
//     }
//     else if (operator == "/"){
//         b = num1 / num2
//     }
//     var a = num1+operator+num2+"="+b;
//     alert(a)
// }
// Calculator(5,10,"-")




// q5
// function square(number){
//     var a = number*number
//     alert(a)
// }
// square(10)



// q7
// function counting(){
//     var a = parseInt(prompt("enter starting number : "));
//     var b = parseInt(prompt("enter ending number : "));
//     for(i = a;i>=b;i++){
//         document.write(i+"<br>")
//     }
// }

// counting()


// q9
// function area(h,w){
//     var a = h*w;
//     alert("area is : "+a);
// }
// area(10,5)