var app = angular.module("shop", ["ngRoute"]).controller('shopCtrl', function ($scope, $timeout) {
    $scope.isLoading = true;

    // Simulate loading data
    $timeout(function () {
        $scope.isLoading = false;
    }, 3000);
});
angular.module("shop", []).controller("shopCtrl", function ($scope, $http) {
    $scope.limitNumber = 5;
    $scope.products = [];
    $http.get("./assest/js/product.json").then(function (reponse) {
        $scope.products = reponse.data;
    });
    $scope.isLoading = false;

    $scope.loadData = function () {
        $scope.isLoading = true;

        // Simulate asynchronous data loading
        $http.get('/api/data').then(function (response) {
            // Xử lý dữ liệu nhận được

            $scope.isLoading = false;
        });
    };
    $scope.getProductStars = function (starCount) {
        return Array(starCount).fill().map((_, index) => index + 1);
    };

});
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