app.controller('editController', function ($scope, $http) {
    $scope.responseData = {
        customerName: "",
        customerComments: "",
        assignedTo: "",
        createdBy: "",
        area: "",
        status: ""
    };
    $scope.disableSubmitButton = true;

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
                $scope.disableSubmitButton = false;

                $scope.responseData.customerName = response.customerName;
                $scope.responseData.customerComments = response.customerComments;
                $scope.responseData.assignedTo = response.assignedTo;
                $scope.responseData.createdBy = response.createdBy;
                $scope.responseData.area = response.area;
                $scope.responseData.status = response.status;

                console.log($scope.responseData)
            }).error(function () {
                alert("please enter the valid customer name");
            });
        }

        else {
            $('#errorModal').modal('show');
        }

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
            $scope.disableSubmitButton = true;
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
