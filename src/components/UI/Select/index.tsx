import React, { forwardRef, Fragment, Key, SelectHTMLAttributes, useMemo } from 'react';
import { Listbox } from '@headlessui/react';
import CheckIcon from '@heroicons/react/solid/CheckIcon';
import SelectorIcon from '@heroicons/react/solid/SelectorIcon';
import classNames from 'classnames';

type Option = {
  value: SelectHTMLAttributes<any>['value'];
  label: string;
};

export type Props = {
  name: string;
  options: Option[];
  value?: any;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Select = forwardRef<HTMLButtonElement, Props>(
  ({ name, options, value, onChange, onBlur, placeholder = 'Seleccionar...', disabled }, ref) => {
    const optionMap = useMemo(() => new Map<Option['value'], Option>(options.map((o) => [o.value, o])), [options]);
    const selected = optionMap.get(value);

    return (
      <div className="flex flex-col relative">
        <Listbox
          value={selected}
          disabled={disabled}
          onChange={(value) =>
            onChange &&
            onChange({
              target: { name: name, id: name, value: value?.value },
            } as React.ChangeEvent<any>)
          }
        >
          <Listbox.Button
            name={name}
            id={name}
            ref={ref}
            onBlur={onBlur}
            className="
            relative py-2 pl-2 w-full bg-white-400 rounded h-10  bg-white border border-solid text-xs text-left border-black focus:outline-none focus:ring focus:border-blue-500 leading-none"
          >
            <span className={classNames('py-2 text-xs text-black placeholder-black', !selected && 'text-gray-400')}>
              {selected?.label || placeholder}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="text-gray-500 w-5 h-5" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full top-12 z-10 bg-white rounded-md overflow-y-scroll mt-1 space-y-1 shadow-sm border border-gray-300 focus:outline-none focus-visible:outline-none">
            {options.map((option) => (
              <Listbox.Option key={option.value as Key} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <div
                    className={classNames(
                      'flex flex-row items-center cursor-pointer justify-between text-black text-xs px-3 py-2 w-full hover:bg-black hover:bg-opacity-40',
                      selected && 'font-bold',
                      active && 'bg-blue-400 bg-opacity-10'
                    )}
                  >
                    <p className="text-black">{option.label}</p>
                    {selected && <CheckIcon className="pl-1 text-blue-600 w-5 h-5" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
  }
);

export default Select;
