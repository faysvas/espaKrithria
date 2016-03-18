espaApp.controller('mikromesaiesCtrl', function ($scope, $http,helpers) {

 helpers.toggleActiveTab("mikromesaies");
});

espaApp.controller('neofueisCtrl', function ($scope, $http,helpers) {
$scope.changeA1 = function(selectA1) {
    console.log(mySelect);
}
  helpers.toggleActiveTab("neofueis");
});

espaApp.controller('ptuxiouxoiCtrl', function ($scope, $http,helpers) {

  helpers.toggleActiveTab("ptuxiouxoi");
});


espaApp.controller('touristikesCtrl', function ($scope, $http,helpers) {

 helpers.toggleActiveTab("touristikes");
});

espaApp.controller('helpCtrl', function (helpers) {

 helpers.toggleActiveTab("help");
});