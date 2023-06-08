var app = angular.module("shop", ["ngRoute"]);
    app.controller("shopCtrl", function($scope, $rootScope, $routeParams, $http)
    {
        $scope.products = [];
        $http.get("./assest/js/product.json").then(function (reponse){
            $scope.products =reponse.data;
            for(i = 0; i < $scope.products.length; i++){
                if($scope.products[i].id == $routeParams.id){
                    $scope.index=i;
                }
            }
        });
    });
        app.config(function ($routeProvider){
            $routeProvider
            .when("/detail/:id", {
                templateUrl: "detailprd.html?" + Math.random(),
                controller: "shopCtrl",
            })
            .when("/cart/:id", {
                templateUrl: "cart.html?" + Math.random(),
                controller: "shopCtrl",
            })
            .when("/1", {
                templateUrl: "about.html",
                controller: "shopCtrl",
            })
            .otherwise({
                templateUrl: "product.html",
                controller: "shopCtrl",
            });
        });