var app = angular.module('myApp', []);


app.config(function ($provide) {
    // Here we tell Angular that instead of the "real" $httpBackend, we want it
    // to use our mock backend
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
})
    .run(function ($httpBackend) {

        $httpBackend.whenPOST("/csr/api/v1/ticketing")
            .respond(200, {id: "123123123"});

        var regex = new RegExp("/abc/api/v1/ticketing*");

        $httpBackend.whenGET(regex)
            .respond(200, {
                customerName: "Navee",
                customerComments: "Good",
                assignedTo: "Naveena",
                createdBy: "Kumar",
                area: "Support",
                status: "Create"
            });
    });