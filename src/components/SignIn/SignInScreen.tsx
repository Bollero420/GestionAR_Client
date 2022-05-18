import classNames from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useSignIn } from '../../hooks/useSignIn';
import { NAVIGATOR } from '../../utils/constants';

const SignInScreen = () => {
  const { mutateAsync: signIn, isLoading, isSuccess, isError, error } = useSignIn();

  const history = useHistory();
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
    control,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await signIn(data);
  };

  useEffect(() => {
    if (isSuccess) {
      history.push(NAVIGATOR.main);
    }
  }, [isSuccess]);

  return (
    <div className="no-scroll flex-col flex flex-1 w-full justify-center items-center">
      <form className="flex flex-col w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mt-8 mb-4 text-2xl font-encode-bold">Ingresá a tu cuenta</h1>

        <div className="flex-col items-start w-full">
          <p className="pb-2">Usuario</p>
          <input
            id="123"
            name="username"
            disabled={false}
            type="text"
            className="border-black border rounded-xl h-10 p-2 w-full"
            {...register('username', { required: 'Requerido' })}
          />
          <span
            className={classNames(
              "pl-2 text-xs font-encode-bold font-sans text-red-500 mt-1'",
              formErrors?.username?.message ? 'visible' : 'invisible'
            )}
          >
            {formErrors?.username?.message ?? '-'}
          </span>
        </div>

        <div className="flex-col items-start w-full mt-6">
          <p className="pb-2">Contraseña</p>
          <input
            id="124"
            name="password"
            disabled={false}
            type="password"
            className="border-black border rounded-xl h-10 p-2 w-full"
            {...register('password', { required: 'Requerido' })}
          />
          <span
            className={classNames(
              "pl-2 text-xs font-encode-bold font-sans text-red-500 mt-1'",
              formErrors?.password?.message ? 'visible' : 'invisible'
            )}
          >
            {formErrors?.password?.message ?? '-'}
          </span>
          {isError && (
            <span className="pl-2 text-xs font-encode-bold font-sans text-red-500 mt-1'">{error?.response?.data}</span>
          )}
          <p
            className="text-right text-xs cursor-pointer underline text-primary-500"
            onClick={() => history.push(NAVIGATOR.forgot_password)}
          >
            ¿Olvidaste tu contraseña?
          </p>
        </div>

        <div className="flex-col items-center w-full mt-4">
          <button className="border bg-success-500 rounded-3xl min-w-max w-full p-3 my-8 text-white font-encode-bold text-xl hover:opacity-80">
            Ingresar
          </button>
        </div>
      </form>
      <div className="flex-col items-center w-full max-w-lg">
        <p className="font-encode-bold text-black text-xl">¿No tenés cuenta?</p>
        <button
          className="border bg-primary-500 rounded-3xl min-w-max w-full p-3 my-8 text-white font-encode-bold text-xl cursor-pointer hover:opacity-80"
          onClick={() => history.push(NAVIGATOR.student_form)}
        >
          Creá tu cuenta
        </button>
      </div>
    </div>
  );
};

export default SignInScreen;
