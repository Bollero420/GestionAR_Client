type Props = {
  confirm: () => void;
  closeModal: () => void;
};

export const LogOutModal = ({ confirm, closeModal }: Props) => (
  <div className="flex flex-col items-center">
    <p>¿Cerrar Sesión?</p>
    <button className="border hover:bg-opacity-40 bg-green-400 rounded min-w-max w-full p-3 my-2" onClick={confirm}>
      Confirmar
    </button>
    <button className="border hover:bg-opacity-40 bg-red-400 rounded min-w-max w-full p-3 my-2" onClick={closeModal}>
      Cancelar
    </button>
  </div>
);
