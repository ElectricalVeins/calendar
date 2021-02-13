import React from 'react';
import { format } from 'date-fns';
import styles from './CalendarDay.module.css';

const CurrentDay = (props) => {
  const { currentDate } = props;

  return (
    <article className={styles.container}>
      <h1>{format(currentDate, 'MMMM')}</h1>
      <h2>{format(currentDate, 'd')}</h2>
    </article>
  );
};

export default CurrentDay;
