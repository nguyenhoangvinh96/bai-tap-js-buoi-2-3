// Bài 1: Tính tiền lương nhân viên

document.getElementById("btnSalary").onclick = function () {
    var salary = document.getElementById("inputNum1").value * 1;
    var workday = document.getElementById("inputNum2").value * 1;
   
var wage = salary * workday;

document.getElementById("txtSalary").innerHTML = wage;
}


// Bài 2: Tính giá trị trung bình

document.getElementById("btnTB").onclick = function () {
    var number1 = document.getElementById("num1").value * 1;
    var number2 = document.getElementById("num2").value * 1;
    var number3 = document.getElementById("num3").value * 1;
    var number4 = document.getElementById("num4").value * 1;
    var number5 = document.getElementById("num5").value * 1;
    
    var medium = (number1 + number2 + number3 + number4 + number5) / 5;

    document.getElementById("txtTB").innerHTML = medium;
}

// Bài 3: Quy đổi tiền

document.getElementById("btnCurrency").onclick = function () {
    var USD = document.getElementById("usd").value * 1;
    
    var VND = 23500;
    var total = VND * USD;

    document.getElementById("txtCurrency").innerHTML = total;
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật

document.getElementById("btnCal").onclick = function () {
    var long = document.getElementById("width").value * 1;
    var width = document.getElementById("height").value * 1;

    var dienTich = long * width;
    var chuVi = (long + width) * 2;

var result = "Diện tích:" + dienTich + "; Chu vi:" + chuVi;

    document.getElementById("txtCal").innerHTML = result ;
    
}

// Bài 5: Tính tổng 2 ký số

document.getElementById("btnSum").onclick = function () {
    var sum = document.getElementById("number").value * 1;
   
    var num1 = sum % 10;
    var num2 = Math.floor(sum / 10);
    var total = num1 + num2;
    
    document.getElementById("txtSum").innerHTML = total;
}