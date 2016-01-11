app.controller('viewController', function ($scope, $http) {

    $scope.submitId = function () {

        if ($scope.name) {
            $scope.responseData = {
                customerName: "",
                customerComments: "",
                assignedTo: "",
                createdBy: "",
                area: "",
                status: ""
            };

            $http({
                url: "/abc/api/v1/ticketing?customerName=" + $scope.name,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (response) {
                $scope.responseData = response;
            }).error(function () {
                alert("please enter the valid customer name");
            });
        }

        else {
            $('#errorInfoModal').modal('show');
        }

    }


});
