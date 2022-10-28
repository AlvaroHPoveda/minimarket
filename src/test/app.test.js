import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import App from '../App';
import { HeaderComponents } from '../components'

Enzyme.configure({ adapter: new Adapter()});

describe('appComponent', () => {

    test('descripcion', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find({className:'App'}).exists()).toBe(true);
    })

    test('descripcion', () => {
        const wrapper = shallow(
            <Provider store={store} >                
                <HeaderComponents/>
            </Provider>
        )
        expect(wrapper.find('HeaderComponents').exists()).toBe(true);
    })
})
