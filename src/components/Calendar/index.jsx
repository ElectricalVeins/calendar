import React, { Component } from 'react';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import { addMonths } from 'date-fns';
import styles from './Calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  changeMonth = (amountOfMonth) => {
    this.setState(({ currentDate }) => ({
      currentDate: addMonths(currentDate, amountOfMonth),
    }));
  };

  render() {
    const { currentDate } = this.state;

    return (
      <section className={styles.container}>
        <div className={styles.calendar}>
          <CurrentDay currentDate={currentDate} />
          <CalendarBody currentDate={currentDate} />
        </div>
        <div className={styles.controls}>
          <button onClick={() => this.changeMonth(-1)}>{'<'}</button>
          <button onClick={() => this.changeMonth(1)}>{'>'}</button>
        </div>
      </section>
    );
  }
}

export default Calendar;
