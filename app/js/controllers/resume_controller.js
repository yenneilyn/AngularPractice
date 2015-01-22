angular.module("app").controller('ResumeController', function($scope) {
	$scope.showAboutMe = false;
	$scope.showLoadUni = false;
	$scope.showLoadComp = false;
	$scope.universities = [];

  $scope.loadResume = function (){
  	$scope.showButtons = true;
  };

  $scope.loadAboutMe = function (){
  	$scope.showAboutMe = true;
 	$scope.showLoadUni = false;
 	$scope.showLoadComp = false;
  	$scope.aboutMe = "Hello, Everyone! I am a developer. I am using angularJs to introduce me to you."
  };

  $scope.loadUni = function (){
  	$scope.showLoadUni= true;
  	$scope.showAboutMe = false;
  	$scope.showLoadComp = false;

  	$scope.universities = [
  	{
  		name: "The Ohio State University",
  		degree: "B.S. Computer and Information Science"
  	},
  	{
  		name: "The University of Staffordshire ",
  		degree: "B.S. Computer in Software Engineering"
  	}
  	]
  };

  $scope.loadComp = function () {
  	$scope.showLoadComp = true;
	$scope.showAboutMe = false;
  	$scope.showLoadUni= false;

  	$scope.companies =[]
  }

});