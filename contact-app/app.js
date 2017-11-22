var app = angular.module("todoApp",[]);
	app.controller("ContactController",ContactCntrl);

	function ContactCntrl($scope){
		this.state = false;
		this.contacts = 
							[  
						      {  
						         "gender":"female",
						         "name":{  
						            "title":"mrs",
						            "first":"julie",
						            "last":"long"
						         },
						         "location":{  
						            "street":"2337 spring st",
						            "city":"brisbane",
						            "state":"western australia",
						            "postcode":5161
						         },
						         "email":"julie.long@example.com",
						         "login":{  
						            "username":"bigtiger382",
						            "password":"brown",
						            "salt":"oOgZ8wtQ",
						            "md5":"cecd2542411ba158654a4d81b3ad7aac",
						            "sha1":"3988beac570d0d4814fedff91fbc755f303a5d1f",
						            "sha256":"38796d63b7794824582ae6656f460da750b90d86d9c3d36f93380ae615bdfdf8"
						         },
						         "dob":"1991-10-01 23:40:01",
						         "registered":"2012-11-04 02:36:29",
						         "phone":"06-8891-2583",
						         "cell":"0435-625-311",
						         "id":{  
						            "name":"TFN",
						            "value":"386837905"
						         },
						         "picture":{  
						            "large":"https://randomuser.me/api/portraits/women/83.jpg",
						            "medium":"https://randomuser.me/api/portraits/med/women/83.jpg",
						            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/83.jpg"
						         },
						         "nat":"AU"
						      }
						      ,
						      {  
						         "gender":"female",
						         "name":{  
						            "title":"mrs",
						            "first":"julie",
						            "last":"long"
						         },
						         "location":{  
						            "street":"2337 spring st",
						            "city":"brisbane",
						            "state":"western australia",
						            "postcode":5161
						         },
						         "email":"julie.long@example.com",
						         "login":{  
						            "username":"bigtiger382",
						            "password":"brown",
						            "salt":"oOgZ8wtQ",
						            "md5":"cecd2542411ba158654a4d81b3ad7aac",
						            "sha1":"3988beac570d0d4814fedff91fbc755f303a5d1f",
						            "sha256":"38796d63b7794824582ae6656f460da750b90d86d9c3d36f93380ae615bdfdf8"
						         },
						         "dob":"1991-10-01 23:40:01",
						         "registered":"2012-11-04 02:36:29",
						         "phone":"06-8891-2583",
						         "cell":"0435-625-311",
						         "id":{  
						            "name":"TFN",
						            "value":"386837905"
						         },
						         "picture":{  
						            "large":"https://randomuser.me/api/portraits/women/83.jpg",
						            "medium":"https://randomuser.me/api/portraits/med/women/83.jpg",
						            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/83.jpg"
						         },
						         "nat":"AU"
						      },
						      {  
								   "gender":"female",
								   "name":{  
								      "title":"miss",
								      "first":"lena",
								      "last":"vincent"
								   },
								   "location":{  
								      "street":"3742 rue andré-gide",
								      "city":"clermont-ferrand",
								      "state":"hautes-alpes",
								      "postcode":74598
								   },
								   "email":"lena.vincent@example.com",
								   "login":{  
								      "username":"blueleopard674",
								      "password":"kkkkkk",
								      "salt":"zs6NFqqa",
								      "md5":"6d648014a1a3ea02e852759ae4225322",
								      "sha1":"583a811c9e9a0d6909410b9cc4f88520d38af168",
								      "sha256":"4c416ca9f07e0daf5e6ae25e1d5df2b944cad543fdd23fee75d034bb257f9338"
								   },
								   "dob":"1966-12-31 11:32:54",
								   "registered":"2015-01-29 16:52:49",
								   "phone":"01-38-94-92-13",
								   "cell":"06-31-66-71-55",
								   "id":{  
								      "name":"INSEE",
								      "value":"2661114744575 60"
								   },
								   "picture":{  
								      "large":"https://randomuser.me/api/portraits/women/90.jpg",
								      "medium":"https://randomuser.me/api/portraits/med/women/90.jpg",
								      "thumbnail":"https://randomuser.me/api/portraits/thumb/women/90.jpg"
								   },
								   "nat":"FR"
							},
							{  
								   "gender":"male",
								   "name":{  
								      "title":"mr",
								      "first":"jeffery",
								      "last":"butler"
								   },
								   "location":{  
								      "street":"5971 eason rd",
								      "city":"mildura",
								      "state":"south australia",
								      "postcode":241
								   },
								   "email":"jeffery.butler@example.com",
								   "login":{  
								      "username":"smallbutterfly459",
								      "password":"bunny",
								      "salt":"Ffmja11g",
								      "md5":"e37da9353ce0ca684eb8f3d7020472ef",
								      "sha1":"1fd1a231f2186b0e092ccedec8e7f1e3c480c4b9",
								      "sha256":"f2faf121cb8df848b975aae296ca2aabf0e71534ad953c88eed6db27dcd2e87b"
								   },
								   "dob":"1968-10-04 22:48:30",
								   "registered":"2014-09-19 15:28:48",
								   "phone":"04-7612-1942",
								   "cell":"0484-640-610",
								   "id":{  
								      "name":"TFN",
								      "value":"032166381"
								   },
								   "picture":{  
								      "large":"https://randomuser.me/api/portraits/men/48.jpg",
								      "medium":"https://randomuser.me/api/portraits/med/men/48.jpg",
								      "thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"
								   },
								   "nat":"AU"
							}
						];


						this.selectContact = function(index){
							this.state = true;
							this.selectedContact = this.contacts[index];
						}

						this.closeDetail = function(){
							this.state = false;
						}
				
	}