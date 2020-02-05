import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, countryName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryName,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = props => (
  <Row>
    {pricing.map(pricingData => (
      <Col sm={4} md={3} key={pricingData.id}>
        <OrderOption  {...pricingData} 
          currentValue = {props.options[pricingData.id]}
          setOrderOption = {props.setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} 
        options = {props.options}/>
    </Col>
    <Button
      disabled={ props.options.name== '' || props.options.contact == ''}
      onClick={() => sendOrder(
        props.options,
        props.tripCost,
        props.tripName,
        props.tripId,
        props.countryName)}
    >Order now!</Button>
  </Row>
);


OrderForm.propTypes = {
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryName: PropTypes.string,
};

export default OrderForm;