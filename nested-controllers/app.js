var app = angular.module("nestedAppController",[]);
	app.controller("Ctrl1",Ctrl1);
	app.controller("Ctrl2",Ctrl2);

	function Ctrl1($scope){
		this.test = "test 1";
	}

	function Ctrl2($scope){
		//this.test = "test 2";
	}