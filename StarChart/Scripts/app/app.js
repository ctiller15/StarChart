var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
	});

	$routeProvider.when("/Subscription/Signup", {
		templateUrl: '/scripts/app/pages/Subscription/Signup.html',
		controller: 'subscribeController'
	});

	$routeProvider.when("/Employee/Login", {
		templateUrl: '/scripts/app/pages/Employee/Login.html',
		controller: 'employeeController'
	});

	$routeProvider.when("Subscriptions", {
		templateUrl: '/scripts/app/pages/Subscription.html',
		controller: 'subController'
	});

	$routeProvider.when("Products", {
		templateUrl: '/scripts/app/pages/Product.html',
		controller: 'productController'
	});

    $routeProvider.otherwise({ redirectTo: "/home" });
});

