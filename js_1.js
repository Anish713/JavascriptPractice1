//const prompt = require("prompt-sync")();//try to use prompt in vs code
{
console.log("Hello World");
let a=67; 
var b=7
let c=null
let d=undefined
console.log(c)
//d=24
console.log(d)
const author="Anish";
//var b= null //var c="Anish" //var d=undefined
//variable declaration(case sensitive) can be done using var, let, const
//var is global scope
//let is block scope
//const is constant
//variable name can start with a-z, A-Z, $, _
{
    let a="Anish"
    console.log(a);
    console.log(typeof(a));
}
console.log(a);
function sum(a,b,c){
    d=a+b+c; //return a+b+c;
    return d;
}
e=sum(7,5,8)//; is optional
console.log(e);
// console.log(sum(7,5,8));
//NNSSBBU: Primitive Data Types
}

{
let x=prompt("Enter first Number: ");//let x=27
let y=prompt("Enter Second Number: ");//let y=33
x=Number.parseInt(x); //converts string to number
y=Number.parseInt(y);
if(x>y){
    console.log("The greater number is", x,".");
}
else if(y>x) {
    alert("The greater number is ",y,".");
    }
else{
    print("The numbers are equal.");
    }
}

{
    let x=prompt("Enter a Number: ");//let x=27
    switch(x){
        case "1":
            console.log("One");
            break;
        case "2":
            console.log("Two");
            break;
        case "3":
            console.log("Three");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}

{
//Objects
const item={
    name:"Anish",
    age: 21,
    "job": undefined,
}
item["address"]="Kathmandu"
console.log(item.name);
console.log(item["name"]);
console.log(item["age"]);
console.log(item["address"]);
console.log(item);
}

{
    sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);

let obj={
    Anish: 90,
    Anish1: 80,
    "Anish2": 70,
    Anish3: 60,
    Anish4: 50,
}
for(let i of "Pragya"){
    console.log(i);
}
}

{//New Block
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
}

{
    //Modern Way Function Declaration
    const hello=()=>{
        console.log("Hello,how are you? ");
        return "hi";
    }
    let v= hello();
    console.log(v);

    //Another way
    function HELLO(){
        console.log("Hello again...");
        return "hi again";
    }
    let u=HELLO();
    console.log(u);

    //With Parameters
    const sum=(a,b,c)=>{
        return (a+b+c);
    }
    console.log(sum(1,2,3));
}

{
    let boy1="Anish";
    let girl1="Pragya";
    let sentence=`${boy1} and ${girl1}\` are friends.`;
    console.log(sentence);
    console.log(sentence.length); 
    console.log(girl1.toUpperCase());
    console.log(sentence.toLowerCase());
    console.log(sentence.indexOf("Pragya"));
    console.log(sentence.slice(2,8));
    console.log(sentence.replace("Anish","Pragya"));
    console.log(sentence.split(" "));
    console.log(sentence.split("and"));
    console.log(sentence.split("and")[0]);
    console.log(sentence.split("and")[1]);
    console.log(sentence.split("and")[1].trim());
    console.log(boy1.concat(" ",girl1," are best friends."));
}

{
    let marks=[10,20,30,40,50];
    console.log(marks.length);
    console.log(marks);
    //console.log(marks[0]);
    //console.log(marks[1]);
    //console.log(marks[2]);
    marks[2]=35;
    console.log(marks);
    console.log(marks[2]);
    let b= marks.toString();
    console.log(b);
    console.log(typeof b);
    let c=marks.join(".");
    console.log(c);
    let d=marks.pop();
    console.log(d);
    console.log(marks);
    let e=marks.push(60);
    console.log(e);
    console.log(marks);
    let f=marks.shift();
    console.log(f);
    console.log(marks);
    let g=marks.unshift(5);
    console.log(g);
    console.log(marks);
    console.log(marks.length);
    //delete marks[0];
    console.log(marks);
    console.log(marks.length);//delete does not reduce array size
    console.log(marks.concat(marks))
    console.log(marks.sort());//sorts per alphabetical order
    marks.forEach((element)=>{
        console.log(element*element);
    })
}

/*{ //error
    let n = prompt("Guess the number: ");
    n=n.parseInt(n);
    let num = Math.floor(Math.random()*10);
    do(if(n === num){
        console.log("You guessed it right! You scored 100");
    }
        else if(n>num){
            console.log("You guessed it too high!");
        }
        else{
            console.log("You guessed it too low!");
        })while(n!=num);
} */

{
    alert("Enter value of a!");
    let a = prompt("Enter value of a here: ");
    a = Number.parseInt(a);
    document.write("Value of a is: ", a, "<br>");
    write=confirm("Do you want to write a as ",a,"?");
}

{ //test
    window.console.log(window)
    console.log(window)
    console.log(document.body)
    document.body.style.backgroundColor="red";
    console.log(document.body.Child)
    console.log(document.body.firstChild)
    console.log(document.body.lastChild)
    console.log(document.body.ChildNodes)
}

{}