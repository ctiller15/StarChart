var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
	});

	$routeProvider.when("/Subscription/Signup", {
		templateUrl: '/scripts/app/pages/Subscription/Signup.html',
		controller: 'subController'
	});

	$routeProvider.when("/Employee/Signup", {
		templateUrl: '/scripts/app/pages/Employee/Signup.html',
		controller: 'employeeController'
	});

	$routeProvider.when("/Employee/Login", {
		templateUrl: '/scripts/app/pages/Employee/Login.html',
		controller: 'employeeController'
	});

	$routeProvider.when("Subscriptions/new", {
		templateUrl: '/scripts/app/pages/Subscription/new',
		controller: 'subController'
	});

	$routeProvider.when("Subscriptions/{:subID}", {
		templateUrl: '/scripts/app/pages/Subscription/Subscription',
		controller: 'subController'
	});

	$routeProvider.when("Subscriptions/{:subID}", {
		templateUrl: '/scripts/app/pages/Subscription/update',
		controller: 'subController'
	});

	$routeProvider.when("Subscriptions/:subID", {
		templateUrl: '/scripts/app/pages/Subscription/delete',
		controller: 'subController'
	});

	$routeProvider.when("Products/new", {
		templateUrl: '/scripts/app/pages/Products/new',
		controller: 'productController'
	});

	$routeProvider.when("Products/:subID", {
		templateUrl: '/scripts/app/pages/Products/product',
		controller: 'productController'
	});

	$routeProvider.when("Products/:subID", {
		templateUrl: '/scripts/app/pages/Products/update',
		controller: 'productController'
	});

	$routeProvider.when("products/:subID", {
		templateUrl: '/scripts/app/pages/Products/delete',
		controller: 'productController'
	});

    $routeProvider.otherwise({ redirectTo: "/home" });
});

