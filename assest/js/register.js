$(document).ready(function () {
    $('#frmRegister').submit(function (e) {
        // Validate hoten
        var hoten = $('#txtHoTen').val();
        if (hoten == "") {
            $('#txtHoTen').removeClass('is-valid');
            $('#txtHoTen').addClass('is-invalid');
            $('#txtHoTenFeedback').html('Vui lòng nhập họ tên');

            e.preventDefault();
            return;
        }
        $('#txtHoTen').removeClass('is-invalid');
        $('#txtHoTen').addClass('is-valid');

        //Validate tendangnhap
        var tendangnhap = $('#txtTaiKhoan').val();
        if (tendangnhap == "") {
            $('#txtTaiKhoan').removeClass('is-valid');
            $('#txtTaiKhoan').addClass('is-invalid');
            $('#txtTaiKhoanFeedback').html('Vui lòng nhập tên đăng nhập');

            e.preventDefault();
            return;
        }
        $('#txtTaiKhoan').removeClass('is-invalid');
        $('#txtTaiKhoan').addClass('is-valid');
        
        //Validate email
        var email = $('#txtEmail').val();
        if (email == "") {
            $('#txtEmail').removeClass('is-valid');
            $('#txtEmail').addClass('is-invalid');
            $('#txtEmailFeedback').html('Vui lòng nhập địa chỉ Email');

            e.preventDefault();
            return;
        }
        $('#txtEmail').removeClass('is-invalid');
        $('#txtEmail').addClass('is-valid');

        //Validate dienthoai
        var dienthoai = $('#txtDienThoai').val();
        if (dienthoai == "") {
            $('#txtDienThoai').removeClass('is-valid');
            $('#txtDienThoai').addClass('is-invalid');
            $('#txtDienThoaiFeedback').html('Vui lòng nhập số điện thoại');

            e.preventDefault();
            return;
        }
        $('#txtDienThoai').removeClass('is-invalid');
        $('#txtDienThoai').addClass('is-valid');

        //Validate matkhau
        var matkhau = $('#txtMatKhau').val();
        if (matkhau == "") {
            $('#txtMatKhau').removeClass('is-valid');
            $('#txtMatKhau').addClass('is-invalid');
            $('#txtMatKhauFeedback').html('Vui lòng nhập mật khẩu');

            e.preventDefault();
            return;
        }
        $('#txtMatKhau').removeClass('is-invalid');
        $('#txtMatKhau').addClass('is-valid');

        //Validate xacnhanmatkhau
        var xacnhanmatkhau = $('#txtXacNhanMatKhau').val();
        if (xacnhanmatkhau == "") {
            $('#txtXacNhanMatKhau').removeClass('is-valid');
            $('#txtXacNhanMatKhau').addClass('is-invalid');
            $('#txtXacNhanMatKhauFeedback').html('Vui lòng xác nhận lại mật khẩu');

            e.preventDefault();
            return;
        } else if (xacnhanmatkhau != matkhau) {
            $('#txtXacNhanMatKhau').removeClass('is-valid');
            $('#txtXacNhanMatKhau').addClass('is-invalid');
            $('#txtXacNhanMatKhauFeedback').html('Nhập lại mật khẩu không chính xác');

            e.preventDefault();
            return;
        }
        $('#txtXacNhanMatKhau').removeClass('is-invalid');
        $('#txtXacNhanMatKhau').addClass('is-valid');


        e.preventDefault();
        return;
    });
});