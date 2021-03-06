/**
 *  Copyright 2016 ReSys OÜ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Actions from '../actions/ActionConstants';

const submitCallbackMiddleware = store => next => action =>  {
  if (action.type === Actions.COMPLETE_QUESTIONNAIRE && action.questionnaireId) {
    let callback = store.getState().config.get('submitCallback');
    if (callback) {
      let context = {
        questionnaireId: action.questionnaireId
      }
      callback(context);
    }
  }
  else if (action.type === Actions.AUTHENTICATION_ERROR) {
    let callback = store.getState().config.get('authenticationErrorCallback');
    if (callback) {
      callback(action.message);
    }
  }
  else if (action.type === Actions.TECHNICAL_ERROR) {
    let callback = store.getState().config.get('technicalErrorCallback');
    if (callback) {
      callback(action.message);
    }
  }
  return next(action);
}

export {
  submitCallbackMiddleware
};
