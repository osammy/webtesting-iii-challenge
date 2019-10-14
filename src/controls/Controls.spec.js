// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

describe('Controls', () => {
    it('provides button toggle closed state', () => {
        const wrapper = rtl.render(<Controls />);
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    });
    it('provides button toggle locked state', () => {
        const wrapper = rtl.render(<Controls />);
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    });
    it('reflect button text change on clicking unlock', () => {
        const wrapper = rtl.render(<Controls locked={true}/>);
        expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
    });
    it('reflect button text change on clicking closebtn', () => {
        const wrapper = rtl.render(<Controls closed={true}/>);
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
    });
    it('toggle button disabled when locked', () => {
        const wrapper = rtl.render(<Controls locked={true}/>);
        expect(wrapper.queryByText(/close gate/i)).toHaveAttribute('disabled');
    });
    it('toggle button is disabled when gate is open', () => {
        const wrapper = rtl.render(<Controls closed={false}/>);
        expect(wrapper.queryByText(/lock gate/i)).toHaveAttribute('disabled');
    });
});