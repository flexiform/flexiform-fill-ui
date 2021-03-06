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

import React from 'react';
import {connectToAnswer} from '../utils/formUtils';
import Errors from './Errors';
import Item from './Item';
import Label from './Label';
import PropTypes from 'prop-types';

// Form item for dropdown selection controls
class ChoiceQuestion extends Item {

  static get contextTypes() {
    return {
      valueSetById: PropTypes.func.isRequired
    };
  }

  onChange(event) {
    this.props.answerQuestion(this.props.question[0], event.target.value);
  }

  option(key, value) {
    return (<option key={key} value={key}>{value}</option>);
  }

  choiceList() {
    let choices = [];
    let valueSet = this.context.valueSetById(this.props.question[1].get('valueSetId'));
    let value = this.props.question[1].get('value');
    if (valueSet) {
      choices = valueSet.map(e => this.option(e.get('key'), e.get('value')));
      if (value === null || value === undefined) {
        choices = choices.unshift(this.option(null, '-'));
      }
    }
    return choices;
  }

  render() {
    let q = this.props.question[1];
    let options = this.choiceList();
    return (
       <div className={this.getStyles()}>
        <Label htmlFor={this.getControlId()} required={this.isRequired()}>{q.get('label')}</Label>
        {this.renderDescription()}
        <select id={this.getControlId()} name={q.get('id')} value={q.get('value')} onChange={this.onChange.bind(this)}>
          {options}
        </select>
        <Errors errors={q.get('errors')} />
      </div>
    );
  }
}

export const ChoiceQuestionConnected = connectToAnswer(ChoiceQuestion);

export {
  ChoiceQuestionConnected as default,
  ChoiceQuestion
};
