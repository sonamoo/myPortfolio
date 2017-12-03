'use strict';

portfolioApp.controller('modalController',
    function modalController($scope, $uibModalInstance, prj) {
        console.log(prj);
        $scope.project = prj;

});