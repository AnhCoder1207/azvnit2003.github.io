var vm = new Vue({
    el: '#app',
    data: {
        errors: [],
        kiemtraLoi: false,
        hoten: '',
        email: '',
        sodienthoai: '',
        loinhan: '',
    },
    methods: {
        kiemtraDulieu: function (e) {

            e.preventDefault();

            this.errors = [];
            this.kiemtraLoi = false;

            //Validate hoten
            if (this.hoten == "") {
                this.errors.push('Vui lòng nhập họ tên');
            } else if (this.hoten.length < 5) {
                this.errors.push('Vui lòng nhập họ tên trên 5 kí tự');
            }

            //Validate email
            if (this.email == "") {
                this.errors.push('Vui lòng nhập email');
            }

            //Validate sodienthoai
            if (this.sodienthoai == "") {
                this.errors.push('Vui lòng nhập số điện thoại');
            }

            //Validate loinhan
            if (this.loinhan == "") {
                this.errors.push('Vui lòng nhập lời nhắn');
            } else if (this.loinhan.length < 5) {
                this.errors.push('Vui lòng nhập lời nhắn trên 5 kí tự');
            }

            this.kiemtraLoi = true;

            return false;
        },
    }
});