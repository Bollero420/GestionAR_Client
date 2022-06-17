import { useEffect } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';

import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import '../../styles/datepicker.css';

import Select from '../UI/Select';
import { useStudentRegistration } from '../../hooks/useStudentRegistration';

import {
  NAVIGATOR,
  CIVIL_STATUS_OPTIONS,
  EDUCATIONAL_LEVEL_OPTIONS,
  GENDER_OPTIONS,
  GRADES_SELECT_OPTIONS,
  OTHER_INFO_OPTIONS,
  REPEATING_QUANTITY_OPTIONS,
  SECTION_SELECT_OPTIONS,
  SERVICE_OPTIONS,
  SHIFT_SELECT_OPTIONS,
  YES_AND_NO_OPTIONS,
  COUNTRIES_OPTIONS,
  LOCATION_OPTIONS,
  requiredEmailValidation,
  requiredValidation,
  requiredDniValidation,
  requiredOnlyNumbersValidation,
  requiredLetterAndSpacesValidation,
  onlyNumbersValidation,
} from '../../utils/constants';

import classNames from 'classnames';

registerLocale('es', es);

type Form = {
  grade: {
    level: string;
    section: string;
    shift: string;
  };
  firstName: string;
  lastName: string;
  emailAddress: string;
  integrated: string;
  dni: string;
  gender: string;
  birth_date: string;
  location: string;
  country: string;
  previous_school: string;
  repeating_quantity: string;
  address: string;
  floor?: string;
  apartment?: string;
  neighborhood: string;
  address_location: string;
  phone: string;
  alternative_phone: string;
  school_radio: string;
  medical_center: string;
  disability: string;
  disability_type?: string;
  school_dining?: string;
  cooperator: string;
  has_siblings: string;
  siblings: [
    {
      firstName: string;
      lastName: string;
      dni: string;
      grade: {
        level: string;
        section: string;
        shift: string;
      };
      gender: string;
      birth_date: string;
    }
  ];
  student_tutors: [
    {
      firstName: string;
      lastName: string;
      dni: string;
      gender: string;
      birth_date: string;
      location: string;
      job: string;
      civil_status: string;
      phone: string;
      alternative_phone: string;
      address: string;
      floor?: string;
      apartment?: string;
      educational_level: string;
      other_info: string;
    }
  ];
};

