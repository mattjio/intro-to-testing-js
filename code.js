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
    if (!input) {
        return "Hello Jane";
    } else {
        return "Hello " + input;
    }

}
