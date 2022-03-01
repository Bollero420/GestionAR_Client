import { Controller } from 'react-hook-form';
import { QUALIFICATION_OPTIONS } from '../../utils/constants';
import Select from '../UI/Select';

export const QualificationRow = ({ name, control, title }) => (
  <div className="flex flex-row justify-between items-center flex-1 bg-white px-3 py-2 my-2 border-black border rounded-md">
    <p className="flex flex-1 text-sm capitalize">{title}</p>
    <div className="min-w-qualification-options pl-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select {...field} placeholder="Calificar" options={QUALIFICATION_OPTIONS} />}
      />
    </div>
  </div>
);
