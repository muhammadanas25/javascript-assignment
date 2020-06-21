//chapter 21 task 1
// var x=prompt("enter your first name");
// var y=prompt("enter your last name");

// document.write("hello  "+x+" " +y);


//chapter 21 task 2
// var y=prompt("enter your favourite mobile");
// document.write("the length of string is "+ y.length);

//chapter 21 task 3
// var s="pakistan";
// document.write("the index of n is "+ s.indexOf("n"));

// //chapter 21 task 4
// var s="Hello World";
// document.write("the index of l is "+ s.lastIndexOf("n"));

//chapter 21 task 5

// var s="pakistani";
//  document.write(" character at index 3 :"+ s[3]);

//chapter 21 task 5
// var x=prompt("enter your first name");
//  var y=prompt("enter your last name");
//  document.write(x.concat(" ", y));

// document.write("hello  "+x+" " +y);
//chapter 21 task 10
//  var s="peanuts";
//   document.write(" upper case :"+ s.toUpperCase());

//chapter 21 task 11

// var s="peanuts";
//   document.write(" upper case :"+ s.toUpperCase());

//chapter 21 task 14
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]

//chapter 21 task 12
// var num = 35.36 ;
// document.write(num.toString());

//chapter 25-29 task 1

//  var n = prompt("enter a positive number");
 
//  document.write("number :" +n.valueOf() );
//  document.write("roundoff :" + Math.round(n));
//  document.write("floor :" + Math.floor(n));
//  document.write("ceil :" + Math.ceil(n));

//chapter 25-29 task 2

//  var n = prompt("enter a negative number");
 
//  document.write("number :" +n.valueOf() );
//  document.write("roundoff :" + Math.round(n));
//  document.write("floor :" + Math.floor(n));
//  document.write("ceil :" + Math.ceil(n));
//chapter 25-29 task 3
// var n = prompt("enter a negative number");
// document.write("absolute value of " + n + " is " + Math.abs(n));

//chapter 25-29 task 4

// document.write("random dice value : " +Math.round( Math.random()*6+1));

//chapter 25-29 task 5

// var x= Math.floor((Math.random()*2)+1);
// if(x===2){
//     document.write("random coin value is heads");
// }
// else{
//  document.write("random coin value is tails");
// }

//chapter 25-29 task 6
// document.write("random number between 1 and 100 is : " + Math.floor((Math.random()*100)+1));

//chapter 25-29 task 8
// var x= Math.floor((Math.random()*10)+1);
// var n=prompt("enter no between 1 and 10");
//  if(x===n){
//     alert("congratulation you won");
//  }
//  else{
//   alert("you are a failure");
//  }


//chapter 31-34 task 1
// document.write(Date());

//chapter 31-34 task 2
// var k=new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// document.write(monthNames[k.getMonth()]);

chapter 31-34 task 3
// var k=new Date();
//  var days = ["mon", "tue", "wed", "thu", "sat", "sun"];
//  document.write(days[k.getDay()]);

//chapter 31-34 task 7
//  var k=new Date();
//  if(k.getHours()>12){
//     document.write("pm");
//  }
//  else{
//     document.write("am"); 
//  }
//chapter 31-34 task 13
// var k=new Date();
// var n=prompt("age");
// alert("your birth year is " + k.getFullYear()-n );

//chapter 34-38 task 1
// function datetoday(){
//     document.write(Date());
// }
// datetoday();

//chapter 34-38 task 2
var myObject = {
    firstName:"anas",
    lastName: "siddiqui",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  myObject.fullName();