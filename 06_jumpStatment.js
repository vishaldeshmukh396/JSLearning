for (let index = 0; index <30 ; index=index+2) {

    console.log(index); 
    if (index==20) {
        break;
    }

}
for (let index = 0; index < 10; index++) {

    console.log(`Iteration Start`);

    if (index==5) {

        break;

    }

    console.log(`Value is ${index}, Iteration ${index+1}`);

    console.log(`Iteration End`);

    console.log(`--------------------------`);

}

 

console.log(`-------- continue -----------`);

for (let index = 0; index < 5; index++) {

    console.log(`Iteration Start`);

    if (index==3) {

        continue;

    }

}