type Props = {
  confirm: () => void;
  closeModal: () => void;
};

export const LogOutModal = ({ confirm, closeModal }: Props) => (
  <div className="flex flex-col items-center">
    <p>¿Cerrar Sesión?</p>
    <button
      className="border hover:opacity-80 bg-success-500 rounded-3xl min-w-max w-full p-3 my-2 text-white font-encode-bold text-xl"
      onClick={confirm}
    >
      Confirmar
    </button>
    <button
      className="border hover:opacity-80 bg-red-400 rounded-3xl min-w-max w-full p-3 my-2 text-white font-encode-bold text-xl"
      onClick={closeModal}
    >
      Cancelar
    </button>
  </div>
);
