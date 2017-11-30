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
        $scope.types= [
            {"type_id": 0, "type": "Web", "filter": false},
            {"type_id": 1, "type": "DB-API", "filter": false},
            {"type_id": 2, "type": "Data Analysis", "filter": false}
        ];
        $scope.events = [
            {"event_id": 0, "event": "DemonHacks", "filter": false},
            {"event_id": 1, "event": "WildHacks", "filter": false}
        ];
        $scope.filterObj = {
            "langs" : [],
            "types": [],
            "events": []
        };
        $scope.projects = [
            {
                "name": "Pic-A-Vibe",
                "description": "This web app won 3rd coolest prize at Demonhacks from Capital One. I created a server with NodeJS and worked on some Javascript that work with api calls",
                "img": "src/pickavibe.png",
                "tech": ["Javascript", "AngularJS","NodeJS", "Web"],
                "event": ["DemonHacks"],
                "links": {
                    "github": "https://github.com/sonamoo/pic-a-vibe",
                    "proj": "https://obscure-falls-61182.herokuapp.com/"
                }
            },

            {
                "name": "College Cookie",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "img": "src/collegecookie.png",
                "tech": ["Python", "Flask", "Web"],
                "event": ["WildHacks"],
                "links": {
                    "github": "https://github.com/sonamoo/don-tEatLunchAlone",
                    "proj": "https://devpost.com/software/college-cookie"
                }
            },

            {
                "name": "Artsy Places Finder",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "img": "src/artsyplacesfinder.png",
                "tech": ["KnockoutJS", "Web"],
                "event": [],
                "links": {
                    "github": "https://github.com/sonamoo/artsyPlacesFinder",
                    "proj": "https://sonamoo.github.io/artsyPlacesFinder/"
                }
            },

            {
                "name": "Collective Flashcard",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "img": "src/collectiveflashcard.png",
                "tech": ["Javascript", "Python","Flask", "Web"],
                "event": [],
                "links": {
                    "github": "https://github.com/sonamoo/FlashcardAppUbuntu",
                    "proj": "http://ec2-13-59-188-21.us-east-2.compute.amazonaws.com/"
                }
            },

            {
                "name": "Log Analysis",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "img": "src/loganalysis.png",
                "tech": ["Python", "DB-API", "Data-Analysis"],
                "event": [],
                "links": {
                    "github": "https://github.com/sonamoo/pic-a-vibe",
                    "proj": "https://obscure-falls-61182.herokuapp.com/"
                }
            },

            {
                "name": "Ares Automation",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "img": "src/aresautomation.png",
                "tech": ["Web"],
                "event": [],
                "links": {
                    "github": "https://github.com/sonamoo/pic-a-vibe",
                    "proj": "https://obscure-falls-61182.herokuapp.com/"
                }
            }
        ];

        $scope.langFilter = function(a, index){
            console.log(index);
            console.log("Clicked " + a);
            if($scope.filterObj["langs"].indexOf(a) === -1) {
                $scope.filterObj["langs"].push(a);
                $scope.languages[index].filter = true;
            }
            else {
                var idx = $scope.filterObj["langs"].indexOf(a);
                $scope.languages[index].filter = false;
                $scope.filterObj["langs"].splice(idx, 1);
            }
            console.log("-----------------filter-------------");
            console.log($scope.filterObj["langs"]);
            console.log($scope.filterObj["types"]);
            console.log($scope.filterObj["events"]);

        };


        $scope.typeFilter = function(t, index) {
            console.log(index);
            console.log("Clicked " + t);

            if($scope.filterObj["types"].indexOf(t) === -1) {
                $scope.filterObj["types"].push(t);
                $scope.types[index].filter = true;
            }
            else {
                var idx = $scope.filterObj["types"].indexOf(t);
                $scope.types[index].filter = false;
                $scope.filterObj["types"].splice(idx, 1);
            }
            console.log("-----------------filter-------------");
            console.log($scope.filterObj["langs"]);
            console.log($scope.filterObj["types"]);
            console.log($scope.filterObj["events"]);

        };

        $scope.eventFilter = function(e, index) {
            console.log(index);
            console.log("Clicked " + e);

            if($scope.filterObj["events"].indexOf(e) === -1) {
                $scope.filterObj["events"].push(e);
                $scope.events[index].filter = true;
            }
            else {
                var idx = $scope.filterObj["events"].indexOf(e);
                $scope.events[index].filter = false;
                $scope.filterObj["events"].splice(idx, 1);
            }
            console.log("-----------------filter-------------");
            console.log($scope.filterObj["langs"]);
            console.log($scope.filterObj["types"]);
            console.log($scope.filterObj["events"]);
        };

        $scope.is_hackathon = function(p) {
            console.log(p);
        };

        $scope.mouseOverOnProj = false;
        $scope.see_project = function(p) {
            console.log(p);
            $scope.mouseOverOnProj = true;

        };

    });


var see_project = function() {
    console.log();
    console.log("sdf");
};