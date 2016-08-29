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

// Renders a form item control label with requirement indicator
export default class Label extends React.Component {

  static get propTypes() {
    return {
      htmlFor: React.PropTypes.string.isRequired,
      required: React.PropTypes.bool.isRequired
    };
  }

  render() {
    return (
      <label htmlFor={this.props.htmlFor}>{this.props.children}
      {
        this.props.required ?
          <i className='fa fa-asterisk'></i>
          :
            null
      }
      </label>
    );
  }

}
