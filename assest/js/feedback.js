$(document).ready(function () {
    $('#frmGopY').submit(function (e) {
        // Validate hoten
        var hoten = $('#txtHoTen').val();
        if (hoten == "") {
            $('#txtHoTen').removeClass('is-valid');
            $('#txtHoTen').addClass('is-invalid');
            $('#txtHoTenFeedback').html('Vui lòng nhập họ tên');

            e.preventDefault();
            return;
        } else if (hoten.length < 5) {
            $('#txtHoTen').removeClass('is-valid');
            $('#txtHoTen').addClass('is-invalid');
            $('#txtHoTenFeedback').html('Vui lòng nhập trên 5 kí tự');

            e.preventDefault();
            return;
        }
        $('#txtHoTen').removeClass('is-invalid');
        $('#txtHoTen').addClass('is-valid');

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

        //Validate noidung
        var noidung = $('#txtNoiDung').val();
        if (noidung == "") {
            $('#txtNoiDung').removeClass('is-valid');
            $('#txtNoiDung').addClass('is-invalid');
            $('#txtNoiDungFeedback').html('Vui lòng nhập nội dung góp ý');

            e.preventDefault();
            return;
        }
        $('#txtNoiDung').removeClass('is-invalid');
        $('#txtNoiDung').addClass('is-valid');

        e.preventDefault();
        return;
    });
});