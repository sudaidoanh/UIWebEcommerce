function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[A-Za-z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
    if(regex.test(name) == false) {
        document.getElementById("notiName").innerHTML = "<p>Họ tên không chứa kí tự đặc biệt và số</p>";
        return false;
    } else {
        document.getElementById("notiName").innerHTML = `<i class="fa fa-user" aria-hidden="true">`;
        return true;
    }
}

function checkNum() {
    var num = document.getElementById("num").value;
    var regex = /^(0[0-9\s.-]{9,11})$/;
    if(regex.test(num) == false) {
        document.getElementById("notiNum").innerHTML = "<p>Số điện thoại từ 9 đến 11 chữ số</p>";
        return false;
    } else {
        document.getElementById("notiNum").innerHTML = `<i class="fa fa-phone-volume" aria-hidden="true">`;
        return true;
    }
}

function checkMail() {
    var mail = document.getElementById("mail").value;
    var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$|^[0-9]{10}$/;
    if(regex.test(mail) == false) {
        document.getElementById("notiMail").innerHTML = "<p>Email không hợp lệ</p>";
        return false;
    } else {
        document.getElementById("notiMail").innerHTML = `<i class="fa fa-mail-bulk"" aria-hidden="true">`;
        return true;
    }
}


function checkPass() {
    var pass = document.getElementById("pass").value;
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(pass) == false) {
        document.getElementById("notiPass").innerHTML = "<p>Ít nhất 8 kí tự bao gồm kí tự và số</p>";
        return false;
    } else {
        document.getElementById("notiPass").innerHTML = `<i class="fa fa-unlock" aria-hidden="true">`;
        return true;
    }
}

function checkRePass() {
    var rePass = document.getElementById("rePass").value;
    var pass = document.getElementById("pass").value;
    if (rePass == pass){
        document.getElementById("notiRePass").innerHTML = `<i class="fa fa-lock" aria-hidden="true"></i>`;
        return true;
    } else{
        document.getElementById("notiRePass").innerHTML = "<p>Mật khẩu không khớp, vui lòng nhập lại</p>";
        return false;
    }
}

function checkRegis() {
    if(checkName() && checkNum() && checkMail() && checkPass() && checkRePass()) {
        var name = document.getElementById("name").value;
        var num = document.getElementById("num").value;
        var mail = document.getElementById("mail").value;
        var pass = document.getElementById("pass").value;

        if(mail == localStorage.getItem("mail")) {
            alert("Email đã tồn tại, hãy nhập lại");
            document.getElementById("notiMail").innerHTML = "<p>Email đã trùng</p>";
        } else {
            
            localStorage.setItem("name", name);
            localStorage.setItem("phone", num);
            localStorage.setItem("password", pass);
            localStorage.setItem("mail", mail);
            alert("Đăng ký thành công");
            window.location.href = "/index.html";
        }
    } else alert("Nhập lại các thông tin");
}

