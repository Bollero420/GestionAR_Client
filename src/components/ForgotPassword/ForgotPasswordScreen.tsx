import classNames from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useResetPassword } from '../../hooks/useResetPassword';
import { NAVIGATOR } from '../../utils/constants';

const ForgotPasswordScreen = () => {
  const { mutateAsync: resetPassword, isLoading, isSuccess, isError } = useResetPassword();
  const history = useHistory();
  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
    control,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    window.alert('To be develop');
    await resetPassword(data);
  };

  useEffect(() => {
    if (isSuccess) {
      history.push(NAVIGATOR.sign_in);
    }
  }, [isSuccess]);

  return (
    <div className="no-scroll flex flex-1 w-full justify-center items-center">
      <form className="flex flex-col flex-1 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-10 text-2xl font-encode-bold uppercase">Recuperar Contraseña</h1>

        <div className="flex-col items-start w-full mb-4">
          <p className="pb-2">Username</p>
          <input
            id="123"
            name="username"
            disabled={false}
            type="text"
            className="border-black border h-10 p-2 w-full mb-1 rounded-xl"
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

        <div className="flex-col items-center w-full mt-6">
          <button className="border bg-primary-500 rounded-3xl text-white font-encode-bold text-xl min-w-max w-full p-3 my-8 hover:opacity-80">
            Recuperar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
