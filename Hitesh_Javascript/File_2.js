"use strict"; // it is used to tell js-engine using latest modern code (treat all JS code as newer version)(Strict mode)

// (1). alert(3 + 4); => not work with node.js but work in console of browser, and aler(); is old method. latest method work.(New syntax in node.js)

// (2). console.log(3 + 3) console.log(4 + 4) => Not work
console.log(3 + 3)   //=> work with or without semi-colon...
console.log(4 + 4)

//  Typeof =>The typeof operator in JavaScript returns the data type of its operand. The operand can be any variable, function, or object. The typeof operator is a unary operator, which means it takes one operand. The operand can be enclosed in parentheses, but this is not necessary.

// (3). Primitive data types => The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
//
//      Types of Primitive data types
//      (1). Number
//      (2). String
//      (3). Boolean
//      (4). null  (standalone value)
//      (5). Undefined
//      (6). BigInt
//      (7). Symbol
//
//  (1). Number
        let Number1 = 123;
        console.log(typeof(Number1), Number1);

//  (2). String
        let String1 = "Ankit";
        console.log(typeof String1, String1);

//  (3). Boolean
        let Boolean1 = true;
        let Boolean2 = false;
        console.log(typeof Boolean1, Boolean1);
        console.log(typeof Boolean2, Boolean2);

//  (4). Null
        let a = null;
        console.log(typeof(a), a);

//  (5). object
        let b;
        console.log(typeof(b), b);
    
//  (6). BigInt
        let Number2 = 7857642375091648564328958932467435674387648545374765438758736893n;
        console.log(typeof(Number2), Number2);

//  (7). Symbol : it is used in react component for Uniqueness

//  Conversion of data types
        console.log("\n");
        console.log("Conversion other Data-Types to Number");
        let num1 = 123;
        let num2 = "123";
//      let num3 = a123;  invalid
        let num4 = "a123";
//      let num5 = 123a;  invalid
        let num6 = "123a"
        let num7 = false;
        let num8 = "";
        let num9;
        let num10 = null;

        console.log(typeof num1, num1);
        console.log("\n");

        console.log(typeof num2, num2);
        num2 = Number(num2);
        console.log(typeof num2, num2);
        console.log("\n");

        console.log(typeof num4, num4);
        num4 = Number(num4);
        console.log(typeof num4, num4);
        console.log("\n");

        console.log(typeof num6, num6);
        num6 = Number(num6);
        console.log(typeof num6, num6);
        console.log("\n");

        console.log(typeof num7, num7);
        num7 = Number(num6);
        console.log(typeof num7, num7);
        console.log("\n");

        console.log(typeof num8, num8);
        num8 = Number(num6);
        console.log(typeof num8, num8);
        console.log("\n");

        console.log(typeof num9, num9);
        num9 = Number(num6);
        console.log(typeof num9, num9);
        console.log("\n");

        console.log(typeof num10, num10);
        num10 = Number(num6);
        console.log(typeof num10, num10);
        console.log("\n");

        console.log("\n");
        console.log("Conversion other Data-Types to String");
        let str1 = 123;
        let str2 = "123";
        // let str3 = a123;  
        let str4 = "a123";
        // let str5 = 123a;  
        let str6 = "123a"
        let str7 = false;
        let str8 = "";
        let str9;
        let str10 = null;

        console.log(typeof str1, str1);
        str1 = String(str1);
        console.log(typeof str1, str1);
        console.log("\n");

        console.log(typeof str2, str2);
        str2 = String(str2);
        console.log(typeof str2, str2);
        console.log("\n");

        console.log(typeof str4, str4);
        str4 = String(str4);
        console.log(typeof str4, str4);
        console.log("\n");

        console.log(typeof str6, str6);
        str6 = String(str6);
        console.log(typeof str6, str6);
        console.log("\n");

        console.log(typeof str7, str7);
        str7 = String(str7);
        console.log(typeof str7, str7);
        console.log("\n");

        console.log(typeof str8, str8);
        str8 = String(str8);
        console.log(typeof str8, str8);
        console.log("\n");

        console.log(typeof str9, str9);
        str9 = String(str9);
        console.log(typeof str9, str9);
        console.log("\n");

        console.log(typeof str10, str10);
        str10 = String(str10);
        console.log(typeof str10, str10);
        console.log("\n");


//  Number => Represents numbers of any kind, both integer and floating-point. The maximum value for an integer is ±(2^53 - 1), and the maximum value for a floating-point number is ±(10^308).

//  String => Represents a sequence of zero or more characters. Strings can be enclosed in single quotes (') or double quotes (").

//  Boolean => Represents a logical value, either true or false.

//  Null => Represents the absence of a value.

//  Undefined => Represents a value that has not yet been assigned.

//  BigInt => Represents integers of arbitrary length. BigInts are not supported in all browsers, so you should use them with caution.

// Non-primitive data types => The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.
//      
//      (a). Non-Primitive data types are created by the programmer
//      (b). Size is not fixed
//
//      Types of Non-Primitive data types
//      (1). Array
//      (2). Object
//      (3). Function (Object function)
//
