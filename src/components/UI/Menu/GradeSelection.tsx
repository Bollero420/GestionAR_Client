import React, { useMemo } from 'react';
import { useGrades } from '../../../hooks/useGrades';

type Props = {
  handleGradePick: (grade: string, gradeTitle: string) => void;
};

const parseGradeName = (grade:any) => {
  let name = '';
  switch (grade.level) {
    case 1:
      name = '1ero ';
      break;
    case 2:
      name = '2ndo '; 
      break;
    case 3:
      name = '3ero ';
      break;
    case 4:
      name = '4to ';
      break;
    case 5:
      name = '5to ';
      break;
    case 6:
      name = '6to ';
      break;
    case 7:
      name = '7to ';
      break;
  }
  return name + grade.section + ' ' + grade.shift
}

const GradeSelection = ({ handleGradePick }: Props) => {
  const { data } = useGrades();

  const grades = useMemo(() => {
    if (!data) return [];
    return data.map(grade => ({
      _id: grade._id,
      title: parseGradeName(grade)
    }))
  }, [data])
  
  return (
    <div>
      <p className="text-left">Grado</p>
      {(grades && grades.length > 0) && React.Children.toArray(
        grades.map((grade) => (
          <button
            className="border border-black rounded-lg bg-white min-w-max w-full p-3 my-2"
            onClick={() => handleGradePick(grade._id, grade.title)}
          >
            {grade.title}
          </button>
        ))
      )}
    </div>
  );
};

export default GradeSelection;
