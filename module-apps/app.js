var app = angular.module("modulesApp",['myHelloModulesApp','ngTagsInput']);
	/*app.controller("helloController",helloCntrl);

	function helloCntrl($scope){
		this.helloMessage = "Welcome in webpage";
	}*/

	app.controller("TagsDemoController",TagsDemoCntrl);

	function TagsDemoCntrl($scope){
		this.tags = [
			{
				text:"Test1"
			},
			{
				text:"Test2"
			},
			{
				text:"Test3"
			}
		];

	}