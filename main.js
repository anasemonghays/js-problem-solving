// Q(1)

// var name = prompt("Enter your name: ")
// var age = Number(prompt("Enter your age: "))
// var birthYear = 2026 - age
// console.log("Hello " + name + "! you are " + age + " years old and you were born in " + birthYear + ".")


// Q(2)

// var egp = Number(prompt("Enter amount in EGP:"))
// var usd = (egp / 47.22).toFixed(2)
// var eur = (egp / 54.35).toFixed(2)
// var gbp = (egp / 61.95).toFixed(2)
// console.log(egp + " EGP = $" + usd + " ,USD = €" + eur + " ,EUR = £" + gbp + " GBP")


// Q(3) 

// var num = Number(prompt("Enter a number: "))
// if (num % 2 ===0){
//     console.log( num + " is an even number")
// }else{
//     console.log( num + " is an odd number")
// }


// Q(4)

// var hour = Number(prompt("Enter hour")) 
// if (hour >= 0 && hour <= 11){
//     console.log("Good morning!")
// } else if(hour >= 12 && hour <= 17){
//     console.log("Good afternoon!")
// } else if (hour >= 18 && hour <= 23) {
//     console.log("good evening")
// }


// Q(5)

// var score1 = Number(prompt("Enter your score 1: "))
// var score2 = Number(prompt("Enter your score 2: "))
// var score3 = Number(prompt("Enter your score 3: "))
// var average = (score1 + score2 + score3) / 3
// if(average>=50){
//     var status = "pass"
// }else{
//     var status = "fail"
// }
// console.log("average: "+ average.toFixed(2) + ", Status: "+ status)


// Q(6)

// var num1 = Number(prompt("Enter first number: "))
// var num2 = Number(prompt("Enter second number: "))
// var operator = prompt("Enter operator (+, -, *, /):")
// var result;
// switch (operator) {
//     case '+':
//         result = num1 + num2
//         break;
//     case '-':
//         result = num1 - num2
//         break;
//     case '*':
//         result = num1 * num2
//         break;
//     case '/':
//         result = num1 / num2
//         break;
//     default:
//         result = "Invalid OPerator"
//         break;

// }
// console.log( num1+ " "+operator+" "+num2+" = "+result)


// Q(7)

// var num = Number(prompt("Enter a number: "))
// var table = "";
// for (var i = 1; i <= 10; i++){
//     table += num + " x " + i + " = " + (num*i) + " ";
// }
// console.log(table.trim())


// Q(8)

// for(var i = 2; i <= 10 ; i += 2){
//     console.log(i);
// }


// Q(9)

// var factorial = 1;
// for (var i = 1 ; i <= 5 ; i++){
//     factorial *= i;
// }
// console.log(factorial)


// Q(10)

// var n = 1;
// while(n*n <= 50){
//     n++;
// }
// console.log(n)


// Q(11)

// var num1 = Number(prompt("Enter num1: "))
// var num2 = Number(prompt("Enter num2: "))
// num1 = num1 + num2
// num2 = num1 - num2
// num1 = num1 - num2
// console.log("After swapping: num1= " + num1 + " num2= "+num2)


// Q(12)

// var age = Number(prompt("Enter your age: "))
// var ticket = prompt("Do you have a ticket? (yes or no)")
// if (age >= 18 || ticket == "yes"){
//     console.log("Access granted: true")
// }else{
//     console.log("Access granted: false")
// }


// Q(13)

// var a = Number(prompt("Enter a:" ))
// var b = Number(prompt("Enter b:" ))
// var c = Number(prompt("Enter c:" ))
// var largest;
// if(a > b && a > c){
//     largest = a
// }else if (b >a && b > c){
//     largest = b
// }else{
//     largest = c
// }
// console.log("Largest number is: " + largest)


// Q(14)

// var hours = Number(prompt("Enter hours worked: "))
// var rate = Number(prompt("Enter hourly rate: "))
// var regularHours;
// var overtimeHour;
// if(hours > 40){
//     regularHours = 40
//     overtimeHour = hours - 40
// }else {
//     regularHours = hours
//     overtimeHour = 0
// }
// var regularPay = regularHours * rate
// var overtimePay = overtimeHour * rate * 1.5
// var totalPay = regularPay + overtimePay
// console.log("Regular: $"+ regularPay)
// console.log("overtime: $"+ overtimePay)
// console.log("Total: $" + totalPay)


// Q(15)

// var weight = Number(prompt("Enter weight in kg:"))
// var height = Number(prompt("Enter height in meters:"))

// var bmi = weight / (height * height)
// var category = "";

// if (bmi < 18.5) {
//     category = "Underweight"
// } else if (bmi <= 24.9) {
//     category = "Normal weight"
// } else if (bmi <= 29.9) {
//     category = "Overweight"
// } else {
//     category = "Obese"
// }
// console.log("BMI: " + bmi.toFixed(2) + " " + category)

// Q(16)

// var amount = Number(prompt("Enter purchase amount:"))
// var tax = amount * 0.10
// var discount
// if (amount > 100) {
//     discount = amount * 0.05
// } else {
//     discount = 0
// }
// var finalPrice = amount + tax - discount
// console.log("Subtotal: $" + amount)
// console.log("Tax: $" + tax)
// console.log("Discount: $" + discount)
// console.log("Final: $" + finalPrice)


// Q(17)

// var currentBalance = 500
// var operation = prompt("Select operation (1: Balance, 2: Withdraw, 3: Deposit):")

// switch (operation) {
//     case '1':
//         console.log("Your balance is: $" + currentBalance);
//         break;
//     case '2':
//         var withdrawAmount = Number(prompt("Enter withdrawal amount:"))
//         currentBalance -= withdrawAmount
//         console.log("Withdrew $" + withdrawAmount + ". New balance: $" + currentBalance)
//         break;
//     case '3':
//         var depositAmount = Number(prompt("Enter deposit amount:"))
//         currentBalance += depositAmount
//         console.log("Deposited $" + depositAmount + ". New balance: $" + currentBalance)
//         break;
//     default:
//         console.log("Invalid operation")
//         break;
// }


// Q(18)

// for (var i = 1 ; i <= 100 ; i++){
//     if(i % 3 === 0 && i % 5 === 0 ){
//         console.log("FizzBuzz")
//     } else if(i % 5 === 0) {
//         console.log("Buzz")

//     } else if(i % 3 === 0){
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }
// }


// Q(19)

// var rows = Number(prompt("Enter number of rows:"))
// for (var i = 1; i <= rows; i++) {
//     var pattern = ""
//     for (var j = 1; j <= i; j++) {
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// Q(20)

// var numStr = prompt("Enter a number:")
// var sum = 0;

// for (var i = 0; i < numStr.length; i++) {
//     sum += Number(numStr[i])
// }
// console.log("sum of digits: "+sum)