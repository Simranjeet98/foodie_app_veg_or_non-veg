var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id',{
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
});
                                        //restaurant's details
foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{          //function and its objects
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id:'1',

	},
  {
		name: 'Gourmet Nine',
		address: '38/39, Level 1, Block A, Connaught Place',
		location: 'Connaught Place',
		category: 'Fine Dining, Bar',
		vote: '4.8',
		cuisines: 'Modern Indian, Italian',
		cost: '1200',
		hours: '11 Noon to 1 AM (Mon-Sun)',
		image: 'download.jpg',
		id: '2',
	},

  {
    name: 'Cafe 4/1',
    address: '4/1, Camac Street, Camac Street Area, Kolkata',
    location: 'Kolkata',
    category: 'Fine Dining, Bar',
    vote: '4.3',
    cuisines: 'North Indian, Cafe, Italian',
    cost: '1600',
    hours: '11 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/5/25605/e3a1252b2e8a901e8751b07ddca3948b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
    id: '3',
  },

  {
    name: 'Silver spoon',
    address: '117/N/64, Kakadeo, Kanpur',
    location: 'Kanpur',
    category: 'Bakery',
    vote: '4.5',
    cuisines: 'Bakery, Fast food',
    cost: '1600',
    hours: ' 9 AM to 10 PM (Mon-Sun)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneLjoC9bzcvISJnz4PyzPZVqeO6qNJeJm2QNy3aNZnBJEpk6chg',
    id: '4',
  },

  {
    name: 'The Holy Tree',
    address: 'B 28-156/29, Guru Gian Vihar, Urban Estate, Dugri, Ludhiana',
    location: 'Ludhiana',
    category: 'Fine Dining, Bar',
    vote: '4.3',
    cuisines: 'Continental, Italian',
    cost: '1000',
    hours: '10 AM to 12 PM (Mon-Sun)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaiUuJB_Ma4v4I40BzDLBJJbnZ2MIoCJjTnjFewHLpaGjufqo',
    id: '5',
  },

	{
		name: 'Urban Cafe',
		address: 'Hyatt Regency, 178, Chandigarh Industrial Area, Chandigarh',
		location: 'Chandigarh',
		category: 'Fine Dining',
		vote: '4.4',
		cuisines: 'North Indian, Continental, British, Chinese',
		cost: '1800',
		hours: '6 AM to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ND0lICYu787deEwC4vk1_kIu_D3RxCLUduiVMrNYnTq9d0m',
		id: '6',
	}


];
})

foodieApp.controller('loginController',function($scope,$location) {

	$scope.goToHome = function() {
		console.log($location.url('home'));
		$location.url('home');
	}

})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id:'1',
		bestDish: {                   //objects inside an object
			name: 'Corn Pizza',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjosWp-cY6nlSqrrbS29NdZushXVWN0Tn8wsBcx1mGkg32Hzu9'
		}
	},

	{
		name: 'Gourmet Nine',
		address: '38/39, Level 1, Block A, Connaught Place',
		location: 'Connaught Place',
		category: 'Fine Dining, Bar',
		vote: '4.8',
		cuisines: 'Modern Indian, Italian',
		cost: '1200',
		hours: '11 Noon to 1 AM (Mon-Sun)',
		image: 'download.jpg',
		id: '2',
		bestDish: {
			name: 'Mutton Biryani',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzSQodqPKkJQDGqwkcBn9L-lUG1U_iowmfbF6spqpmCk6xtKT'
}
		},

    {
      name: 'Cafe 4/1',
      address: '4/1, Camac Street, Camac Street Area, Kolkata',
      location: 'Kolkata',
      category: 'Fine Dining, Bar',
      vote: '4.8',
      cuisines: 'North Indian, Cafe, Italian',
      cost: '1600',
      hours: '11 Noon to 1 AM (Mon-Sun)',
      image: 'https://b.zmtcdn.com/data/pictures/chains/5/25605/e3a1252b2e8a901e8751b07ddca3948b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      id: '3',
      bestDish: {
        name: 'Momos',
        image: 'https://bigbitedotcom.files.wordpress.com/2012/09/3475560859_chicken-momos_11.jpg',
      }
      },


      {
        name: ' Silver spoon',
        address: '117/N/64, Kakadeo, Kanpur',
        location: 'Kanpur',
        category: 'Bakery',
        vote: '4.5',
        cuisines: 'Bakery, Fast food',
        cost: '1600',
        hours: ' 9 AM to 10 PM (Mon-Sun)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneLjoC9bzcvISJnz4PyzPZVqeO6qNJeJm2QNy3aNZnBJEpk6chg',
        id: '4',
        bestDish: {
          name: 'Choco lava cake',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdBmIVjt-2b40kqQEOVQBl6sYu-yoWw0jtolJL1LGZeX2X4clcg',
        }
        },

        {
          name: 'The Holy Tree',
          address: 'B 28-156/29, Guru Gian Vihar, Urban Estate, Dugri, Ludhiana',
          location: 'Ludhiana',
          category: 'Fine Dining, Bar',
          vote: '4.3',
          cuisines: 'Continental, Italian',
          cost: '1000',
          hours: '10 AM to 12 PM (Mon-Sun)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaiUuJB_Ma4v4I40BzDLBJJbnZ2MIoCJjTnjFewHLpaGjufqo',
          id: '5',
          bestDish: {
            name: 'Bread Crostini',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE87uSlYjEAdPmBeeEbKOYeeFJq2UXy79gSE_4W1NMlH2LU4yO',
          }
        },

				{
					name: 'Urban Cafe',
					address: 'Hyatt Regency, 178, Chandigarh Industrial Area, Chandigarh',
					location: 'Chandigarh',
					category: 'Fine Dining',
					vote: '4.4',
					cuisines: 'North Indian, Continental, British, Chinese',
					cost: '1800',
					hours: '6 AM to 11 PM (Mon-Sun)',
					image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ND0lICYu787deEwC4vk1_kIu_D3RxCLUduiVMrNYnTq9d0m',
					id: '6',
					bestDish: {
						name: 'Veg Lasagna',
						image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HEg102NHBTFPkCot5BA-Mn2rcAN-j2yBogr759uQGO4X7VE9',
					}
				},

];
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key b19c326c5f07417ea4aad597ac173c81',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];

		$scope.checkVegorNonVeg = function() {
			var flag_quit =0;
			ing_list = angular.copy($scope.ingredients); //hard copy
			prob_value= $scope.probabilityvalue;
			var elements = prob_value.filter(function(a){return a > 0.85;});
			ing_list.splice(elements.length,20);
			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];
			var additionnonveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' class='vegnonveg' ></div>"
			var additionveg = "<div><img src='http://21425-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2013/05/veg-300x259.jpg' class='vegnonveg' ></div>"

			for(j=0;j<ing_list.length;j++){
				for(i=0;i<nonveg.length;i++){
					if(ing_list[j] == nonveg[i]){
						flag_quit=1;
						break;
					}
				}
			if(flag_quit==1){
				$(".rest-extra").append(additionnonveg);
				break;
			}

		}
		if(flag_quit==0){$(".rest-extra").append(additionveg);}
	}

});
