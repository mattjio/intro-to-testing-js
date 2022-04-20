// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function plusOne(num) {
    if(typeof num === "number") {
        return num + 1;
    }
    return 0;
}

// sayHello function

function sayHello(input) {
    if (typeof input === "undefined" || typeof input === "boolean")  {
        return "Hello World";
    } else {
        return "Hello " + input;
    }
}
