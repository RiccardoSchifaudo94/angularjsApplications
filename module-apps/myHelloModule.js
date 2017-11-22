var helloApp = angular.module("myHelloModulesApp",[]);
	helloApp.controller("helloController",helloCntrl);

	function helloCntrl($scope){
		this.helloMessage = "Welcome in webpage from myHelloModulesApp";
	}

	