// cách 1
// ax+b=0
function timX(a, b) {
    let x = -b / a;
    console.log("x =", x);
    return x;
}
let ketQuaFuncTimX = timX(3, 5);
timX(4, 5);
console.log("ketQuaFuncTimX: ", ketQuaFuncTimX);
let timY = function (a, b) {
    let y = -b / a;
    console.log("y =", y);
}
timY(9, 11);


function print() {
    console.log(":))?");
}
print();

// ax + b = 0
let a = parseInt(prompt("nhập số a "));
let b = prompt("nhập số b ");
let c = parseInt(b);
console.log("typèo a:", typeof (a), a);
console.log("typeof a:", typeof (c), c);


console.log(a, b, c);

if (!Number.isNaN(a) && !Number.isNaN(c)) {
    if (a != 0) {
        timX(a, c);
    }
    else {
        alert("a phải khác 0");
    }
}
else {
    alert("Không tính được");
}