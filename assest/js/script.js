var app = angular.module("myApp", ["ngRoute"]);
let cart_b = [];


app.config(function ($routeProvider) {
  $routeProvider
    .when("/detail/:id", {
      templateUrl: "pages/detailProduct.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/About", {
      templateUrl: "pages/about.html",
      controller: "myCtrl",
    })
    .when("/Contact", {
      templateUrl: "pages/contact.html",
      controller: "myCtrl",
    })
    .when("/Feedback", {
      templateUrl: "pages/feedback.html",
      controller: "myCtrl",
    })
    .when("/cart", {
      templateUrl: "pages/cart.html?" + Math.random(),
      controller: "myCtrl",
    })
    .otherwise({
      templateUrl: "pages/products.html",
      controller: "myCtrl",
    });
});
app.controller("myCtrl", function ($scope, $http, $routeParams, $rootScope) {

    $scope.cart_a = [];
    $scope.products = [];
    $scope.link = 0;
    $scope.products1 = [];
    $scope.link1 = 0;
    $scope.total = [];
    $scope.totalAll = 0;
    $http.get("/assest/js/data.json").then(function (reponse) {
        $scope.products = reponse.data;
        $scope.propertyName = '';
        $scope.reverse = true;
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };

        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == $routeParams.id) {
                $scope.index = i;
                $scope.link = $scope.index + 1;

            }
        }
        // $scope.addcart = function (index) {
        //     if ($scope.products[index].id === cart_b.id) {
        //         console.log("loi")
        //     } else
        //         cart_b.push($scope.products[index]);
        //     console.log(cart_b)

        // }


        $scope.addcart = function (index) {
            // Check for duplicates before adding the item
            if (!$scope.isItemInCart($scope.products[index])) {
                cart_b.push($scope.products[index]);
                alert("Thêm Sản Phẩm Thành Công")
            } else {
                alert("Đã có sản phảm hãy kiểm tra giỏ hàng")
            }
        };

        $scope.isItemInCart = function (item) {
            return cart_b.some(function (cartItem) {
                return cartItem.id === item.id; // Modify this condition based on your item's unique identifier
            });
        };

        $scope.addcartl = function () {
            return cart_b.length;
        }




    });

    $http.get("./assest/js/data.json").then(function (response) {
      $scope.products1 = response.data;
      $scope.filteredItems = $scope.products1;
  
      $scope.filterItems = function (keyword) {
        if (keyword === '') {
          $scope.filteredItems = $scope.products1;
        } else {
          $scope.filteredItems = $scope.products1.filter(function (item) {
            return item.type.toLowerCase().includes(keyword.toLowerCase());
          });
        }
      };
  
      angular.forEach($scope.products1, function (product, index) {
        if (product.id == $routeParams.id) {
          $scope.index = index;
          $scope.link1 = $scope.index + 1;
        }
      });
    });



    $scope.cart = cart_b;
    $scope.totalAll = 0;
    for (i = 0; i < $scope.cart.length; i++) {
        $scope.cart[i].total = $scope.cart[i].newprice * $scope.cart[i].quantity;
        $scope.totalAll += $scope.cart[i].total;

    }
    $scope.removeItem = function (index) {
        $scope.cart.splice(index, 1);
    };

    $scope.plus = function (index) {
        $scope.cart[index].quantity++;
        $scope.cart[index].total = $scope.cart[index].newprice * $scope.cart[index].quantity;

    };

    $scope.minus = function (index) {
        $scope.cart[index].quantity--;
        $scope.cart[index].total = $scope.cart[index].newprice * $scope.cart[index].quantity;
        if ($scope.cart[index].quantity === 0) {
            $scope.cart.splice(index, 1);
        }
    };

    $scope.getTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            var item = $scope.cart[i];
            total += item.newprice * item.quantity;
        }
        return total;
    };
    $scope.tt = function () {
        if ($scope.totalAll > 1) {
            alert("Thanh toán thành công!")
            $scope.cart.splice(0, $scope.cart.length)
        }
        else {
            alert("Không có gì trong giỏ hàng!")
        }
    };



});





