// Copyright 2018 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Stores data about the current interaction
 * and the learner's current answer input to that interaction.
 */

oppia.factory('CurrentAnswerService', [
  function() {
    var _currentAnswerData;
    var _validityCheckFn;
    var _rulesService;

    return {
      init: function(rulesService, validityCheckFn) {
        /**
         * Interactions that consume this service are
         * expected to bind to and update the
         * _currentAnswerData.answer property.
         */
        _currentAnswerData = {answer: null};
        _validityCheckFn = validityCheckFn;
        _rulesService = rulesService;
        return _currentAnswerData;
      },
      getCurrentAnswer: function() {
        return _currentAnswerData.answer;
      },
      getValidityCheckFn: function() {
        return _validityCheckFn;
      },
      getRulesService: function() {
        return _rulesService;
      }
    };
  }
]);
