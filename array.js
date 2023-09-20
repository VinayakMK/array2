
//for
//const arr = require("readline-sync");
//let array = [10,20,30];

//for(i=0;i<array;i++)

 //   {
//       console.log(array[i]); 
        
 //   }


//console.log(array);

//for...of
//for(let num of arr){
//    console.log(num);
//}

//let fruits = ['Apple','Banana','Grapes'];
//for(let fruit of fruits){
//    console.log(fruit)}


//array methods
//for...each
//array.forEach(function(ele){
//    console.log(ele);
//})

//function abc(y){

//}

//abc(function(){
//    console.log("Callback fn");
//})

//let expenses = [25000,30000,30000,50000];
//expenses.forEach(function(expenses){
//    if(expenses>=30000){
//    console.log(expenses);
//    }
//})

//let sum = 0;
//expenses.forEach((ele) => {
//   {
//       sum += ele;
//   }   
//});
//console.log(sum); 


//let max = expenses[0];
//expenses.forEach((ele) =>{
//    {
//        if(ele>max)max = ele;
//    }
//});
//console.log(max);

//let min = expenses[3];
//expenses.forEach((ele) =>{
//    {
//        if(ele<min)min = ele;
//    }
//});
//console.log(min);

//expenses.push(60000);
//console.log(expenses);

//let arr = [11,20,30];
//let res = arr.map((num) => num+2);
//console.log(res);
//console.log(arr);

//let arr = [2,3,4,5];
//let res = arr.map((num) => num*num);
//console.log(res);
//console.log(arr);

//let arr = [];
//console.log("Enter the numbers :");
//for(let i=0; i<5; i++){
//    arr[i] = r.questionInt();
//}
//let res = arr.map((num) => num+2);
//console.log(res);
//console.log(arr);

//let arr = [2,3,4,5];
//let res = arr.pop();
//console.log(arr);
//console.log(res);

//let users = ["arun", "sujith","nevin"];
//let res = users.pop();
//console.log("Updated array is :" +users);
//console.log(res);

//let arr = [11,20,30];
//let res = arr.unshift(100);
//console.log(arr);
//console.log(res);

//let users = ["arun", "sujith","nevin"];
//let res = users.unshift("varun");
//console.log(users);
//console.log(res);

//let arr = [11,20,30];
//let res = arr.shift();
//console.log(arr);
//console.log(res);

//let users = ["arun", "sujith","nevin"];
//let res = users.shift();
//console.log(users);
//console.log(res);

//let arr = [11,20,30];
//let res = arr.includes(50);
//console.log(arr);
//console.log(res);

//let users = ['arun', 'sujith', 'nevin'];
//let res = users.includes('arun');
//console.log(users);
//console.log(res);


//var exp = [25000, 30000, 30000, 50000, 50000];
//var uniqueexp = [];
//exp.forEach((ele)=>{
//    if (!uniqueexp.includes(ele))
//    {
//        uniqueexp.push(ele);
//    }
//})
//console.log(uniqueexp);

//let fruits = ['Apple', 'Mango', 'Grapes', 'Orange'];
//let res = fruits.join('*');
//let res = fruits.toString();
//console.log(res);

//let fruits = ['Apple', 'Mango', 'Grapes', 'Orange'];
//let bikes = ['Honda','Yamaha','KTM'];
//let cars = ['Benz','BMW','Tesla'];
//let res = fruits.concat(bikes,cars)
//console.log(res);

//let bikes = ['Honda','Yamaha','KTM'];
//let cars = ['Benz','BMW','Tesla'];
//let res = bikes.splice(1,2,"TVS");
//let res = bikes.splice(1,2);
//console.log(bikes);
//console.log(res);

//let num = [60,40,10,40,50]; //sorts according to ASCII values
//let res = num.sort();
//console.log(res);

//let num = [60,40,10,50,100,1000];
//let res = num.sort((a,b) => b-a); //(b-a)ascending order (a-b)descending order
//console.log(res);

//let num = [10,11,12,13,14];
//let res = num.filter((ele) => ele%2 == 0);
//let res = num.filter((ele) => ele == 12 || ele == 14);
//let res = num.filter((ele) => ele>12);
//console.log(res);

//let num = [10,11,12,13,14];
//let res = num.reduce((a,b) => a*b);
//console.log(res);



//all elements squares
//var arr = [2,3,4,5,6,7,8];
//let res = arr.map((ele)=> ele * ele);
//console.log(res);

//print only even numbers
//var arr = [2,3,4,5,6,7,8];
//let res= arr.filter((ele) => ele%2==0);
//console.log(res);

//print only odd numbers
//var arr = [2,3,4,5,6,7,8];
//let res= arr.filter((ele) => ele%2!==0);
//console.log(res)

//largest element in Array
//var arr = [2,3,4,5,6,7,8];
//let largest = 0;
//arr.forEach((ele)=>{
//    if(ele > largest) largest = ele;
//});
//console.log(largest);


//sort array in descending order
//var arr = [2,3,4,5,6,7,8];
//let res = arr.sort((a,b) => a-b); 
//console.log(res);

//var employee= [
//    [01,"ram","10 years",35],
//    [02,"anil","2 years",25],
//    [03,"nikhil","4 years",28],
//    [04,"nikhil","4 years",25],
//]
//let res = employee.some((emp) => emp[1] == 'anil')
//let res = employee.find((emp) => emp[2] == "2 years")
//let res = employee.find((emp) => emp[0] == 03)
//let res = employee.find((emp) => emp[3]>=28)
//console.log(res);


//let num = [10,20,30,40,50];
//let res = num.indexOf(30);
//let res = num.indexOf(60);
//console.log(res);

//let num = [10,20,30,40,50];
//let res = num.findIndex((num) => num > 20);
//console.log(res);

/*let num = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
let res = num.flat();
console.log(res);
console.log(num);*/ 


//let arr = [10,20,30,40];
//arr.forEach((ele,index) => {
    /*if(ele==20) {
        arr[index] = 60;
    }else{
        arr[index] = 100;
    }*/
//    ele === 20 ? arr[index] = 60 : arr[index] = 100;  //ternary
//})
//console.log(arr);



var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4g"]
]

//Print all mobile names
//let name = mobiles.map((mob) => mob[2]);
//console.log(name);

//Print all mobile prices
/*let price = mobiles.map((mob) => mob[3]);
console.log(price);*/

//Print only mobiles with samsung brand
/*let brand = mobiles.filter((mob) => mob[1] == 'samsung');
console.log(brand);*/

//print all mobile phones below 25000
/*let name = mobiles.filter((mob) => mob[3]<25000);
console.log(name);*/

//Print mobile details of avaialable in price range of 25k to 30k
/*let details = mobiles.filter((mob) => 25000<=mob[3]&&mob[3]<=30000);
console.log(details);*/

//List all 5g mobile names
/*let details = mobiles.filter((mob) => mob[6] == '5g' );
console.log(details);*/

//List all 5g mobiles under 35000
/*let fiveg= mobiles.filter((mob)=> mob[6] =='5g' && mob[3]<=35000);
console.log(fiveg);*/

//List all samsung mobile whose band=4g and dispaly type is AMOLED
/*let smsg= mobiles.filter((mob)=> mob[6] =='4g' && mob[5] == 'AMOLED' && mob[1] == 'samsung');
console.log(smsg);*/