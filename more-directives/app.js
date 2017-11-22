var app = angular.module("moreDirectiveApp",[]);
	app.controller("moreDirectiveController",moreDirectiveCtrl);

	function moreDirectiveCtrl($scope){
		this.status_btn_clicked = false;
		this.btnClicked = function(){
			if(this.status_btn_clicked==false)
				this.status_btn_clicked = true
			else
				this.status_btn_clicked = false;
		}
		this.myList = [
			{
				"code_flight":"XS34LS",
				"from":"Amsterdam",
				"to":"Rome",
				"start":"12.30",
				"arrive":"14.50",
				"company":"Ryanair"
			},
			{
				"code_flight":"XS34LS",
				"from":"Amsterdam",
				"to":"Rome",
				"start":"12.30",
				"arrive":"14.50",
				"company":"Ryanair"
			},
				{
				"code_flight":"XS34LS",
				"from":"Amsterdam",
				"to":"Rome",
				"start":"12.30",
				"arrive":"14.50",
				"company":"Ryanair"
			},
				{
				"code_flight":"XS34LS",
				"from":"Amsterdam",
				"to":"Rome",
				"start":"12.30",
				"arrive":"14.50",
				"company":"Ryanair"
			},
			{
				"code_flight":"XS34LS",
				"from":"Amsterdam",
				"to":"Rome",
				"start":"12.30",
				"arrive":"14.50",
				"company":"Ryanair"
			}
		];
	}