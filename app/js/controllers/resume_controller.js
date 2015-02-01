angular.module("app").controller('ResumeController', function($scope, $modal, $location) {
  $scope.formNotValid = true;

  $scope.validateEmail = function() {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var b = emailRegex.test($scope.user.email);
    if(b == true) {
      $scope.formNotValid = false;
    }
   }

   $scope.open = function() {
   	var modalInstance = $modal.open({
   		templateUrl: 'myResume.html',
   		controller: 'resumeModalController'
   	});
   }

});

angular.module("app").controller('resumeModalController', function($scope, $modalInstance){
  $scope.universities =[{
    name: 'The Ohio State University',
    degree: 'B.S. Computer and Information Science',
    duration: 'March 2011 - December 2013'
  },
  {
    name: 'The University of Staffordshire',
    degree: 'B.S. Computer in Software Engineering',
    duration: 'March 2010'
  }]
  $scope.companies = [{
    id: 1,
    name : 'FactGem LLC',
    position: 'Junior Software Developer',
    duration : 'March 2014 - January 2015',
    duties : ["Using Groovy on Grails to build an API",
              "Using SQL to query database",
              "Using AngularJS to build a client application",
              "Using Spring Security to secure the API",
              "Building visualizations using D3.js Library",
              "Writing unit tests and integration tests for Angular.js",
              "Writing unit tests and integration tests for Groovy on Grails using Spock Framework"
              ]
  },
  {
    id: 2,
    name : 'Ohio Department of Transportation',
    position : 'Intern',
    duration : 'November 2012 - December 2013',
    duties : ["Assisted in network device configuration, installation, monitoring, and troubleshooting",
              "Assisted with running the network operations center to help other IT departments and users with network and security related issues.",
              "Assisted in database upgrade for circuit inventory program",
              "Creating and managing DHCP reservations",
              "Adding and removing DNS entries",
              "Answering phone calls and creating and resolving incidents through a ticketing system (magic)",
              "Testing layer one connections between routers (pinging & clear interfaces on the routers)",
              "Updating images on routers and switches inventory",
              "Testing reportedly defective devices and determining whether they are operational",
              "Updating information about devices using Sharepoint",
              "Gathering information about devices and presenting it using excel spreadsheets",
              "Updating database of routers’ interfaces",
              "Assisted in connections trace and interface database project for datacenter migration"
              ]
  },
  {
    id: 3,
    name : 'Epromode Sdn. Bhd.',
    position : 'Brand Ambassador',
    duration : 'November 2010 - January 2011',
    duties : ["Assisted the Human Resource Manager in daily tasks such as recruiting new employees",
              "Preparing minutes of meetings",
              "Updating employees’ personal details into computer system",
              "Preparing ISO documentations for auditor",
              ]
  },
  {
    id: 4,
    name : 'Whitex Garments Sdn. Bhd. ',
    position : 'Intern',
    duration : 'December 2008 - March 2009',
    duties : ["Prepared weekly and monthly sales reports",
              "Recommended and sold new products to customers"
              ]
  }]

  $scope.loadDetails = function (id) {
    var index = id - 1;
    $scope.hide = !$scope.hide;

    $scope.selectedCompany = $scope.companies[index];
  }

  $scope.ok = function() {
    $modalInstance.dismiss('cancel');
  }

});