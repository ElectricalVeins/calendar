import React from 'react';
import { eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import CalendarWeek from './CalendarWeek';
import styles from './CalendarBody.module.css';

const getDatesForThisMonth = (date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachWeekOfInterval({ start, end }, { weekStartsOn: 1 });
};

const CalendarHeader = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.day}>M</div>
      <div className={styles.day}>T</div>
      <div className={styles.day}>W</div>
      <div className={styles.day}>T</div>
      <div className={styles.day}>F</div>
      <div className={styles.day}>S</div>
      <div className={styles.day}>S</div>
    </div>
  );
};

const CalendarBody = (props) => {
  const { currentDate } = props;
  const result = getDatesForThisMonth(currentDate);
  console.log(result);
  return (
    <div>
      <CalendarHeader />
      <div>
        {result.map((weekStart) => (
          <CalendarWeek
            key={weekStart.toString()}
            weekStart={weekStart}
            currentDate={currentDate}
            dayClassName={styles.day}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;
