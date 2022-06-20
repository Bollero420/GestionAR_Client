import classNames from 'classnames';

import Select, { SelectEventTarget } from '../Select';
import Label from '../Label';

import { MONTHS_OPTIONS, YEARS_OPTIONS } from '../../../utils/constants/selectOptions';

export const MonthAndYearSelection = ({ month, year, handleSelectMonth, handleSelectYear, show }) => {
  const onSelectMonth = (e: SelectEventTarget) => {
    handleSelectMonth(e.target.value);
  };

  const onSelectYear = (e: SelectEventTarget) => handleSelectYear(e.target.value);

  return (
    <div className={classNames('flex flex-row', show ? 'visible' : 'invisible')}>
      <div className="min-w-qualification-options flex-row items-center mr-1">
        <Label text="Año" />
        <Select name="report-year" options={YEARS_OPTIONS} value={year} onChange={onSelectYear} />
      </div>
      <div className="min-w-qualification-options flex-row items-center">
        <Label text="Mes" />
        <Select name="report-month" options={MONTHS_OPTIONS} value={month} onChange={onSelectMonth} />
      </div>
    </div>
  );
};
