'use strict';
var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'ngAnimate']);

portfolioApp.controller('mainController',
    function mainController($scope, $uibModal, $document) {

        $scope.profile = {
            "firstName" : "Seho",
            "lastName" : "Lim"
        };
        let langs = [];
        $scope.languages =
            [
                {"lang_id": 0, "lang": "Python", "filter": false},
                {"lang_id": 1, "lang": "Javascript", "filter": false},
                {"lang_id": 3, "lang": "Flask", "filter": false},
                {"lang_id": 4, "lang": "AngularJS", "filter": false},
                {"lang_id": 5, "lang": "NodeJS", "filter": false},
                {"lang_id": 6, "lang": "KnockoutJS", "filter": false},
                {"lang_id": 7, "lang": "ReactJS", "filter": false},
                {"lang_id": 8, "lang": "React Native", "filter": false}
            ];
        $scope.types= [
            {"type_id": 0, "type": "Web", "filter": false},
            {"type_id": 1, "type": "DB-API", "filter": false},
            {"type_id": 2, "type": "Data Analysis", "filter": false},
            {"type_id": 3, "type": "Mobile", "filter": false}
        ];
        $scope.events = [
            {"event_id": 0, "event": "DemonHacks", "filter": false},
            {"event_id": 1, "event": "WildHacks", "filter": false},
            {"event_id": 2, "event": "HackIllinois", "filter": false},

        ];
        $scope.filterObj = {
            "langs" : [],
            "types": [],
            "events": []
        };
        const projects = [
            {
                "id":0,
                "name": "CareerTalk",
                "description": "This app is currently available in App Store and Google Play. This iOS and Android app help job seekers navigating career fairs.",
                "img": "src/splash.png",
                "lang": ["Javascript", "Python","Flask", "ReactJS", "React Native"],
                "type": ["Mobile"],
                "event": [],
                "team": ["Jun Lee", "Seho Lim"],
                "team_links": {
                    "Jun Lee": "https://www.linkedin.com/in/junlee91/",
                    "Seho Lim" : "https://www.linkedin.com/in/ericlimchicago/"
                },
                "job_description": "I create RESTfulAPI to provide career fairs and companies data, and deployed the database on AWS. I am also in charge of react native UI development.",
                "links": {
                    "github": "https://github.com/CreativeSolutionLabs/CareerTalk",
                    "proj": "https://itunes.apple.com/us/app/careertalk-find-your-jobs/id1435448112?mt=8CareerTalk"
                }
            },
            {
                "id":1,
                "name": "SmartCards",
                "description": "This React Native mobile app translates the user's text input into the language that the user wants to learn. It helps user learning new vocabulary fast by showing the image of the text.",
                "img": "src/smartcard.png",
                "lang": ["Javascript", "Python","Flask", "ReactJS"],
                "type": ["Mobile"],
                "event": ["HackIllinois"],
                "team": ["Alan Jin", "Anas Tlemet", "Hassan Murtaza", "Jun Lee", "Seho Lim(Me)", "Zhiwei Zhang"],
                "team_links": {
                    "Alan Jin": "https://www.linkedin.com/in/alanxjin/",
                    "Jun Lee": "https://www.linkedin.com/in/junlee91/",
                    "Anas Tlemet": "https://www.linkedin.com/in/anas-tlemat/",
                    "Seho Lim" : "https://www.linkedin.com/in/ericlimchicago/",
                    "Hassan Murtaza": "https://www.linkedin.com/in/hmurtaza/"

                },
                "job_description": "During the hackathon, I built the server with Flask. Created router and handlers to process the http requests. The server also interact with Bing Image Search API and Google Translate API",
                "links": {
                    "github": "https://github.com/junlee91/react-native-flash-card",
                    "proj": "https://devpost.com/software/smartcards"
                }
            },

            {
                "id":2,
                "name": "Pic-A-Vibe",
                "description": "This web app won 3rd coolest prize at Demonhacks from Capital One. This app let users search image and provide sounds of the objects that are present in the photo. I created the server with NodeJS/Express and worked on some Javascript that work with api calls.",
                "img": "src/pickavibe.png",
                "lang": ["Javascript", "AngularJS","NodeJS"],
                "type": ["Web"],
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
                "id":3,
                "name": "College Cookie",
                "description": "Social app created during Wildhacks in 36hrs. This app help students to eat lunch together by introducing people who have similar lunch time. Twillio's text messaging API is used to let users to contact other students.",
                "img": "src/collegeCookie.png",
                "lang": ["Python", "Flask"],
                "type": ["Web"],
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
                "id":4,
                "name": "Artsy Places Finder",
                "description": "This web-app finds 15 Foursquare's recommended places in art category near the input address. Users can search any place with help of Google's address auto complete API and Google Map API to browse any art related venues such as museums, galleries, and theaters, etc.",
                "img": "src/artsyplacesfinder.png",
                "lang": ["Javascript","KnockoutJS"],
                "type": ["Web"],
                "event": [],
                "job_description": "I built the Single Page Application using knockoutJS, Google Map API and Foursquare API.",
                "links": {
                    "github": "https://github.com/sonamoo/artsyPlacesFinder",
                    "proj": "https://sonamoo.github.io/artsyPlacesFinder/"
                }
            },

            {
                "id":5,
                "name": "Collective Flashcard",
                "description": "This Flask application helps people to create collective flashcards and learn things efficiently. Users can create courses and participate in creating more flashcards to every courses. Google Login API is used for registering and login.",
                "img": "src/collectiveflashcard.png",
                "lang": ["Javascript", "Python","Flask"],
                "type": ["Web"],
                "event": [],
                "job_description": "I built Full-Stack Web app from scratch using Python Flask, Jinja Template, and PostgreSQL to build relational database. Google Login API is used for user identification and authorization. This app is deployed in AWS as EC2 ubuntu instance using Apache server.",
                "links": {
                    "github": "https://github.com/sonamoo/FlashcardAppUbuntu",
                    "proj": "http://ec2-13-59-188-21.us-east-2.compute.amazonaws.com/"
                }
            },

            {
                "id":6,
                "name": "Log Analysis",
                "description": "This python DB-API analyses large database with over a million rows. API analyses the top three most viewed articles four authors, and the day that ad more than 1 % of HTTP request errors.",
                "img": "src/loganalysis.png",
                "lang": ["Python", "DB-API", "Data-Analysis", "Database"],
                "type": ["DB-API"],
                "event": [],
                "job_description": "I built the python program that pulls of the data from the PostgreSQL database and analyse information. I wrote SQL in order to create join tables, and pull off the certain data.",
                "links": {
                    "github": "https://github.com/sonamoo/logAnalysis",
                    "proj": ""
                }
            },

            {
                "id":7,
                "name": "Ares Automation",
                "description": "I created this static website for my local client who is a sales representative for industrial machinery.",
                "img": "src/aresautomation.png",
                "lang": ["Web"],
                "type": ["Web"],
                "event": [],
                "job_description": "I created this static website for my client. I designed the website and made the website responsive.",
                "links": {
                    "github": "",
                    "proj": "http://aresautomation.com/"
                }
            }
        ];

        $scope.filteredProjects = {
            "filtered": [],
            "isUserFiltering": true
        };

        $scope.filteredProjects.filtered = projects;

        function isUserFiltering() {
            if($scope.filterObj["langs"].length === 0 
                && $scope.filterObj["types"].length === 0
                && $scope.filterObj["events"].length === 0) {
                // console.log('hi1');
                $scope.filteredProjects.isUserFiltering = false;
                $scope.filteredProjects.filtered.push(projects[1]);
            }
        }


        $scope.langFilter = function(a, index){
            // console.log(index);
            // console.log("Clicked " + a);
            if($scope.filterObj["langs"].indexOf(a) === -1) {
                $scope.filterObj["langs"].push(a);
                $scope.filteredProjects.isUserFiltering = true;
                $scope.languages[index].filter = true;
            }
            else {
                var idx = $scope.filterObj["langs"].indexOf(a);
                $scope.languages[index].filter = false;
                $scope.filterObj["langs"].splice(idx, 1);
            }

            isUserFiltering();
        };


        $scope.typeFilter = function(t, index) {
            // console.log(index);
            // console.log("Clicked " + t);

            if($scope.filterObj["types"].indexOf(t) === -1) {
                $scope.filterObj["types"].push(t);
                $scope.filteredProjects.isUserFiltering = true;
                $scope.types[index].filter = true;
            }
            else {
                var idx = $scope.filterObj["types"].indexOf(t);
                $scope.types[index].filter = false;
                $scope.filterObj["types"].splice(idx, 1);
            }

            isUserFiltering();
        };

        $scope.eventFilter = function(e, index) {
            
            if($scope.filterObj["events"].indexOf(e) === -1) {
                $scope.filterObj["events"].push(e);
                $scope.events[index].filter = true;
                $scope.filteredProjects.isUserFiltering = true;
            }
            else {
                var idx = $scope.filterObj["events"].indexOf(e);
                $scope.events[index].filter = false;
                $scope.filterObj["events"].splice(idx, 1);
            }

            isUserFiltering();
        };

        $scope.is_hackathon = function(p) {
            // console.log(p);
        };

        $scope.mouseOverOnProj = false;
        $scope.see_project = function(p) {
            // console.log(p);
            $scope.mouseOverOnProj = true;
        };

        

        $scope.toggleFiltering = function() {
            // console.log('toggle filtering');
            if ($scope.filteredProjects.isUserFiltering === true) {
                $scope.filteredProjects.isUserFiltering = false;

            } else {
                $scope.filteredProjects.isUserFiltering = true;
            }
        };

        var pushProject = function(p) {
            // console.log(p);
            var lenOfFilteredProjects = $scope.filteredProjects.filtered.length;
            if (lenOfFilteredProjects === 0) {
                // console.log("Push the project");
                $scope.filteredProjects.filtered.push(p);
                //$scope.$apply();
                return;
            }
            for(var i=0; i < lenOfFilteredProjects; i++) {
                if(p["id"] === $scope.filteredProjects.filtered[i].id) {
                    //console.log("There is already the same project");
                    return;
                }

            }
            $scope.filteredProjects.filtered.push(p);
        };


        $scope.searchProjectsByKeywords = function() {
            if ($scope.filteredProjects.isUserFiltering === false) {
                //console.log('user is not toggling');
                $scope.filteredProjects.filtered = projects;
                return 0;
            }
            // Empty the projects in the list.
            $scope.filteredProjects.filtered = [];
            var numOfProjects = projects.length;
            var numOfFilteredLangs = $scope.filterObj.langs.length;
            var numOfFilteredTypes =  $scope.filterObj.types.length;
            var numOfFilteredEvents = $scope.filterObj.events.length;
            for(var i = 0; i < numOfProjects; i++) {
                // Loop through all the projects
                var project = projects[i];
                var prjLangLength = project["lang"].length;

                for(var j = 0; j < prjLangLength; j++) {
                    for(var l=0; l < $scope.filterObj.langs.length; l++){
                        if(project.lang[j] === $scope.filterObj.langs[l]) {
                            pushProject(projects[i]);
                        }
                        //console.log($scope.filterObj.langs[l]);

                    }
                }

                var prjTypeLength = project["type"].length;
                for(var j = 0; j < prjTypeLength; j++) {
                    for(var l=0; l < $scope.filterObj.types.length; l++){
                        if(project.type[j] === $scope.filterObj.types[l]) {
                            pushProject(projects[i]);
                            break;
                        }
                        //console.log($scope.filterObj.langs[l]);
                    }
                }

                var prjEventLength = project["event"].length;
                for(var j = 0; j < prjEventLength; j++) {
                    for(var l=0; l < $scope.filterObj.events.length; l++){
                        if(project.event[j] === $scope.filterObj.events[l]) {
                            pushProject(projects[i]);
                            break;
                        }
                        //console.log($scope.filterObj.langs[l]);
                    }
                }

            }
        }


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
                // console.log('Modal dismissed at: ' + new Date());
            });
        };
    });