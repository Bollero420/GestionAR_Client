import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import DatePickerImage from './DatePickerImage';

const Input = styled.input<{ borderLeft?: boolean; borderRight?: boolean }>`
  border-right: ${(props) => !props.borderRight && 'md:none'};
  border-left: ${(props) => !props.borderLeft && 'md:none'};
`;

interface Props {
  borderLeft?: boolean;
  borderRight?: boolean;
  setShowDatePicker: (prevState) => void;
  placeholder: string;
  disabled?: boolean;
  value: any;
  children?: React.ReactNode;
  childrenClassName?: string;
  dateInputInnerClassName?: string;
}

const DatePickerInput = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      borderLeft,
      borderRight,
      value,
      setShowDatePicker,
      placeholder,
      disabled,
      children,
      childrenClassName,
      dateInputInnerClassName,
    }: Props,
    ref: any
  ) => (
    <div ref={ref} className="relative h-full" onClick={() => setShowDatePicker((prevState) => !prevState)}>
      {children && <span className={classNames('absolute inset-y-0 left-0 flex', childrenClassName)}>{children}</span>}
      <input
        type="text"
        readOnly
        value={value}
        disabled={disabled}
        className={classNames(
          'w-full h-full pl-2 pr-10 py-3 border-black border leading-none shadow-sm focus:outline-none ' +
            'focus:shadow-outline font-sen text-black text-sm border-gray-400 ' +
            'focus:border-gray-400 focus:ring-transparent placeholder-gray-500 rounded md:rounded-none',
          borderLeft && 'md:rounded-l-md',
          borderRight && 'md:rounded-r-md',
          children && dateInputInnerClassName
        )}
        placeholder={placeholder}
      />
      <span className="absolute inset-y-0 right-0 flex items-center">
        <DatePickerImage marginRight={borderRight} />
      </span>
    </div>
  )
);

export default DatePickerInput;
