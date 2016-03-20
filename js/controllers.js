espaApp.controller('mikromesaiesCtrl', function ($scope, $http,helpers) {

 helpers.toggleActiveTab("mikromesaies");
});

espaApp.controller('neofueisCtrl', function ($scope, $http,helpers) {
$scope.minA1=0,$scope.maxA1=0,$scope.A2=0,$scope.A3=0,$scope.A4=0,$scope.A5=0,$scope.A6=0,$scope.A7=0;
$scope.B1=0,$scope.B2=0,$scope.B3=0;
$scope.G1=0,$scope.G2=0,$scope.G3=0,$scope.G4=0;
$scope.D1=0,$scope.D2=0;
$scope.E1=0,$scope.E2=0,$scope.minE3=0,$scope.maxE3=0,$scope.E4=0;


$scope.changeA1 = function(selectA1){$scope.minA1=helpers.changeValueRange(selectA1,"min");$scope.maxA1=helpers.changeValueRange(selectA1,"max");}//range
$scope.changeA2 = function(selectA2){$scope.A2=helpers.changeValue(selectA2);}
$scope.changeA3 = function(selectA3){$scope.A3=helpers.changeValue(selectA3);}
$scope.changeA4 = function(selectA4){$scope.A4=helpers.changeValue(selectA4);}
$scope.changeA5 = function(selectA5){$scope.A5=helpers.changeValue(selectA5);}
$scope.changeA6 = function(selectA6){$scope.A6=helpers.changeValue(selectA6);}
$scope.changeA7 = function(selectA7){$scope.A7=helpers.changeValue(selectA7);}
$scope.changeB1 = function(selectB1){$scope.B1=helpers.changeValue(selectB1);}
$scope.changeB2 = function(selectB2){$scope.B2=helpers.changeValue(selectB2);}
$scope.changeB3 = function(selectB3){$scope.B3=helpers.changeValue(selectB3);}
$scope.changeG1 = function(selectG1){$scope.G1=helpers.changeValue(selectG1);}
$scope.changeG2 = function(selectG2){$scope.G2=helpers.changeValue(selectG2);}
$scope.changeG3 = function(selectG3){$scope.G3=helpers.changeValue(selectG3);}
$scope.changeG4 = function(selectG4){$scope.G4=helpers.changeValue(selectG4);}
$scope.changeD1 = function(selectD1){$scope.D1=helpers.changeValue(selectD1);}
$scope.changeD2 = function(selectD2){$scope.D2=helpers.changeValue(selectD2);}
$scope.changeE1 = function(selectE1){$scope.E1=helpers.changeValue(selectE1);}
$scope.changeE2 = function(selectE2){$scope.E2=helpers.changeValue(selectE2);}
$scope.changeE3 = function(selectE3){$scope.minE3=helpers.changeValueRange(selectE3,"min");$scope.maxE3=helpers.changeValueRange(selectE3,"max");}//range
$scope.changeE4 = function(selectE4){$scope.E4=helpers.changeValue(selectE4);}

$scope.minResultA=function(){return (parseInt($scope.minA1,10)*20/100+parseInt($scope.A2,10)*25/100+parseInt($scope.A3,10)*25/100+parseInt($scope.A4,10)*5/100+parseInt($scope.A5,10)*10/100+parseInt($scope.A6,10)*10/100+parseInt($scope.A7,10)*5/100)*10;}
$scope.maxResultA=function(){return (parseInt($scope.maxA1,10)*20/100+parseInt($scope.A2,10)*25/100+parseInt($scope.A3,10)*25/100+parseInt($scope.A4,10)*5/100+parseInt($scope.A5,10)*10/100+parseInt($scope.A6,10)*10/100+parseInt($scope.A7,10)*5/100)*10;}
$scope.resultB=function(){return (parseInt($scope.B1,10)*30/100+parseInt($scope.B2,10)*20/100+parseInt($scope.B3,10)*50/100)*10;}
$scope.resultG=function(){return (parseInt($scope.G1,10)*30/100+parseInt($scope.G2,10)*30/100+parseInt($scope.G3,10)*10/100+parseInt($scope.G4,10)*30/100)*10;}
$scope.resultD=function(){return (parseInt($scope.D1,10)*30/100+parseInt($scope.D2,10)*70/100)*10;
console.log($scope.resultD);}
$scope.minResultE=function(){return (parseInt($scope.E1,10)*15/100+parseInt($scope.E2,10)*25/100+parseInt($scope.minE3,10)*10/100+parseInt($scope.E4,10)*50/100)*10;}
$scope.maxResultE=function(){return (parseInt($scope.E1,10)*15/100+parseInt($scope.E2,10)*25/100+parseInt($scope.maxE3,10)*10/100+parseInt($scope.E4,10)*50/100)*10;}
$scope.resultFinalMin=function(){return parseInt($scope.minResultA(),10)*25/100+parseInt($scope.resultB(),10)*15/100+parseInt($scope.resultG(),10)*25/100+parseInt($scope.resultD(),10)*10/100+parseInt($scope.minResultE(),10)*25/100||0;}
$scope.resultFinalMax=function(){return parseInt($scope.maxResultA(),10)*25/100+parseInt($scope.resultB(),10)*15/100+parseInt($scope.resultG(),10)*25/100+parseInt($scope.resultD(),10)*10/100+parseInt($scope.maxResultE(),10)*25/100||0;}



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