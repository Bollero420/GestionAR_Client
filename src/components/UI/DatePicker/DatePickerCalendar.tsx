import React from 'react';
import classNames from 'classnames';
import { DAYS } from '../../../utils/date-picker-data';

interface Props {
  month: string;
  year: number;
  daysOfMonth: number[];
  blankDays: number[];
  hide: boolean;
  onBackClick: () => void;
  onForwardClick: () => void;
  isToday: (day) => boolean;
  isSelectedDate: (day) => boolean;
  onDayClick: (day) => void;
}

const DatePickerCalendar = React.forwardRef((props: Props, ref: any) => {
  const {
    month,
    year,
    daysOfMonth,
    blankDays,
    hide,
    onBackClick,
    onForwardClick,
    isSelectedDate,
    isToday,
    onDayClick,
  } = props;

  const Day = ({
    day,
    isToday,
    isSelectedDate,
    onClick,
  }: {
    day: number;
    isToday: boolean;
    isSelectedDate: boolean;
    onClick: () => void;
  }) => (
    <div style={{ width: '14.28%' }} className="px-1 mb-1">
      <div
        onClick={onClick}
        className={classNames(
          'text-sm leading-none text-center transition duration-100 ease-in-out rounded-full cursor-pointer',
          isToday && 'bg-blue-200',
          !isToday && !isSelectedDate && 'text-gray-600 hover:bg-blue-200',
          isSelectedDate && 'bg-blue-400 text-white hover:bg-opacity-75'
        )}
      >
        {day}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={classNames('absolute top-0 left-0 p-4 mt-12 bg-white rounded-lg shadow z-10', {
        hidden: hide,
      })}
      style={{ width: '17rem' }}
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-lg font-bold text-gray-800">{month}</span>
          <span className="ml-1 text-lg font-normal text-gray-600">{year}</span>
        </div>
        <div>
          <button
            onClick={onBackClick}
            type="button"
            className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-gray-100"
          >
            <svg className="inline-flex w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={onForwardClick}
            type="button"
            className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-gray-100"
          >
            <svg className="inline-flex w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex mb-3 -mx-1 flex-wrap">
        {DAYS.map((day, idx) => (
          <div key={idx} style={{ width: '14.26%' }} className="px-0.5">
            <div className="text-xs font-medium text-center text-gray-800">{day}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap -mx-1">
        {blankDays.map((blankDay, idx) => (
          <div key={idx} style={{ width: '14.28%' }} className="p-1 text-sm text-center border border-transparent" />
        ))}
        {daysOfMonth.map((day, idx) => (
          <Day
            day={day}
            key={idx}
            isToday={isToday(day)}
            isSelectedDate={isSelectedDate(day)}
            onClick={() => onDayClick(day)}
          />
        ))}
      </div>
    </div>
  );
});

export default DatePickerCalendar;