const StudentFormScreen = () => {
  const history = useHistory();
  const { mutateAsync: registerStudent, isLoading, isSuccess, isError } = useStudentRegistration();

  const {
    handleSubmit: reactFormHandleSubmit,
    formState: { errors: formErrors },
    register,
    control,
    reset,
    watch,
  } = useForm<Form>({
    defaultValues: {
      siblings: [
        {
          firstName: '',
          lastName: '',
          dni: '',
          grade: {
            level: '',
            section: '',
            shift: '',
          },
          gender: '',
          birth_date: '',
        },
      ],
      student_tutors: [
        {
          firstName: '',
          lastName: '',
          dni: '',
          gender: '',
          birth_date: '',
          location: '',
          job: '',
          civil_status: '',
          phone: '',
          alternative_phone: '',
          address: '',
          floor: '',
          apartment: '',
          educational_level: '',
          other_info: '',
        },
      ],
    },
  });

  const {
    fields: siblings_fields,
    append: siblings_append,
    remove: siblings_remove,
    replace: siblings_replace,
  } = useFieldArray({
    control,
    name: 'siblings',
  });

  const {
    fields: tutors_fields,
    append: tutors_append,
    remove: tutors_remove,
    replace: tutors_replace,
  } = useFieldArray({
    control,
    name: 'student_tutors',
  });

  const addSibling = () =>
    siblings_append({
      firstName: '',
      lastName: '',
      dni: '',
      grade: {
        level: '',
        section: '',
        shift: '',
      },
      gender: '',
      birth_date: '',
    });

  const addTutor = () =>
    tutors_append({
      firstName: '',
      lastName: '',
      dni: '',
      gender: '',
      birth_date: '',
      location: '',
      job: '',
      civil_status: '',
      phone: '',
      alternative_phone: '',
      address: '',
      floor: '',
      apartment: '',
      educational_level: '',
      other_info: '',
    });

  const removeSibling = (index: number) => {
    if (index === 0 && siblings_fields.length === 1) {
      siblings_replace([
        {
          firstName: '',
          lastName: '',
          dni: '',
          grade: {
            level: '',
            section: '',
            shift: '',
          },
          gender: '',
          birth_date: '',
        },
      ]);
    } else {
      siblings_remove(index);
    }
  };

  const removeTutor = (index: number) => {
    if (index === 0 && tutors_fields.length === 1) {
      tutors_replace([
        {
          firstName: '',
          lastName: '',
          dni: '',
          gender: '',
          birth_date: '',
          location: '',
          job: '',
          civil_status: '',
          phone: '',
          alternative_phone: '',
          address: '',
          floor: '',
          apartment: '',
          educational_level: '',
          other_info: '',
        },
      ]);
    } else {
      tutors_remove(index);
    }
  };

  const onSubmit = (data: any) => {
    const request = {
      ...data,
    };

    if (data.cooperator) {
      request.cooperator = data.cooperator === 'YES';
    }
    if (data.disability) {
      request.disability = data.disability === 'YES';
    }
    if (data.integrated) {
      request.integrated = data.integrated === 'YES';
    }
    if (data.school_radio) {
      request.school_radio = data.school_radio === 'YES';
    }
    if (data.has_siblings) {
      request.has_siblings = data.has_siblings === 'YES';
    }

    registerStudent(request);
  };

  const watchDisability = watch('disability', 'NO');
  const watchHasSiblings = watch('has_siblings', 'NO');
  const siblings_items = watch('siblings');
  const tutors_items = watch('student_tutors');

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        history.push(NAVIGATOR.sign_in);
      }, 3000);
    }
  }, [isSuccess]);

  if (isSuccess)
    return (
      <div className="flex flex-col justify-center items-center h-screen max-h-screen">
        <div className="bg-white flex flex-col space-y-4 p-5">
          <p>TU SOLICITUD DE INCRIPCION DE CICLO LECTIVO 2022 HA SIDO REGISTRADA CON EXITO!</p>
          <p>PRONTO RECIBIRAS NOTICIAS EN LAS DIRECCIONES DE MAIL PROPORCIONADAS.</p>
          <p>GRACIAS!</p>
        </div>
      </div>
    );

  return (
    <form className="flex flex-col h-screen max-h-screen px-10" onSubmit={reactFormHandleSubmit(onSubmit)}>
      <h1 className="text-left mt-4 font-encode-bold text-2xl">
        SOLICITUD DE INCRIPCION DE CICLO LECTIVO {new Date().getFullYear()}
      </h1>
      <div className="flex flex-row w-full items-center mb-2 justify-between flex-wrap">
        <div className="flex flex-col items-start flex-wrap">
          <p className="mr-2 font-encode-bold pb-2">Escuela </p>
          <p className="border-black border rounded-xl h-10 p-2 w-147">Escuela Rio Parana n°156</p>
        </div>
        <div className="flex flex-row items-center flex-wrap gap-x-2">
          <ControlledSelect
            control={control}
            label="Grado*"
            rules={requiredValidation}
            options={GRADES_SELECT_OPTIONS}
            name="grade.level"
            errorMessage={formErrors?.grade?.level?.message}
          />
          <ControlledSelect
            control={control}
            label="Secc.*"
            rules={requiredValidation}
            options={SECTION_SELECT_OPTIONS}
            name="grade.section"
            errorMessage={formErrors?.grade?.section?.message}
          />
          <ControlledSelect
            control={control}
            label="Turno*"
            rules={requiredValidation}
            options={SHIFT_SELECT_OPTIONS}
            name="grade.shift"
            errorMessage={formErrors?.grade?.shift?.message}
          />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col my-2 py-2">
          <h2 className="text-left text-xl font-encode-bold pb-3">Datos del Alumno</h2>
          <div className="flex flex-row flex-wrap gap-1 mb-1">
            <Input
              register={register}
              label="Nombre*"
              name="firstName"
              rules={requiredLetterAndSpacesValidation}
              errorMessage={formErrors?.firstName?.message}
            />
            <Input
              register={register}
              label="Apellido*"
              name="lastName"
              rules={requiredLetterAndSpacesValidation}
              errorMessage={formErrors?.lastName?.message}
            />
            <Input
              register={register}
              label="DNI*"
              name="dni"
              rules={requiredDniValidation}
              errorMessage={formErrors?.dni?.message}
            />
            <Input
              register={register}
              label="Email*"
              name="emailAddress"
              rules={requiredEmailValidation}
              errorMessage={formErrors?.emailAddress?.message}
            />
            <ControlledSelect
              name="gender"
              control={control}
              rules={requiredValidation}
              options={GENDER_OPTIONS}
              label="Sexo*"
              errorMessage={formErrors?.gender?.message}
            />
            <ControlledDatePicker
              name="birth_date"
              control={control}
              rules={requiredValidation}
              label="Fecha de Nacimiento*"
              errorMessage={formErrors?.birth_date?.message}
            />
            <ControlledSelect
              name="location"
              control={control}
              rules={requiredValidation}
              options={LOCATION_OPTIONS} // change to PROVINCE_OPTIONS
              label="Provincia*"
              errorMessage={formErrors?.location?.message}
            />
            <ControlledSelect
              rules={requiredValidation}
              name="country"
              control={control}
              options={COUNTRIES_OPTIONS}
              label="Nacionalidad*"
              errorMessage={formErrors?.country?.message}
            />
            <Input
              register={register}
              rules={requiredValidation}
              label="Escuela a la que asistió"
              name="previous_school"
              errorMessage={formErrors?.previous_school?.message}
            />
            <ControlledSelect
              name="integrated"
              rules={requiredValidation}
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="En Proyecto de Integracion*"
              errorMessage={formErrors?.repeating_quantity?.message}
            />
            <ControlledSelect
              rules={requiredValidation}
              name="repeating_quantity"
              control={control}
              options={REPEATING_QUANTITY_OPTIONS}
              label="Repitente*"
              errorMessage={formErrors?.repeating_quantity?.message}
            />

            <ControlledSelect
              name="disability"
              control={control}
              rules={requiredValidation}
              options={YES_AND_NO_OPTIONS}
              label="Discapacidad*"
              errorMessage={formErrors?.disability?.message}
            />

            {watchDisability?.toUpperCase() === 'YES' && (
              <Input
                register={register}
                label="Tipo de discapacidad"
                name="disability_type"
                rules={requiredLetterAndSpacesValidation}
                errorMessage={formErrors?.disability_type?.message}
              />
            )}
            <ControlledSelect
              name="school_dining"
              control={control}
              options={SERVICE_OPTIONS}
              rules={requiredValidation}
              label="Servicio Alimenticio*"
              errorMessage={formErrors?.school_dining?.message}
            />
            <ControlledSelect
              name="cooperator"
              control={control}
              options={YES_AND_NO_OPTIONS}
              rules={requiredValidation}
              label="Se asocia a cooperadora*"
              errorMessage={formErrors?.cooperator?.message}
            />
            <ControlledSelect
              name="has_siblings"
              control={control}
              options={YES_AND_NO_OPTIONS}
              rules={requiredValidation}
              label="Tiene hermanos en la escuela?*"
              errorMessage={formErrors?.has_siblings?.message}
            />
          </div>
          <div className="flex flex-col justify-center">
            {watchHasSiblings === 'YES' && (
              <>
                <h2 className="text-left text-xl font-encode-bold pb-3">Datos hermano/s</h2>
                {siblings_fields.map((sibling, i) => (
                  <div className="flex flex-col" key={'student_sibling -' + i + sibling?.id}>
                    <div className="flex flex-row mb-2 items-center">
                      <div className="border border-black rounded-lg flex flex-col flex-wrap bg-white self-center p-2 my-2">
                        <div className="flex flex-row items-center">
                          <Input
                            register={register}
                            label="Nombre*"
                            name={`siblings.${i}.firstName`}
                            rules={requiredLetterAndSpacesValidation}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.firstName?.message}
                          />
                          <Input
                            register={register}
                            label="Apellido*"
                            name={`siblings.${i}.lastName`}
                            rules={requiredLetterAndSpacesValidation}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.lastName?.message}
                          />
                          <Input
                            register={register}
                            label="DNI*"
                            name={`siblings.${i}.dni`}
                            rules={requiredLetterAndSpacesValidation}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.dni?.message}
                          />
                          <ControlledSelect
                            name={`siblings.${i}.gender`}
                            control={control}
                            options={GENDER_OPTIONS}
                            rules={requiredValidation}
                            label="Sexo*"
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.gender?.message}
                          />
                          <ControlledDatePicker
                            name={`siblings.${i}.birth_date`}
                            control={control}
                            label="Fecha de Nacimiento*"
                            rules={requiredValidation}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.birth_date?.message}
                          />
                          <ControlledSelect
                            control={control}
                            label="Grado*"
                            rules={requiredValidation}
                            options={GRADES_SELECT_OPTIONS}
                            name={`siblings.${i}.grade.level`}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.grade?.level?.message}
                          />
                          <ControlledSelect
                            control={control}
                            label="Secc.*"
                            rules={requiredValidation}
                            options={SECTION_SELECT_OPTIONS}
                            name={`siblings.${i}.grade.section`}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.grade?.section.message}
                          />
                          <ControlledSelect
                            control={control}
                            label="Turno*"
                            rules={requiredValidation}
                            options={SHIFT_SELECT_OPTIONS}
                            name={`siblings.${i}.grade.shift`}
                            errorMessage={formErrors.siblings && formErrors?.siblings[i]?.grade?.shift?.message}
                          />
                        </div>
                        {i === siblings_items.length - 1 && siblings_items.length < 4 && (
                          <div
                            className="pl-2 flex flex-row items-center text-success-500 cursor-pointer max-w-min hover:opacity-80"
                            onClick={addSibling}
                          >
                            <PlusCircleIcon className="w-6 h-6 text-success-500" />
                            <p className="font-encode-bold">Agregar</p>
                          </div>
                        )}
                      </div>
                      <div className="pl-1">
                        <MinusCircleIcon
                          className="w-6 h-6 text-red-500 cursor-pointer hover:opacity-80"
                          onClick={() => removeSibling(i)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <h2 className="text-left text-xl font-encode-bold pb-3 pt-3">Domicilio del Alumno</h2>
          <div className="flex flex-row flex-wrap items-center gap-1">
            <Input
              rules={requiredValidation}
              register={register}
              label="Calle*"
              name="address"
              errorMessage={formErrors?.address?.message}
            />
            <Input
              rules={onlyNumbersValidation}
              register={register}
              label="Piso"
              name="floor"
              errorMessage={formErrors?.floor?.message}
            />
            <Input
              rules={undefined}
              register={register}
              label="Depto"
              name="apartment"
              errorMessage={formErrors?.apartment?.message}
            />
            <Input
              register={register}
              label="Barrio*"
              rules={requiredLetterAndSpacesValidation}
              name="neighborhood"
              errorMessage={formErrors?.neighborhood?.message}
            />
            <Input
              register={register}
              label="Localidad*"
              rules={requiredLetterAndSpacesValidation}
              name="address_location"
              errorMessage={formErrors?.address_location?.message}
            />
            <Input
              rules={requiredOnlyNumbersValidation}
              register={register}
              label="Telefono*"
              name="phone"
              errorMessage={formErrors?.phone?.message}
            />
            <Input
              register={register}
              label="Telefono alt.*"
              name="alternative_phone"
              rules={requiredOnlyNumbersValidation}
              errorMessage={formErrors?.alternative_phone?.message}
            />
            <ControlledSelect
              name="school_radio"
              control={control}
              rules={requiredValidation}
              options={YES_AND_NO_OPTIONS}
              label="Pertenece al radio escolar?*"
              errorMessage={formErrors?.school_radio?.message}
            />
            <Input
              register={register}
              label="Centro de Salud*"
              rules={requiredValidation}
              name="medical_center"
              errorMessage={formErrors?.medical_center?.message}
            />
          </div>
        </div>
        <div className="flex flex-col py-2 px-1 my-3">
          <h2 className="text-left text-xl font-encode-bold pb-3">Datos PADRE/MADRE/TUTOR</h2>
          {tutors_fields?.map((tutor, i) => (
            <div className="flex flex-col" key={'student_tutor -' + i + tutor?.id}>
              <div className="flex flex-row items-center justify-between pr-2 mb-4">
                <div className="border border-black p-2 rounded-lg flex flex-col flex-wrap bg-white gap-1">
                  <div className="flex flex-row flex-wrap items-center gap-1">
                    <Input
                      register={register}
                      label="Nombre*"
                      rules={requiredLetterAndSpacesValidation}
                      name={`student_tutors.${i}.firstName`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.firstName?.message}
                    />
                    <Input
                      register={register}
                      label="Apellido*"
                      rules={requiredLetterAndSpacesValidation}
                      name={`student_tutors.${i}.lastName`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.lastName?.message}
                    />
                    <Input
                      register={register}
                      label="DNI*"
                      rules={requiredDniValidation}
                      name={`student_tutors.${i}.dni`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.dni?.message}
                    />
                    <ControlledSelect
                      name={`student_tutors.${i}.gender`}
                      control={control}
                      options={GENDER_OPTIONS}
                      rules={requiredValidation}
                      label="Sexo*"
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.gender?.message}
                    />
                    <ControlledDatePicker
                      name={`student_tutors.${i}.birth_date`}
                      control={control}
                      rules={requiredValidation}
                      label="Fecha de Nacimiento*"
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.birth_date?.message}
                    />
                    <Input
                      register={register}
                      label="Nacido en*"
                      rules={requiredLetterAndSpacesValidation}
                      name={`student_tutors.${i}.location`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.location?.message}
                    />
                    <ControlledSelect
                      name={`student_tutors.${i}.civil_status`}
                      control={control}
                      rules={requiredValidation}
                      options={CIVIL_STATUS_OPTIONS}
                      label="Estado Civil*"
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.civil_status?.message}
                    />
                    <Input
                      register={register}
                      label="Ocupacion*"
                      rules={requiredLetterAndSpacesValidation}
                      name={`student_tutors.${i}.job`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.job?.message}
                    />
                    <Input
                      register={register}
                      label="Telefono Fijo*"
                      rules={requiredOnlyNumbersValidation}
                      name={`student_tutors.${i}.phone`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.phone?.message}
                    />
                    <Input
                      register={register}
                      label="Celular*"
                      rules={requiredOnlyNumbersValidation}
                      name={`student_tutors.${i}.alternative_phone`}
                      errorMessage={
                        formErrors.student_tutors && formErrors?.student_tutors[i]?.alternative_phone?.message
                      }
                    />
                  </div>
                  <h2 className="text-left text-xl font-encode-bold pb-3 pt-3">Domicilio PADRE/MADRE/TUTOR</h2>
                  <div className="flex flex-row flex-wrap items-center gap-1">
                    <Input
                      register={register}
                      label="Calle*"
                      rules={requiredValidation}
                      name={`student_tutors.${i}.address`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.address?.message}
                    />
                    <Input
                      register={register}
                      label="Piso"
                      rules={onlyNumbersValidation}
                      name={`student_tutors.${i}.floor`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.floor?.message}
                    />
                    <Input
                      register={register}
                      label="Depto"
                      rules={undefined}
                      name={`student_tutors.${i}.apartment`}
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.apartment?.message}
                    />
                    <ControlledSelect
                      name={`student_tutors.${i}.educational_level`}
                      control={control}
                      rules={requiredValidation}
                      options={EDUCATIONAL_LEVEL_OPTIONS}
                      label="Tipo Escolaridad*"
                      errorMessage={
                        formErrors.student_tutors && formErrors?.student_tutors[i]?.educational_level?.message
                      }
                    />

                    <ControlledSelect
                      name={`student_tutors.${i}.other_info`}
                      control={control}
                      rules={requiredValidation}
                      options={OTHER_INFO_OPTIONS}
                      label="Ocupación Laboral*"
                      errorMessage={formErrors.student_tutors && formErrors?.student_tutors[i]?.other_info?.message}
                    />
                  </div>
                  <>
                    {i === tutors_items.length - 1 && tutors_items.length < 3 && (
                      <div
                        className="pl-2 flex flex-row items-center text-success-500 cursor-pointer hover:opacity-80 max-w-min"
                        onClick={addTutor}
                      >
                        <PlusCircleIcon className="w-6 h-6 text-success-500" />
                        <p className="font-encode-bold">Agregar</p>
                      </div>
                    )}
                  </>
                </div>
                <div className="pl-2">
                  <MinusCircleIcon
                    className="w-6 h-6 text-red-500 cursor-pointer hover:opacity-80"
                    onClick={() => removeTutor(i)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="border bg-primary-500 font-encode-bold text-white text-xl min-w-max w-full p-3 my-8 rounded-3xl hover:opacity-80">
          Enviar Solicitud
        </button>
      </div>
    </form>
  );
};

