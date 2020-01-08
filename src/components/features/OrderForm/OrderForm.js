import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Row>
    {pricing.map(pricingData => (
      <Col sm={4} md={3} key={pricingData.id}>
        <OrderOption  {...pricingData} currentValue = {props.options[pricingData.id]} setOrderOption = {props.setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options = {props.options}/>
    </Col>
  </Row>
);


OrderForm.propTypes = {
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;