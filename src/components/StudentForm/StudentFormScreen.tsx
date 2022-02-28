import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useStudentRegistration } from '../../hooks/useStudentRegistration';
import {
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
} from '../../utils/constants';
import DatePicker from '../UI/DatePicker';
import Select from '../UI/Select';

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
    console.log({ registerStudent: data });
    // registerStudent(request);
  };

  const watchDisability = watch('disability', 'NO');
  const watchHasSiblings = watch('has_siblings', 'NO');
  const siblings_items = watch('siblings');
  const tutors_items = watch('student_tutors');

  if (isSuccess)
    return (
      <div className="flex flex-col items-center h-screen bg-yellow-100 max-h-screen">
        <div className="bg-white flex flex-col space-y-4">
          <p>TU SOLICITUD DE INCRIPCION DE CICLO LECTIVO 2021 HA SIDO REGISTRADA CON EXITO!</p>
          <p>PRONTO RECIBIRAS NOTICIAS EN LAS DIRECCIONES DE MAIL PROPORCIONADAS.</p>
          <p>GRACIAS!</p>
        </div>
      </div>
    );

  return (
    <form
      className="flex flex-col items-center h-screen bg-yellow-100 max-h-screen"
      onSubmit={reactFormHandleSubmit(onSubmit)}
    >
      <h1 className="text-center">SOLICITUD DE INCRIPCION DE CICLO LECTIVO {new Date().getFullYear()}</h1>
      <div className="flex flex-row items-center justify-center mb-2">
        <div className="flex flex-row items-center">
          <p className="mr-2 font-bold">Escuela: </p>
          <p>Escuela Rio Parana n°156</p>
        </div>
        <div className="flex flex-row items-center">
          <ControlledSelect
            control={control}
            label="Grado"
            options={GRADES_SELECT_OPTIONS}
            name="grade.level"
            errorMessage={formErrors?.grade?.level?.message}
          />
          <ControlledSelect
            control={control}
            label="Secc."
            options={SECTION_SELECT_OPTIONS}
            name="grade.section"
            errorMessage={formErrors?.grade?.section?.message}
          />
          <ControlledSelect
            control={control}
            label="Turno"
            options={SHIFT_SELECT_OPTIONS}
            name="grade.shift"
            errorMessage={formErrors?.grade?.shift?.message}
          />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-student-form-section overflow-y-scroll">
        <div className="border border-black rounded-lg flex flex-col my-3 p-2 mx-2">
          <h1 className="text-center font-bold">Datos Personales del Alumno</h1>
          <div className="flex flex-row flex-wrap">
            <Input register={register} label="Nombre" name="firstName" errorMessage={formErrors?.firstName?.message} />
            <Input register={register} label="Apellido" name="lastName" errorMessage={formErrors?.lastName?.message} />
            <Input register={register} label="DNI" name="dni" errorMessage={formErrors?.dni?.message} />
            <Input
              register={register}
              label="Email"
              name="emailAddress"
              errorMessage={formErrors?.emailAddress?.message}
            />
            <ControlledSelect
              name="gender"
              control={control}
              options={GENDER_OPTIONS}
              label="Sexo"
              errorMessage={formErrors?.gender?.message}
            />
            <ControlledDatePicker
              name="birth_date"
              control={control}
              label="Fecha de Nacimiento"
              errorMessage={formErrors?.birth_date?.message}
            />
            <Input register={register} label="Localidad" name="location" errorMessage={formErrors?.location?.message} />
            <Input
              register={register}
              label="Nacionalidad"
              name="country"
              errorMessage={formErrors?.country?.message}
            />
            <Input
              register={register}
              label="Escuela a la que asistió"
              name="previous_school"
              errorMessage={formErrors?.previous_school?.message}
            />
            <ControlledSelect
              name="integrated"
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="En Proyecto de Integracion "
              errorMessage={formErrors?.repeating_quantity?.message}
            />
            <ControlledSelect
              name="repeating_quantity"
              control={control}
              options={REPEATING_QUANTITY_OPTIONS}
              label="Repitente"
              errorMessage={formErrors?.repeating_quantity?.message}
            />
          </div>
          <div className="flex flex-row flex-wrap items-center">
            <h2 className="pl-2 pr-2 font-bold">Domicilio:</h2>
            <Input register={register} label="Calle" name="address" errorMessage={formErrors?.address?.message} />
            <Input register={register} label="Piso" name="floor" errorMessage={formErrors?.floor?.message} />
            <Input register={register} label="Depto" name="apartment" errorMessage={formErrors?.apartment?.message} />
            <Input
              register={register}
              label="Barrio"
              name="neighborhood"
              errorMessage={formErrors?.neighborhood?.message}
            />
            <Input
              register={register}
              label="Localidad"
              name="address_location"
              errorMessage={formErrors?.address_location?.message}
            />
            <Input register={register} label="Telefono" name="phone" errorMessage={formErrors?.phone?.message} />
            <Input
              register={register}
              label="Telefono alt."
              name="alternative_phone"
              errorMessage={formErrors?.alternative_phone?.message}
            />
            <ControlledSelect
              name="school_radio"
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="Pertenece al radio escolar"
              errorMessage={formErrors?.school_radio?.message}
            />
            <Input
              register={register}
              label="Centro de Salud"
              name="medical_center"
              errorMessage={formErrors?.medical_center?.message}
            />

            <ControlledSelect
              name="disability"
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="Discapacidad"
              errorMessage={formErrors?.disability?.message}
            />

            {watchDisability?.toUpperCase() === 'YES' && (
              <Input
                register={register}
                label="Tipo de discapacidad"
                name="disability_type"
                errorMessage={formErrors?.disability_type?.message}
              />
            )}
            <ControlledSelect
              name="school_dining"
              control={control}
              options={SERVICE_OPTIONS}
              label="Servicio Alimenticio"
              errorMessage={formErrors?.school_dining?.message}
            />
            <ControlledSelect
              name="cooperator"
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="Se asocia a cooperadora"
              errorMessage={formErrors?.cooperator?.message}
            />
            <ControlledSelect
              name="has_siblings"
              control={control}
              options={YES_AND_NO_OPTIONS}
              label="Tiene hermanos en la escuela?"
              errorMessage={formErrors?.has_siblings?.message}
            />
          </div>
          <div className="flex flex-col justify-center">
            {watchHasSiblings === 'YES' &&
              siblings_fields.map((sibling, i) => (
                <div className="flex flex-col" key={'student_sibling -' + i + sibling?.id}>
                  <div className="flex flex-row items-center mb-2">
                    <div className="border border-black rounded-lg flex flex-row flex-wrap bg-white self-center">
                      <Input
                        register={register}
                        label="Nombre"
                        name={`siblings.${i}.firstName`}
                        errorMessage={''}
                        // errorMessage={formErrors?.siblings[i]?.firstName?.message}
                      />
                      <Input
                        register={register}
                        label="Apellido"
                        name={`siblings.${i}.lastName`}
                        errorMessage={''}
                        // errorMessage={formErrors?.siblings[i]?.lastName?.message}
                      />
                      <Input
                        register={register}
                        label="DNI"
                        name={`siblings.${i}.dni`}
                        errorMessage={''}
                        // errorMessage={formErrors?.siblings[i]?.dni?.message}
                      />
                      <ControlledSelect
                        name={`siblings.${i}.gender`}
                        control={control}
                        options={GENDER_OPTIONS}
                        label="Sexo"
                        errorMessage={''}
                        // errorMessage={formErrors?.siblings[i]?.gender?.message}
                      />
                      <ControlledDatePicker
                        name={`siblings.${i}.birth_date`}
                        control={control}
                        label="Fecha de Nacimiento"
                        errorMessage={''}
                        // errorMessage={formErrors?.siblings[i]?.birth_date?.message}
                      />
                      <div className="flex flex-row items-center">
                        <ControlledSelect
                          control={control}
                          label="Grado"
                          options={GRADES_SELECT_OPTIONS}
                          name={`siblings.${i}.grade.level`}
                          errorMessage={''}
                          //   errorMessage={formErrors?.siblings[i]?.grade?.level?.message}
                        />
                        <ControlledSelect
                          control={control}
                          label="Secc."
                          options={SECTION_SELECT_OPTIONS}
                          name={`siblings.${i}.grade.section`}
                          errorMessage={''}
                          //   errorMessage={formErrors?.siblings[i]?.grade?.section.message}
                        />
                        <ControlledSelect
                          control={control}
                          label="Turno"
                          options={SHIFT_SELECT_OPTIONS}
                          name={`siblings.${i}.grade.shift`}
                          errorMessage={''}
                          //   errorMessage={formErrors?.siblings[i]?.grade?.shift?.message}
                        />
                      </div>
                    </div>
                    <div className="pl-1">
                      <MinusCircleIcon
                        className="w-6 h-6 text-red-500 cursor-pointer"
                        onClick={() => removeSibling(i)}
                      />
                    </div>
                  </div>
                  {i === siblings_items.length - 1 && siblings_items.length < 4 && (
                    <button
                      className="self-center border bg-green-400 rounded w-44 p-3 mt-2 text-sm"
                      onClick={addSibling}
                    >
                      Agregar Hermano/a
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col border border-black rounded-lg p-2 my-3 mx-2">
          <h1 className="text-center font-bold">Datos de los Tutores</h1>
          {tutors_fields?.map((tutor, i) => (
            <div className="flex flex-col" key={'student_tutor -' + i + tutor?.id}>
              <div className="flex flex-row items-center justify-between pr-2">
                <h2 className="font-bold pl-2">Padre/Madre/Tutor</h2>
                <MinusCircleIcon className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => removeTutor(i)} />
              </div>
              <div className="border border-black rounded-lg flex flex-row items-center mt-2 flex-wrap bg-white">
                <Input
                  register={register}
                  label="Nombre"
                  name={`student_tutors.${i}.firstName`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.firstName?.message}
                />
                <Input
                  register={register}
                  label="Apellido"
                  name={`student_tutors.${i}.lastName`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.lastName?.message}
                />
                <Input
                  register={register}
                  label="DNI"
                  name={`student_tutors.${i}.dni`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.dni?.message}
                />
                <ControlledSelect
                  name={`student_tutors.${i}.gender`}
                  control={control}
                  options={GENDER_OPTIONS}
                  label="Sexo"
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.gender?.message}
                />
                <ControlledDatePicker
                  name={`student_tutors.${i}.birth_date`}
                  control={control}
                  label="Fecha de Nacimiento"
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.birth_date?.message}
                />
                <Input
                  register={register}
                  label="Nacido en"
                  name={`student_tutors.${i}.location`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.location?.message}
                />
                <ControlledSelect
                  name={`student_tutors.${i}.civil_status`}
                  control={control}
                  options={CIVIL_STATUS_OPTIONS}
                  label="Estado Civil"
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.civil_status?.message}
                />
                <Input
                  register={register}
                  label="Ocupacion"
                  name={`student_tutors.${i}.job`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.job?.message}
                />

                <Input
                  register={register}
                  label="Telefono Fijo"
                  name={`student_tutors.${i}.phone`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.phone?.message}
                />

                <Input
                  register={register}
                  label="Celular"
                  name={`student_tutors.${i}.alternative_phone`}
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.alternative_phone?.message}
                />
                <div className="flex flex-row flex-wrap items-center">
                  <h2 className="pl-2 pr-2 font-bold">Domicilio:</h2>
                  <Input
                    register={register}
                    label="Calle"
                    name={`student_tutors.${i}.address`}
                    errorMessage={''}
                    // errorMessage={formErrors?.student_tutors[i]?.address?.message}
                  />
                  <Input
                    register={register}
                    label="Piso"
                    name={`student_tutors.${i}.floor`}
                    errorMessage={''}
                    // errorMessage={formErrors?.student_tutors[i]?.floor?.message}
                  />
                  <Input
                    register={register}
                    label="Depto"
                    name={`student_tutors.${i}.apartment`}
                    errorMessage={''}
                    // errorMessage={formErrors?.student_tutors[i]?.apartment?.message}
                  />
                </div>
                <ControlledSelect
                  name={`student_tutors.${i}.educational_level`}
                  control={control}
                  options={EDUCATIONAL_LEVEL_OPTIONS}
                  label="Tipo Escolaridad"
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.educational_level?.message}
                />

                <ControlledSelect
                  name={`student_tutors.${i}.other_info`}
                  control={control}
                  options={OTHER_INFO_OPTIONS}
                  label="Ocupación Laboral"
                  errorMessage={''}
                  // errorMessage={formErrors?.student_tutors[i]?.other_info?.message}
                />
              </div>
              {i === tutors_items.length - 1 && tutors_items.length < 3 && (
                <button className="self-center border bg-green-400 rounded w-56 p-3 mt-2 text-sm" onClick={addTutor}>
                  Agregar Padre/Madre/Tutor
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="border bg-blue-400 rounded min-w-max w-full p-3 my-8">Enviar Solicitud</button>
      </div>
    </form>
  );
};

export default StudentFormScreen;

const Input = ({ register, name, label, errorMessage, ...rest }) => (
  <div className="flex flex-col my-2">
    <div className="flex flex-row items-center pl-2">
      <p className="pr-2">{label}</p>
      <input {...register(name)} {...rest} className="border-black border rounded h-10 p-2 " />
    </div>
    {errorMessage && <span className="pl-2 text-xs font-bold font-sans text-red-500 mt-1'">{errorMessage}</span>}
  </div>
);

const ControlledSelect = ({ name, control, options, label, errorMessage }) => (
  <div className="flex flex-col my-2">
    <div className="flex flex-row items-center pl-2 pr-1">
      <p className="mr-2">{label}</p>
      <div className="min-w-qualification-options">
        <Controller name={name} control={control} render={({ field }) => <Select {...field} options={options} />} />
      </div>
    </div>
    {errorMessage && <span className="pl-2 text-xs font-bold font-sans text-red-500 mt-1'">{errorMessage}</span>}
  </div>
);

const ControlledDatePicker = ({ name, control, label, errorMessage }) => (
  <div className="flex flex-col my-2">
    <div className="flex flex-row items-center pl-2">
      <p className="mr-2">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker {...field} onChange={(date) => field.onChange(date)} selected={field.value} borderRight />
        )}
      />
    </div>
    {errorMessage && <span className="pl-2 text-xs font-bold font-sans text-red-500 mt-1'">{errorMessage}</span>}
  </div>
);
