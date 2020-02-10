import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const toSummerDescription = '.description';

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render correct to style description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(toSummerDescription)).toEqual(true);
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer/>);
    const renderedTime = component.find('.description').text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDate('2020-02-10', '132 days to summer!');

  checkDescriptionAtDate('2020-06-20', '1 day to summer!');

  checkDescriptionAtDate('2020-06-21', '');
  checkDescriptionAtDate('2020-07-20', '');

  checkDescriptionAtDate('2020-09-25', '269 days to summer!');
});
