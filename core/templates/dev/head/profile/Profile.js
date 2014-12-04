// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Data and controllers for the Oppia profile page.
 *
 * @author sfederwisch@google.com (Stephanie Federwisch)
 */

oppia.controller('Profile', ['$scope', '$http', '$rootScope', function(
    $scope, $http, $rootScope) {
  $scope.profileDataUrl = '/profilehandler/data';
  $rootScope.loadingMessage = 'Loading';

  // Retrieves profile data from the server.
  $http.get($scope.profileDataUrl).success(function(data) {
    $scope.ALL_LANGUAGE_CODES = data.ALL_LANGUAGE_CODES;
    $scope.preferredLanguageCode = data.preferred_language_code;
    $rootScope.loadingMessage = '';
  });

  $scope.savePreferredLanguageCode = function() {
    $http.post($scope.profileDataUrl, {
      preferred_language_code: $scope.preferredLanguageCode
    });
  };
}]);
