

 

var voteEligible= function(age,name){

    // if block to handle all invalid scenarios

    var ageValue = +age;

    if (age<=0 || isNaN(ageValue)||130<age) {

        console.log(`${name} your age ${age} is invalid`); 

    } else {

        // if block to handle all valid scenarios

        if (age>=18) {

            console.log(`${name} you are eligible for vote`);

        } else {

            console.log(`${name} you are not eligible for vote`);

        }

    }

}

voteEligible(45, "Jenny");

voteEligible(17, "Jenny");

voteEligible(8, "Jenny");

voteEligible("20", "Jenny");

voteEligible(-10, "Jenny");
voteEligible(200, "Jenny");
voteEligible(0, "Jenny");
voteEligible(-10, "Jenny");
voteEligible(undefined, "Jenny");
voteEligible(null, "Jenny");