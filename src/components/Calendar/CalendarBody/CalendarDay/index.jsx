import React from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import cx from 'classnames';
import styles from './CalendarDay.module.css';

const CalendarDay = (props) => {
  const { day, currentDate,dayClassName } = props;

  const classNames = cx(dayClassName, {
    [styles.anotherMonth]: !isSameMonth(day, currentDate),
    [styles.currentDay]: isToday(day),
  });
  return <span className={classNames}>{format(day, 'd')}</span>;
};

export default CalendarDay;
