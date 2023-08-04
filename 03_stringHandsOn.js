function stringHandsOn() {
var string="    Hey you are doing good, keep it up    "
console.log(string);
console.log(`-----------------------------Step-1-------------------------`);
console.log(`Given String Is===>>${string}`);
console.log(`-----------------------------Step-2--------------------------`);
var result=string.length;
console.log(`Length of String is====>${ result}`);
console.log(`------------------------------Step-3------------------------`);
var resultSt =string.trim();
console.log(resultSt);

console.log(`Before Trim String length==> : ${string.length}, After Trim string is====>> ${resultSt} And String length 
is===>> ${resultSt.length} `);
console.log(`---------------------------------Step-4-----------------------------`);
var result=string.length-resultSt.length;
console.log(`Extra Spaces Count Which is Removed===>>${result}`);
console.log(`----------------------------------Step-5-------------------------------`);
var res=resultSt.charAt(0);
console.log(`First Character==>${res}`);
var ress=resultSt.charAt(33);
console.log(`Last Character==>${ress}`);
console.log(`---------------------------------------Step-6-------------------------------------`);
var resultSpi=resultSt.split(" ");
console.log(`Words==>${resultSpi}`);
var resWord=resultSpi.length;
console.log(resWord);
console.log(`-------------------------------------------Step-7------------------------------------`);
var resultIn=resultSt.indexOf('good');
console.log(`Index of good is=========>> ${resultIn}`);
console.log(`---------------------------------------Step-8----------------------------`);
var resultSlic=resultSt.slice(22);
console.log(`index 22 Slice is====>>${resultSlic}`);
console.log(`-----------------------------------------Step-9-------------------------`);
var output=resultSt.endsWith("up");
console.log(`String Ends With====>>${output}`);
console.log(`----------------------------------------Step-10-------------------------------`);
var output=resultSt.startsWith("Hey");
console.log(`String Start With====>>${output}`);
}
stringHandsOn()