import React from 'react';
import styles from './OrderOption.scss';

import OrderOptionCheckboxes from '../OrderOption/OrderOptionCheckboxes/OrderOptionCheckboxes';
import OrderOptionDropdown from '../OrderOption/OrderOptionDropdown/OrderOptionDropdown';
import OrderOptionIcons from '../OrderOption/OrderOptionIcons/OrderOptionIcons';
import OrderOptionNumber from '../OrderOption/OrderOptionNumber/OrderOptionNumber';
import OrderOptionDate from './OrderOptionDate/OrderOptionDate';
import OrderOptionText from './OrderOptionText/OrderOptionText';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText,
};

const OrderOption = ({ id, setOrderOption, name, type, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

export default OrderOption;