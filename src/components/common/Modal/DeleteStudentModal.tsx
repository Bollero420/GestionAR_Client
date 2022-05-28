type Props = {
  student: any;
  closeModal: () => void;
};

export const DeleteStudentModal = ({ student, closeModal }: Props) => (
  <div className="flex flex-col items-center">
    <p className="mt-2 mb-6">
      ¿Estas seguro que desa borrar al Estudiante "{student.firstName} {student.lastName}"?
    </p>
    <button className="border hover:opacity-80 bg-success-500 rounded-3xl min-w-max w-full p-3 my-2 text-white font-encode-bold text-xl">
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
