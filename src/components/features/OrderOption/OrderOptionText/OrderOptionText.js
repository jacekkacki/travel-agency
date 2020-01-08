import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption.scss';

const OrderOptionText =  ({ currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input type = 'text' 
      className = {styles.inputWide}
      value = {currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    /> 
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;