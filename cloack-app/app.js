var module = angular.module("cloackApp",[]);
		module.controller("TimeCtrl",Time);
		function Time($scope,$interval){
			
			$scope.currentTime = new Date().toTimeString();
			$scope.hourOfDay = new Date().getHours();
			$scope.timeString = "Inizitializing cloackApp!";
			$scope.updateTime = function(){
					$interval(function(){
										var date =  new Date();
										var hours = date.getHours();
										var minutes = date.getMinutes();
										var seconds = date.getSeconds();
											$scope.timeString = hours+":"+minutes+":"+seconds;
							},1000);									
			}
			
		

			$scope.changeColor = function(){
					if($scope.radioValue=="red")
						$scope.styleBtn = { 
								"color" : "white",
								"background-color":"red",
								"border":"none", 
								"padding":"8px 10px",
								"font-size":"14px",
								"text-transform":"uppercase",
								"font-weight":"400"
						}
					if($scope.radioValue=="blue")
						$scope.styleBtn = { 
								"color" : "white",
								"background-color":"blue",
								"border":"none", 
								"padding":"8px 10px",
								"font-size":"14px",
								"text-transform":"uppercase",
								"font-weight":"400"
						}
					if($scope.radioValue=="green")
						$scope.styleBtn = { 
								"color" : "white",
								"background-color":"green",
								"border":"none", 
								"padding":"8px 10px",
								"font-size":"14px",
								"text-transform":"uppercase",
								"font-weight":"400"
						}
			}
		

		}