export default StudentFormScreen;

const Label = ({ text }: { text: string }) => <p className="pb-2 font-encode-bold text-sm">{text}</p>;
const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => (
  <span
    className={classNames(
      "pl-1 text-xs font-encode-bold font-sans text-red-500 mt-1'",
      errorMessage ? 'visible' : 'invisible'
    )}
  >
    {errorMessage ?? '-'}
  </span>
);

const Input = ({ register, name, label, errorMessage, rules, ...rest }) => (
  <div className="flex-col my-1 mr-1 flex flex-1">
    <Label text={label} />
    <input {...register(name, rules)} {...rest} className="border-black border rounded-xl h-10 p-2" />
    <ErrorMessage errorMessage={errorMessage} />
  </div>
);

const ControlledSelect = ({ name, control, options, label, errorMessage, rules }) => (
  <div className="flex flex-col my-1 mr-1">
    <Label text={label} />
    <div className="min-w-qualification-options">
      <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field }) => <Select {...field} options={options} />}
      />
    </div>
    <ErrorMessage errorMessage={errorMessage} />
  </div>
);

const ControlledDatePicker = ({ name, control, label, errorMessage, rules }) => (
  <div className="flex flex-col my-1 mr-1">
    <Label text={label} />
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => (
        <DatePicker {...field} onChange={(date) => field.onChange(date)} selected={field.value} locale="es" />
      )}
    />
    <ErrorMessage errorMessage={errorMessage} />
  </div>
);
