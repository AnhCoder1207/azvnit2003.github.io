$(document).ready(function () {
    $('#frmCheckout').submit(function (e) {
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

        // Validate dienthoai
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

        // Validate diachi
        var diachi = $('#txtDiaChi').val();
        if (diachi == "") {
            $('#txtDiaChi').removeClass('is-valid');
            $('#txtDiaChi').addClass('is-invalid');
            $('#txtDiaChiFeedback').html('Vui lòng nhập địa chỉ');

            e.preventDefault();
            return;
        }
        $('#txtDiaChi').removeClass('is-invalid');
        $('#txtDiaChi').addClass('is-valid');


        e.preventDefault();
        return;
    });
});