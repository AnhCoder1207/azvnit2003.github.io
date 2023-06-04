$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

Vue.component('product-item', {
    props: ['product'],
    template: `
            <div class="card h-100 shadow-sm card-item">
                
                <div class="text-center">
                    <img :src="product.images" class="card-img-top img-fluid">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">{{ product.title }}</h5>
                    <p class="card-text">
                        <span class="new-price">{{ product.newprice }}</span> <s>{{ product.oldprice }}</s>
                    </p>
                    <span class="star-rating">
                        <i class="fa fa-star" aria-hidden="true" v-for="item in product.star"></i>
                    </span> | {{ product.rate }} đánh giá
                    </div>
                <div class="card-footer">
                    <span><a :href="product.link">XEM CHI TIẾT</a></span>                         
                </div>
            </div>
    `
});

var vm = new Vue({
    el: '#app',
    data: {
        listItem: [{
            star: 4,
            images: 'assest/img/product/iphone/iphone-8-plus-128gb-vang-dong-1.jpg',
            title: 'Iphone 8 Plus 128GB',
            rate: 8,
            newprice: '13.500.000đ',
            oldprice: '15.900.000đ',
            link: 'pages/iphone-8-plus-detail.html',
        },
        {
            star: 3,
            images: 'assest/img/product/iphone/iphone-11-64gb-do-1.jpg',
            title: 'Iphone 11 64GB',
            rate: 12,
            newprice: '19.500.000đ',
            oldprice: '21.900.000đ',
            link: 'pages/iphone-11-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/iphone/iphone-11-promax-64gb-xanh-la-1.jpg',
            title: 'Iphone 11 Promax 64GB',
            rate: 18,
            newprice: '29.000.000đ',
            oldprice: '33.900.000đ',
            link: 'pages/iphone-11-promax-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/iphone/iphone-se-128gb-trang-1.jpg',
            title: 'Iphone SE 128GB',
            rate: 22,
            newprice: '12.400.000đ',
            oldprice: '14.900.000đ',
            link: 'pages/iphone-se-detail.html',
        },
        {
            star: 5,
            images: 'assest/img/product/iphone/iphone-7-plus-128gb-black-1.jpg',
            title: 'Iphone 7 Plus 128GB',
            rate: 26,
            newprice: '10.300.000đ',
            oldprice: '14.900.000đ',
            link: 'pages/iphone-7-plus-detail.html',
        },
        {
            star: 3,
            images: 'assest/img/product/samsung/samsung-a31-xanh-1.jpg',
            title: 'Samsung Galaxy A31',
            rate: 15,
            newprice: '5.400.000đ',
            oldprice: '6.400.000đ',
            link: 'pages/samsung-galaxy-a31-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/samsung/samsung-a51-128gb-xanh-1.jpg',
            title: 'Samsung Galaxy A51',
            rate: 13,
            newprice: '6.200.000đ',
            oldprice: '7.900.000đ',
            link: 'pages/samsung-galaxy-a51-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/samsung/samsung-a71-128gb-den-1.jpg',
            title: 'Samsung Galaxy A71',
            rate: 9,
            newprice: '7.900.000đ',
            oldprice: '9.700.000đ',
            link: 'pages/samsung-galaxy-a71-detail.html',
        },
        {
            star: 5,
            images: 'assest/img/product/samsung/samsung-galaxy-note-10plus-den-1.jpg',
            title: 'Samsung Galaxy Note 10+',
            rate: 19,
            newprice: '17.500.000đ',
            oldprice: '26.900.000đ',
            link: 'pages/samsung-galaxy-note10-plus-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/samsung/samsung-galaxy-s20-plus-den-1.jpg',
            title: 'Samsung Galaxy S20+',
            rate: 6,
            newprice: '18.400.000đ',
            oldprice: '23.900.000đ',
            link: 'pages/samsung-galaxy-s20-plus-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/oppo/oppo-a12-den-1.jpg',
            title: 'OPPO A12',
            rate: 10,
            newprice: '3.100.000đ',
            oldprice: '3.600.000đ',
            link: 'pages/oppo-a12-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/oppo/oppo-a31-trang-1.jpg',
            title: 'OPPO A31 128GB',
            rate: 15,
            newprice: '3.700.000đ',
            oldprice: '4.400.000đ',
            link: 'pages/oppo-a31-detail.html',
        },
        {
            star: 3,
            images: 'assest/img/product/oppo/oppo-a92-trang-1.jpg',
            title: 'OPPO A92',
            rate: 17,
            newprice: '5.900.000đ',
            oldprice: '6.900.000đ',
            link: 'pages/oppo-a92-detail.html',
        },
        {
            star: 4,
            images: 'assest/img/product/oppo/oppo-reno-3-trang-1.jpg',
            title: 'OPPO Reno3',
            rate: 22,
            newprice: '6.500.000đ',
            oldprice: '8.900.000đ',
            link: 'pages/oppo-reno3-detail.html',
        },
        

        ]
    },
    methods: {

    }
});