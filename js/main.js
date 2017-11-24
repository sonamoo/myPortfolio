'use strict';
var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('mainController',
    function mainController($scope) {

        $scope.profile = {
            "firstName" : "Seho",
            "lastName" : "Lim"
        };

        const langs = [];
        $scope.languages =
            [
                {"lang_id": 0, "lang": "Python", "filter": false},
                {"lang_id": 1, "lang": "Javascript", "filter": false},
                {"lang_id": 3, "lang": "Flask", "filter": false},
                {"lang_id": 4, "lang": "AngularJS", "filter": false},
                {"lang_id": 5, "lang": "NodeJS", "filter": false},
                {"lang_id": 6, "lang": "KnockoutJS", "filter": false}
            ];

        $scope.types= ["Web", "DB-API", "Data Analysis"];
        $scope.events = ["DemonHacks", "WildHacks"];

        $scope.filterObj = {
            "lang" : [],
            "types": [],
            "events": []
        };

        $scope.langFilter = function(a, index){
            console.log(index);
            console.log("Clicked " + a);
            if($scope.filterObj["lang"].indexOf(a) === -1) {
                $scope.filterObj["lang"].push(a);
                $scope.languages[index].filter = true;
            }
            else {
                $scope.languages[index].filter = false;
                $scope.filterObj["lang"].splice(index, 1);
            }

            console.log($scope.filterObj.lang);

        };
    });