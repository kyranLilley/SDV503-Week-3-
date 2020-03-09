
console.log( +true);// 1, true is converted to 1 using unary plus
console.log( +false);// 0, false is converted to 0
console.log( +"");// 0, empty string converted to 0

//these three console.logs below will calculate each equasion seperated by the 
//comma.    and display each seperate value.
console.log(1 + 2, 3 + 4);
console.log(5 + 5, 7 + 8);
console.log(8 + 9, 10 + 11);

//This console log will return the last equasion value , seperated
//by a comma.
console.log("Console operator in variable")
let a = (1 + 2, 3 + 4);
console.log(a);

//let x = 10;
//alert(x);



//if run in browser code should pop up with 'x = 10' if 
let b = 20;
let c = 15;

if(b == c){
    console.log('a has the same value as b');
    
}
    else{
        console.log('a and be dont have the same value.')

    }

    // let x = 1; 
    // console.log(5 * ++x); //10let x = 1;
    // console.log(5 * x++); // 5, because x returns the previous value

let tenString = '10';
let tenNumber = 10;

console.log(tenString === tenNumber);


//the last equastion takes precedence over the first number.

console.log(10 + 5 * 3); // 25, First Multiplication then Addition
console.log('Various Assignment Operators')
//Assign =
let vao = 10;
console.log(vao);
//Add and assign
vao += 20;
console.log(vao);
//subtract and assign
vao -= 10;
console.log(vao);
//Multiply and assign
vao *= 10;
console.log(vao);
//divide and assign
vao /= 10;
console.log(vao);
//divide and assign modulus
vao %= 10;
console.log(vao);
vao **= 10;


//JAVASCRIPT OPERATORS
// Operator       Name        
//   ==           Equal
//   ===          Identical    // check equality of data type
//   !=           Not equal
//   !==          Not identical //check inequality of data type
//   <           Less than
//   >           Greater than
//   >=          Greater than or equal to
//   <=          Less than or equal to

//Result of comparison
console.log(10 == 5 ); //equal to
console.log(10 != 5);//not equal to
console.log(10 < 5);//less than
console.log(10 > 5);//greater than 
console.log(10 <= 5);//less than or equal to 
console.log(10 >=5);//greater than or equal to

//Comparison of different types
console.log(10 == "5");
console.log(10 == "10");
console.log(10 != "5");
console.log(10 != "10");
console.log(10 < "5");
console.log(10 < "10");
console.log(10 > "5");
console.log(10 > "10");
console.log(10 <= "5");
console.log(10 <= "10");
console.log(10 >= "5");
console.log(10 >= "10");

//Boolean and number comparison
console.log(true == 1);
console.log(true == "1")
console.log(true == 0 );
console.log(true == 1);
console.log(true == 0)
console.log(true == "0" );

console.log(" ");

console.log(true != 1);
console.log(true != "1")
console.log(true != 0 );
console.log(true != 1);
console.log(true != 0)
console.log(true != "0" );

console.log("A" == "A");
console.log("a" == "a");

console.log(" ");
console.log("z" > "A");

console.log(" ");
console.log("Raise" > "race");
console.log("Break" > "Break");
console.log("Lose" < "Loose");

//Srict Equality
console.log(1 == "1");
console.log(1 == true);

console.log(" ");
console.log(0 == false);
console.log("" == false);




//Strict equality
console.log(1 == "1");
console.log(1 === "1");
console.log(" ");

console.log(1 == true);
console.log(1 === true);
console.log(" ");

console.log(0 == false );
console.log(0 === false);

//Strict no-equality
console.log(1 != "1");
console.log(1 !== "1");
console.log(" ");

console.log(1 != true);
console.log(1 !== true);
console.log(" ");

console.log(0 != false);
console.log(0 != false);

//Null vs Undefined
console.log(null == 0);
console.log(null === 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(" ");
console.log(undefined == null);
console.log(undefined === 0);
console.log(" ");
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined >= 0);


//Logical Operator ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//returns the fist true number?
console.log(1 || 0);
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);


console.log(true || 0);
console.log(1 || false);
console.log(true || 1);
console.log(false || 1);
console.log(false || 0);
console.log(0 || 0);
