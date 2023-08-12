function loop(str) {
    let count=0
    for (let index = 0; index < str.length; index++) {
let char=str.chaAt(index)
        if (char==A||char==E||char==I||char==O||char==U||
            char==a||char==e||char==i||char==o||char==u) {
            console.log(char);
            count=count+1
        };
    }
    console.log(count);
}
loop("I am very good IT Developer")