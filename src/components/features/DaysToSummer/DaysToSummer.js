import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getDaysToSummer(){
    const currentDate = new Date();
    const startSummerDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21, 0, 0, 0, 0));
    const endSummerDate = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23, 0, 0, 0, 0));

    let howManyDays = startSummerDate.getTime() - currentDate.getTime();
    let days = Math.floor(howManyDays / (1000 * 60 * 60 * 24));

    if (days > 1){
      return days +' days to summer';
    } else if (days === 1){
      return '1 day to summer!';
    } else if (startSummerDate <= currentDate && currentDate <= endSummerDate){
      return;
    } else {
      const nextStartSummer = new Date(Date.UTC(currentDate.getUTCFullYear() + 1, 5, 21, 0, 0, 0, 0));
      days = Math.floor((nextStartSummer.getTime() - currentDate.getTime())/ (1000 * 60 * 60 * 24));
      return days +' days to summer!';
    }
    
  }

  render() {
    const days = this.getDaysToSummer();
    return (
      <div className={styles.component}>
        <h3 className={styles.description}>{days}</h3>
      </div>
    );
  }
}

export default DaysToSummer;