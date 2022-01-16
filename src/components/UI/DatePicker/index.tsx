import React, { useState, useRef, useReducer } from 'react';
import DatePickerInput from './DatePickerInput';
import DatePickerCalendar from './DatePickerCalendar';
import { useClickAway } from 'react-use';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { MONTH_NAMES } from '../../../utils/date-picker-data';
import { getArrayNumber } from '../../../utils/helper';

const getDaysOfMonth = (currentMont: number, currentYear: number) => {
  const newMonth = currentMont === 0 ? 0 : currentMont;

  const daysInMonth = new Date(currentYear, newMonth + 1, 0).getDate();
  return getArrayNumber(daysInMonth);
};

const getBlankDays = (currentMont?, currentYear?) => {
  // find where to start calendar day of week
  const newMonth = currentMont === 0 ? 0 : currentMont;

  const dayOfWeek = new Date(currentYear, newMonth).getDay();
  return getArrayNumber(dayOfWeek);
};

type State = {
  year: number;
  month: number;
  daysOfMonth: number[];
  blankDays: number[];
};

const date = new Date();
const initialState: State = {
  year: date.getFullYear(),
  month: date.getMonth(),
  daysOfMonth: getArrayNumber(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()),
  blankDays: getArrayNumber(new Date(date.getFullYear(), date.getMonth()).getDay()),
};

type Action = {
  type: string;
  day?: number;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'select': {
      return {
        ...state,
      };
    }
    case 'back': {
      const year = state.month === 0 ? state.year - 1 : state.year;
      const month = state.month === 0 ? 11 : state.month - 1;

      return {
        year,
        month,
        daysOfMonth: getDaysOfMonth(month, year),
        blankDays: getBlankDays(month, year),
      };
    }
    case 'forward': {
      const year = state.month === 11 ? state.year + 1 : state.year;
      const month = state.month === 11 ? 0 : state.month + 1;

      return {
        year: year,
        month: month,
        daysOfMonth: getDaysOfMonth(month, year),
        blankDays: getBlankDays(month, year),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

type Props = {
  placeholder?: string;
  borderLeft?: boolean;
  borderRight?: boolean;
  onChange: (change) => void;
  selected: any;
  disabled?: boolean;
  children?: React.ReactNode;
  childrenClassName?: string;
  isProcessing?: boolean;
  datePickerContainerStyles?: string;
  dateInputInnerClassName?: string;
};

const formatDateForDisplay = (date: Date) => {
  if (!date) return '';
  const formattedDate = ('0' + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
  const formattedMonthInNumber = ('0' + (date.getMonth() + 1)).slice(-2);
  const formattedYear = date.getFullYear();

  return `${formattedMonthInNumber}/${formattedDate}/${formattedYear}`;
};

const DatePicker = forwardRef(
  (
    {
      placeholder = '',
      borderLeft,
      borderRight,
      onChange,
      selected,
      disabled,
      children,
      childrenClassName,
      isProcessing,
      datePickerContainerStyles,
      dateInputInnerClassName,
    }: Props,
    ref
  ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showDatepicker, setShowDatepicker] = useState(false);

    const calendarRef = useRef(null);
    const inputRef = useRef(null);

    useClickAway(calendarRef, () => {
      setShowDatepicker(false);
    });

    const isSelectedDate = (date) => {
      const d = new Date(state.year, state.month, date);
      return formatDateForDisplay(selected) === formatDateForDisplay(d);
    };

    const getDateValue = (day: number) => {
      const selectedDate = new Date(state.year, state.month, day);
      // setDatePickerValue(selectedDate);
      onChange(selectedDate);
      dispatch({ type: 'select' });

      setShowDatepicker(false);
    };

    const isToday = (day: number) => {
      const today = new Date();
      const d = new Date(state.year, state.month, day);
      return today.toDateString() === d.toDateString();
    };

    return (
      <div className={classNames('relative h-full', isProcessing && 'animate-pulse', datePickerContainerStyles)}>
        {children ? (
          <DatePickerInput
            setShowDatePicker={setShowDatepicker}
            placeholder={placeholder}
            value={formatDateForDisplay(selected)}
            borderRight={borderRight}
            borderLeft={borderLeft}
            ref={inputRef}
            disabled={disabled}
            childrenClassName={childrenClassName}
            dateInputInnerClassName={dateInputInnerClassName}
          >
            {children}
          </DatePickerInput>
        ) : (
          <DatePickerInput
            setShowDatePicker={setShowDatepicker}
            placeholder={placeholder}
            value={formatDateForDisplay(selected)}
            borderRight={borderRight}
            borderLeft={borderLeft}
            ref={inputRef}
            disabled={disabled}
          />
        )}
        <DatePickerCalendar
          ref={calendarRef}
          month={MONTH_NAMES[state.month]}
          year={state.year}
          daysOfMonth={state.daysOfMonth}
          blankDays={state.blankDays}
          hide={!showDatepicker}
          onBackClick={() => dispatch({ type: 'back' })}
          onForwardClick={() => dispatch({ type: 'forward' })}
          isToday={(day) => isToday(day)}
          isSelectedDate={(day) => isSelectedDate(day)}
          onDayClick={(day) => getDateValue(day)}
        />
      </div>
    );
  }
);

export default DatePicker;
