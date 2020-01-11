import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const expectedSrc = 'image.jpg';
    const expectedName = 'Trip';
    const expectedId = 'abc';
    const expectedDays = 14;
    const expectedCost = '$1000';
    const component = shallow(
      <TripSummary
        id = {expectedId}
        name = {expectedName}
        image = {expectedSrc}
        cost = {expectedCost}
        days = {expectedDays}
      />);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });


  it('Does image have correct properties src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedName = 'Trip';
    const expectedId = 'abc';
    const expectedDays = 14;
    const expectedCost = '$1000';
    const component = shallow(
      <TripSummary
        image = {expectedSrc}
        name = {expectedName}
        id = {expectedId}
        days = {expectedDays}
        cost = {expectedCost}
      />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render correct props name, days, cost', () => {
    const expectedSrc = 'image.jpg';
    const expectedName = 'Trip';
    const expectedId = 'abc';
    const expectedDays = 14;
    const expectedCost = '$1000';
    const component = shallow(
      <TripSummary 
        image = {expectedSrc}
        name = {expectedName}
        id = {expectedId}
        days = {expectedDays}
        cost = {expectedCost}
      />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct order tags array', () => {
    const expectedTags = ['one', 'two', 'three'];
    const expectedSrc = 'image.jpg';
    const expectedName = 'Trip';
    const expectedId = 'abc';
    const expectedDays = 14;
    const expectedCost = '$1000';
    const component = shallow(
      <TripSummary 
        tags={expectedTags}
        image = {expectedSrc}
        name = {expectedName}
        id = {expectedId}
        days = {expectedDays}
        cost = {expectedCost}
      />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should render when props tags is correct', () => {
    const expectedTags = [];
    const expectedSrc = 'image.jpg';
    const expectedName = 'Trip';
    const expectedId = 'abc';
    const expectedDays = 14;
    const expectedCost = '$1000';
    const component = shallow(
      <TripSummary
        tags={expectedTags}
        image = {expectedSrc}
        name = {expectedName}
        id = {expectedId}
        days = {expectedDays}
        cost = {expectedCost}
      />);
    expect(component.find('.tags')).toBeTruthy();
  });

});