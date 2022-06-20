export const requiredValidation = { required: 'Requerido' };

const dniValidation = {
  pattern: {
    value: /^[0-9]{8}$/,
    message: 'Formato de DNI invalido',
  },
};

export const requiredDniValidation = {
  ...requiredValidation,
  ...dniValidation,
};

export const onlyNumbersValidation = {
  pattern: {
    value: /^[0-9]*$/,
    message: 'Ingrese solo numeros',
  },
};

export const requiredOnlyNumbersValidation = {
  ...requiredValidation,
  ...onlyNumbersValidation,
};

const emailValidation = {
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Mail invalido',
  },
};

export const requiredEmailValidation = {
  ...requiredValidation,
  ...emailValidation,
};

const letterAndSpacesValidation = {
  pattern: {
    value: /^[a-zA-Z\s]*$/,
    message: 'Ingrese solo letras y espacios',
  },
};

export const requiredLetterAndSpacesValidation = {
  ...requiredValidation,
  ...letterAndSpacesValidation,
};
