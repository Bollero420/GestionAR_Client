import React, { useMemo } from 'react';

import { useGrades } from '../../../hooks/useGrades';
import { parseGradeName } from '../../../utils/helper';

type Props = {
  handleGradePick: (grade: string, gradeTitle: string) => void;
};

const GradeSelection = ({ handleGradePick }: Props) => {
  const { data } = useGrades();

  const grades = useMemo(() => {
    if (!data) return [];
    return data?.map((grade) => ({
      _id: grade._id,
      title: parseGradeName(grade),
    }));
  }, [data]);

  return (
    <div className="flex flex-col flex-1 max-w-lg">
      <p className="text-left">Seleccione un grado</p>
      <div className="flex flex-col max-h-96 overflow-y-scroll no-scroll">
        {grades &&
          grades.length > 0 &&
          React.Children.toArray(
            grades?.map((grade) => (
              <button
                className="border border-black rounded-lg bg-white min-w-qualification-options p-3 my-2"
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
