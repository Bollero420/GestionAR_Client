import { formatSlashDate, getGender } from '../../utils/helper';

export const handleCommonValues = (label: string, value: any) => {
  let formattedData = value;

  if (label === 'SEXO') {
    formattedData = getGender(value);
  }

  if (label === 'FECHA DE NACIMIENTO') {
    formattedData = formatSlashDate(value);
  }

  return formattedData;
};
