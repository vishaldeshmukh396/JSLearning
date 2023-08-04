var square=function(num){
var result=num*num;
console.log(`Square of Given Number is===>>${result}`);
console.log("Type Of Given Variables==>>",typeof result);

}

square(5);
square(6);
square(25);
square(100);
square(67.09);
square(59);
console.log(`-----------------------------------------Step-3--------------------------------------`);
var areaRectangle=function(length,width){
    var result=length*width;
    console.log(`Area of reactangle is===>> ${result}`);
}
areaRectangle(499,917);

    console.log(`------------------------Step-4---------------------------`);
    var swap=function(arg1,arg2) {
        console.log("Before Swap==>",arg1,arg2);
        
     temp=arg1
    arg1=arg2;
    arg2=temp
    console.log("After Swap==>",arg1,arg2);
    
    }
    swap("Messi","Ronaldo");
    swap("Mahi","Raina");
    swap(55,77);
    console.log(`---------------------------------------Step-5------------------------`);
    var js=function(){
        
        var res="JS is the most popular language on internet"
        console.log(res);
        var result=res.length
        console.log(`Total No of charactors==>>${result}`);
        var ress=res.charAt(11);
console.log(` Character At 11 is ==> ${ress}`);
        var resch=res.length-1;
        console.log(resch);
        var ress=res.charAt(42);
        console.log(` Character At last is ==> ${ress}`);
        var ress=res.charAt(0);
        console.log(` Character At Very First is ==> ${ress}`);
        var result1=res.split(" ")
        console.log(` Words in Given String is ==>>${result1}`);
        var res1=result1.length;
        console.log(`Total Number of Words==>> ${res1}`);
        var sq=res1*res1;
        console.log(`Square of Total Words==>> ${sq}`);

        
        



    }
    js();

