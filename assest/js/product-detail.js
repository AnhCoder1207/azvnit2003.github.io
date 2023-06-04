
//Validation
$(document).ready(function () {
    $('#frmNhanXet').submit(function (e) {
        // Validate nhanxet
        var nhanxet = $('#txtNhanXet').val();
        if (nhanxet == "") {
            $('#txtNhanXet').removeClass('is-valid');
            $('#txtNhanXet').addClass('is-invalid');
            $('#txtNhanXetFeedback').html('Vui lòng nhập nhận xét sản phẩm');

            e.preventDefault();
            return;
        }
        $('#txtNhanXet').removeClass('is-invalid');
        $('#txtNhanXet').addClass('is-valid');

        // Validate hoten
        var hotennx = $('#txtHoTenNX').val();
        if (hotennx == "") {
            $('#txtHoTenNX').removeClass('is-valid');
            $('#txtHoTenNX').addClass('is-invalid');
            $('#txtHoTenNXFeedback').html('Vui lòng nhập họ tên');

            e.preventDefault();
            return;
        }
        $('#txtHoTenNX').removeClass('is-invalid');
        $('#txtHoTenNX').addClass('is-valid');

        // Validate dienthoai
        var dienthoainx = $('#txtDienThoaiNX').val();
        if (dienthoainx == "") {
            $('#txtDienThoaiNX').removeClass('is-valid');
            $('#txtDienThoaiNX').addClass('is-invalid');
            $('#txtDienThoaiNXFeedback').html('Vui lòng số điện thoại');

            e.preventDefault();
            return;
        }
        $('#txtDienThoaiNX').removeClass('is-invalid');
        $('#txtDienThoaiNX').addClass('is-valid');


        e.preventDefault();
        return;
    });

    $('#frmBinhLuan').submit(function (e) {
        // Validate hoten
        var hotenbl = $('#txtHoTenBL').val();
        if (hotenbl == "") {
            $('#txtHoTenBL').removeClass('is-valid');
            $('#txtHoTenBL').addClass('is-invalid');
            $('#txtHoTenBLFeedback').html('Vui lòng nhập họ tên');

            e.preventDefault();
            return;
        }
        $('#txtHoTenBL').removeClass('is-invalid');
        $('#txtHoTenBL').addClass('is-valid');

        // Validate email
        var emailbl = $('#txtEmailBL').val();
        if (emailbl == "") {
            $('#txtEmailBL').removeClass('is-valid');
            $('#txtEmailBL').addClass('is-invalid');
            $('#txtEmailBLFeedback').html('Vui lòng nhập email');

            e.preventDefault();
            return;
        }
        $('#txtEmailBL').removeClass('is-invalid');
        $('#txtEmailBL').addClass('is-valid');

        // Validate dienthoai
        var dienthoaibl = $('#txtDienThoaiBL').val();
        if (dienthoaibl == "") {
            $('#txtDienThoaiBL').removeClass('is-valid');
            $('#txtDienThoaiBL').addClass('is-invalid');
            $('#txtDienThoaiBLFeedback').html('Vui lòng số điện thoại');

            e.preventDefault();
            return;
        }
        $('#txtDienThoaiBL').removeClass('is-invalid');
        $('#txtDienThoaiBL').addClass('is-valid');

        // Validate binhluan
        var binhluan = $('#txtBinhLuan').val();
        if (binhluan == "") {
            $('#txtBinhLuan').removeClass('is-valid');
            $('#txtBinhLuan').addClass('is-invalid');
            $('#txtBinhLuanFeedback').html('Vui lòng nhập bình luận');

            e.preventDefault();
            return;
        }
        $('#txtBinhLuan').removeClass('is-invalid');
        $('#txtBinhLuan').addClass('is-valid');

        e.preventDefault();
        return;
    });
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

