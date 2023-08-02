console.log("------Step1------");
console.log("Functions with no argument and no return type-");
function substraction() {
    console.log("substraction......ABCD");
    
}
substraction();
function multiply() {
    console.log("multiply......ABCDEFG");
    
}
multiply();
console.log("==========Step-2===========");
function personalDetails(firstName,lastName,collegeName) {
    console.log("First Name=>",firstName,"Last Name=>",lastName,"College Name=>",collegeName);
    

    
}
var res=personalDetails("Vishal","Deshmukh","Sinhagad college");
console.log(res);
console.log("===============Step-3=============");
function swap(arg1,arg2) {
    console.log("Before Swap==>",arg1,arg2);
    
 temp=arg1
arg1=arg2;
arg2=temp
console.log("After Swap==>",arg1,arg2);

}
swap(10,20);
swap("Virat","Anushka");
swap(1000,2000);
console.log("=================Step-4=================");
function addThreeValues(add1,add2,add3) {
    console.log("Values Are",add1,add2,add3);
    var result=add1+add2+add3
    return result

    
}
var result=addThreeValues(10.23,600,40);
console.log("Result is=",result);
var result=addThreeValues("Hello","Good","Morning");
console.log("Result is=",result);
console.log("====================Step-5===================");
function bankDetails(bankName,accountNum,location,pinCode) {
    console.log("Deatails are==>","Bank Name==>",bankName,"Account Number==>",accountNum,"Bank Address==>",location,"Pin Code==>",pinCode);
    
}
bankDetails("CITI Bank","3456782345","Pune","431202");
bankDetails("Axis Bank","7856782345","Mumbai","441202");
bankDetails("HDFC Bank","8956782345","Pune","631202","Open")