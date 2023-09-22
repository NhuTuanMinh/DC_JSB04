const a = 10;
{
    let b = 20;
    var c = 30;
    // console.log(b);
    // console.log(c);
}

//console.log(b); biến b nằm trong scoop nên khi đi 
//ra ngoài sẽ không gọi lại được
console.log(c);

let x; // khai báo biến
x = 44; // gán giá trị cho biến

var y = 50;
document.write(x);

let z;
console.log(z);

// let thongbao = alert("Bạn đã trúng cái nịt");
//let nhap = prompt("Nhập gì cái gì đi:3");
 //let xacnhan = confirm("=))");

 console.log("thongbao:  ",thongbao);
 console.log("nhap: ", nhap );
console.log("xacnhan: ",xacnhan );

if (y > 10) {
    console.log("y lớn hơn 10");
}
else if ("y == 10") {
    console.loh("y==10");
}

else {
    console.log("y ko lớn hơn 10");
}

const diem_so = 6;
if (diem_so > 9) {
    console.log("Học viện đạt điểm tuyệt đối");
    if (diem_so == 10) {
        console.log("Học viện đạt điểm tuyệt đối");

    }
}
else if (diem_so > 7) {
    console.log("Học viện đạt điểm khá");
}
else {
    console.log("Học viện đạt điểm trung bình");
}



