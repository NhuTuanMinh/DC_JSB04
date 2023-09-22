let array = [1, "hello", false, true, undefined, null, "add"];
console.log('array', array);
console.log('length', array.length);
console.log(array[0]);
console.log(array[3]);
console.log(array[array.length - 1]);
array.push([1, 2, 3]);
console.log('array', array);

let pop = array.pop();
console.log('array', array);
console.log('pop', pop);

let info = {
    name: "Minh",
    age: "2x",
    gender: "female",
    hobbit: ["Đi chơi", "Du lịch", "Đồ ăn"],
    objectMinh: {
        name: "Cyrus",
        age: 6
    }
}
console.log(info.name);
console.log(info.hoppy[2]);
console.log(info.objectMinh.age);