import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  static defaultProps = {
    title: 'Happy Hour',
    promoDescription: 'Its your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  componentDidMount(){
    /* run this.forceUpdate() every second */
    this.timerID = setInterval(() => 
      this.forceUpdate(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(),
      currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const { title, promoDescription } = this.props;
    const countDownTime = parseInt(this.getCountdownTime());
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {countDownTime > 82800 ? promoDescription : formatTime(countDownTime) }</div>
      </div>
    );
  }
}

export default HappyHourAd;