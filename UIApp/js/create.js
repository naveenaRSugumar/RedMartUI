app.controller('createController', function ($scope, $http) {
    $scope.responseData = {
        customerName: "",
        customerComments: "",
        assignedTo: "",
        createdBy: "",
        area: "",
        status: ""
    };
    $scope.callCreateCustomerReportApi = function () {
        console.log($scope.responseData);

        $http({
            url: "/csr/api/v1/ticketing",
            method: 'POST',
            data: $scope.responseData,
            headers: {
                'Content-Type': 'application/json'
            }

        }).success(function (response) {
            alert('Ticket created and id is' + response.id);
            $scope.responseData = {
                customerName: "",
                customerComments: "",
                assignedTo: "",
                createdBy: "",
                area: "",
                status: ""
            };
        });
    };
});
