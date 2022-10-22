function sum(a, b, c){
    console.log(arguments);
    const result =a+ b +c;
    return result;

}

const total = sum(10,20,30,40,45);
console.log(total);