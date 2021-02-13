import React from 'react';
import { addDays } from 'date-fns';
import CalendarDay from '../CalendarDay';
import styles from './CalendarWeek.module.css';

const CalendarWeek = (props) => {
  const { weekStart, currentDate,dayClassName } = props;
  return (
    <div className={styles.week}>
      {Array(7)
        .fill(null)
        .map((day, i) => {
          const dayOfWeek = addDays(weekStart, i);
          return <CalendarDay key={dayOfWeek.toString()} day={dayOfWeek} currentDate={currentDate} dayClassName={dayClassName} />;
        })}
    </div>
  );
};

export default CalendarWeek;
