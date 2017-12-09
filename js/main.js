'use strict';
var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'ngAnimate']);

portfolioApp.controller('mainController',
    function mainController($scope, $uibModal, $document) {

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
        const projects = [
            {
                "id":0,
                "name": "Pic-A-Vibe",
                "description": "This web app won 3rd coolest prize at Demonhacks from Capital One. This app let users search image and provide sounds of the objects that are present in the photo. I created the server with NodeJS/Express and worked on some Javascript that work with api calls.",
                "img": "src/pickavibe.png",
                "tech": ["Javascript", "AngularJS","NodeJS", "Web"],
                "event": ["DemonHacks"],
                "team": ["Javier Gonzalez", "Jun Lee", "Seho Lim(Me)", "Raul Telbisz" ],
                "team_links": {
                    "Javier Gonzalez": "#",
                    "Jun Lee": "https://www.linkedin.com/in/junlee91/",
                    "Seho Lim" : "https://www.linkedin.com/in/ericlimchicago/",
                    "Raul Telbisz": "https://www.linkedin.com/in/raul-telbisz/"

                },
                "job_description": "During the hackathon, I built the server with NodeJS and Express to interact with the Clearfai API and Bing Image Search API. I also worked on some Angularjs that interact with API calls.",
                "links": {
                    "github": "https://github.com/sonamoo/pic-a-vibe",
                    "proj": "https://obscure-falls-61182.herokuapp.com/"
                }
            },

            {
                "id":1,
                "name": "College Cookie",
                "description": "Social app created during Wildhacks in 36hrs. This app help students to eat lunch together by introducing people who have similar lunch time. Twillio's text messaging API is used to let users to contact other students.",
                "img": "src/collegeCookie.png",
                "tech": ["Python", "Flask", "Web"],
                "event": ["WildHacks"],
                "team": ["Jorge Barrios", "Seho Lim(Me)", "Jennifer Nguyen", "Elona Selenica"],
                "team_links": {
                    "Jorge Barrios": "https://www.linkedin.com/in/jorge-barrios/",
                    "Seho Lim" : "https://www.linkedin.com/in/ericlimchicago/",
                    "Jennifer Nguyen": "https://www.linkedin.com/in/jennifer-nguyen-607b71126/",
                    "Elona Selenica": "https://www.linkedin.com/in/elona-selenica-b787a114a/"
                },
                "job_description": "I taught the basic of git, github, python, javascript and how the web technology such as html, css, Ajax call, and database work. I designed the server, database schema and an algorithm that find overlapping lunch schedule. I also worked on the front-end code that displays the users that are available for lunch.",
                "links": {
                    "github": "https://github.com/sonamoo/don-tEatLunchAlone",
                    "proj": "https://devpost.com/software/college-cookie"
                }
            },

            {
                "id":2,
                "name": "Artsy Places Finder",
                "description": "This web-app finds 15 Foursquare's recommended places in art category near the input address. Users can search any place with help of Google's address auto complete API and Google Map API to browse any art related venues such as museums, galleries, and theaters, etc.",
                "img": "src/artsyplacesfinder.png",
                "tech": ["Javascript","KnockoutJS", "Web"],
                "event": [],
                "job_description": "I built the Single Page Application using knockoutJS, Google Map API and Foursquare API.",
                "links": {
                    "github": "https://github.com/sonamoo/artsyPlacesFinder",
                    "proj": "https://sonamoo.github.io/artsyPlacesFinder/"
                }
            },

            {
                "id":3,
                "name": "Collective Flashcard",
                "description": "This Flask application helps people to create collective flashcards and learn things efficiently. Users can create courses and participate in creating more flashcards to every courses. Google Login API is used for registering and login.",
                "img": "src/collectiveflashcard.png",
                "tech": ["Javascript", "Python","Flask", "Web"],
                "event": [],
                "job_description": "I built Full-Stack Web app from scratch using Python Flask, Jinja Template, and PostgreSQL to build relational database. Google Login API is used for user identification and authorization. This app is deployed in AWS as EC2 ubuntu instance using Apache server.",
                "links": {
                    "github": "https://github.com/sonamoo/FlashcardAppUbuntu",
                    "proj": "http://ec2-13-59-188-21.us-east-2.compute.amazonaws.com/"
                }
            },

            {
                "id":4,
                "name": "Log Analysis",
                "description": "This python DB-API analyses large database with over a million rows. API analyses the top three most viewed articles four authors, and the day that ad more than 1 % of HTTP request errors.",
                "img": "src/loganalysis.png",
                "tech": ["Python", "DB-API", "Data-Analysis"],
                "event": [],
                "job_description": "I built the python program that pulls of the data from the PostgreSQL database and analyse information. I wrote SQL in order to create join tables, and pull off the certain data.",
                "links": {
                    "github": "https://github.com/sonamoo/logAnalysis",
                    "proj": ""
                }
            },

            {
                "id":5,
                "name": "Ares Automation",
                "description": "I created this static website for my local client who is a sales representative for industrial machinery.",
                "img": "src/aresautomation.png",
                "tech": ["Web"],
                "event": [],
                "job_description": "I created this static website for my client. I designed the website and made the website responsive.",
                "links": {
                    "github": "",
                    "proj": "http://aresautomation.com/"
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
        };

        $scope.is_hackathon = function(p) {
            console.log(p);
        };

        $scope.mouseOverOnProj = false;
        $scope.see_project = function(p) {
            console.log(p);
            $scope.mouseOverOnProj = true;
        };

        $scope.filteredProjects = {
            "filtered": [],
            "isUserFiltering": true
        };

        $scope.filteredProjects.filtered = projects;

        $scope.toggleFiltering = function() {

            if ($scope.filteredProjects.isUserFiltering === true) {
                $scope.filteredProjects.isUserFiltering = false;
            } else {
                $scope.filteredProjects.isUserFiltering = true;
            }
        };

        var pushProject = function(p) {
            console.log(p);
            var lenOfFilteredProjects = $scope.filteredProjects.filtered.length;
            if (lenOfFilteredProjects === 0) {
                console.log("Push the project");
                $scope.filteredProjects.filtered.push(p);
                //$scope.$apply();
                return;
            }
            for(var i=0; i < lenOfFilteredProjects; i++) {
                if(p["id"] === $scope.filteredProjects.filtered[i].id) {
                    console.log("There is already the same project");
                    return;
                }

            }
            console.log("Push the project");
            $scope.filteredProjects.filtered.push(p);
        };

        $scope.searchProjectsByKeywords = function() {
            console.log("searching start");
            if ($scope.filteredProjects.isUserFiltering === false) {
                return 0;
            }
            // empty the project.
            $scope.filteredProjects.filtered = [];
            var numOfProjects = projects.length;
            var numOfTechs = 0;
            for(var i = 0; i < numOfProjects; i++) {
                numOfTechs = projects[i].tech.length;
                var project = projects[i];
                for(var j = 0; j < numOfTechs; j++) {

                    var numOfLangs = $scope.filterObj.langs.length;
                    var numOfTypes = $scope.filterObj.types.length;
                    var numOfEvents = $scope.filterObj.events.length;
                    //loop through langs
                    for(var l = 0; l < numOfLangs; l++) {
                        if(project.tech[j] === $scope.filterObj.langs[l]) {
                            pushProject(projects[i]);
                        }
                        console.log($scope.filterObj.langs[l]);
                    }
                    //loop through types
                    for(var t = 0; t < numOfTypes; t++) {
                        if(project.tech[j] === $scope.filterObj.types[t]) {
                            pushProject(projects[i]);
                        }
                        console.log($scope.filterObj.types[t]);
                    }
                    //loop through events
                    for(var e = 0; e < numOfEvents; e++) {
                        if(project.tech[j] === $scope.filterObj.events[e]) {
                            pushProject(projects[i]);
                        }
                        console.log($scope.filterObj.events[e]);
                    }
                }
            }

            console.log($scope.filteredProjects.filtered.length);
            if ($scope.filteredProjects.filtered.length === 0) {
                $scope.filteredProjects.filtered = projects;
                console.log("sdfsdfasdf")
            }
        };

        $scope.projectClickedHandler = function(p) {
            var modalInstance = $uibModal.open(
                {
                    templateUrl: './project-modal.html',
                    controller: 'modalController',
                    size: 'md',

                    resolve: {
                        prj: function() {
                            return p;
                        }
                    }

                });


            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    });