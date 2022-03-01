import { EDUCATIONAL_LEVEL_OPTIONS, OTHER_INFO_OPTIONS } from "./constants";

export const getArrayNumber = (limit: number): number[] => {
  const array = [];
  for (let i = 1; i <= limit; i++) {
    array.push(i);
  }
  return array;
};

export const getCookie = (cname: string) => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const parseGradeName = (grade:any) => {
  let name = '';
  switch (grade.level) {
    case '1':
      name = '1ero';
      break;
    case '2':
      name = '2ndo'; 
      break;
    case '3':
      name = '3ero';
      break;
    case '4':
      name = '4to';
      break;
    case '5':
      name = '5to';
      break;
    case '6':
      name = '6to';
      break;
    case '7':
      name = '7to';
      break;
  }
  const shift = grade.shift === 'M' ? 'Mañana' : 'Tarde'
  const result = `${name} ${grade.section} Turno ${shift}`
  return result
}

export const getEducationalLevel = (value:string) => EDUCATIONAL_LEVEL_OPTIONS.find(ed_lvl => ed_lvl.value === value).label
export const getOtherInfo = (value:string) => OTHER_INFO_OPTIONS.find(ot_info => ot_info.value === value).label