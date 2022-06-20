import React, { useMemo } from 'react';

import { useGrades } from '../../../hooks/useGrades';
import { parseGradeName } from '../../../utils/helper';
import Spinner from '../Spinner';

type Props = {
  handleGradePick: (grade: string, gradeTitle: string) => void;
};

const GradeSelection = ({ handleGradePick }: Props) => {
  const { data, isLoading } = useGrades();

  const grades = useMemo(() => {
    if (!data) return [];
    return data?.map((grade) => ({
      _id: grade._id,
      title: parseGradeName(grade),
    }));
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 max-w-xl items-center">
        <Spinner size={100} />
        <p>Cargando Grados</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 max-w-xl">
      <p className="text-left">Seleccione un grado</p>
      <div className="flex flex-row max-h-96 overflow-y-scroll no-scroll flex-wrap gap-2">
        {grades &&
          grades.length > 0 &&
          React.Children.toArray(
            grades?.map((grade) => (
              <button
                className="flex flex-1 items-center justify-center text-center shadow-xl border border-black rounded-lg bg-white min-w-qualification-options p-3 my-1 hover:bg-black hover:bg-opacity-20"
                onClick={() => handleGradePick(grade._id, grade.title)}
              >
                {grade.title}
              </button>
            ))
          )}
      </div>
    </div>
  );
};

export default GradeSelection;
