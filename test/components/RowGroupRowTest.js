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
/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/

import { shallow, mount } from 'enzyme';
import React from 'react';
import Immutable from 'immutable';
import sinon from 'sinon';

import {RowGroupRow} from 'components/RowGroupRow';

describe('RowGroupRow', () => {

  it('should have its component name as default className', () => {
    var group = {
      id: 'g1',
      type: 'group',
      items: []
    };
    var context = {
        componentCreator: sinon.mock()
    };
    context.componentCreator.never();

    var removeRow = sinon.mock();
    removeRow.never();

    var wrapper = shallow(<RowGroupRow group={[group.id,Immutable.fromJS(group)]} removeRow={removeRow} />,{context});
    expect(wrapper.props().className).to.equal('dialob-rowgroup-row');
    context.componentCreator.verify();
    removeRow.verify();
  });
});
