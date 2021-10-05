type Props = {
  formProp: string;
  label: string;
  op1?: string;
  op2?: string;
};

export const RadioBoxRow = ({ formProp, label, op1 = 'Si', op2 = 'No' }: Props) => (
  <div className="flex flex-row items-center">
    <p>{label}:</p>
    <div className="ml-2 flex flex-row items-center">
      <input type="radio" id={op1} name={formProp} value={1} />
      <label className="ml-1" htmlFor={op1}>
        {op1}
      </label>
      <input className="ml-2" type="radio" id={op2} name={formProp} value={0} />
      <label className="ml-1" htmlFor={op2}>
        {op2}
      </label>
    </div>
  </div>
);
