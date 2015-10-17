'use strict';

angular.module('PCC.Report', [])
        .controller('PCC.ReportCtrl', function($scope, ajaxRequest, $ionicHistory, urlHelper, $ionicPopup) {
            $scope.show = true;
            $scope.show1 = true;
            $scope.showdata=false;
            var self = this;

            self.reportList = function(date) {
                var url = 'json/report.json';

                var promise = ajaxRequest.send(url);
                promise.then(function(data) {
                    console.log(data);
                    $scope.data = data;

                    for (var key in data) {
                        console.log(data[key].length);
                        $scope.report_no = data[key].length;
                        for (var i = 0; i < data[key].length; i++) {
                            console.log(data[key][i]);

                            if (data[key][i].report_status == 'Created') {
                                data[key][i].style = {'background-color': 'gray'};
                            } else if (data[key][i].report_status === "Processing") {
                                data[key][i].style = {'background-color': 'red'};
                            } else if (data[key][i].report_status === "Captured") {
                                data[key][i].style = {'background-color': 'green'};
                            }
                        }

                    }

                });
            };
            self.reportList();

            $scope.previous = function(date) {
                self.reportList(date);
            };
            $scope.next = function(date) {

            };

            var popup = {};
            $scope.search = function() {
                popup = $ionicPopup.show({
                    scope: $scope,
                    templateUrl: 'Report_page/search.html'
                });
            };
            $scope.closepopup = function() {
                popup.close();
            };
            $scope.Move = function(manifest_no, main_data) {
                console.log(manifest_no);
                var data = {manifest_no: manifest_no, MV: main_data};
                urlHelper.openBill_lading(data);
            };
        });