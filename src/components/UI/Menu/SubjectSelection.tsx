import React, { useMemo } from 'react';

import { useSubjects } from '../../../hooks/useSubjects';

type SubjectSelectionProps = {
  handleSubjectPick: (subject) => void;
};

const SubjectSelection = ({ handleSubjectPick }: SubjectSelectionProps) => {
  const { data, isLoading } = useSubjects();

  const subjects = useMemo(() => {
    if (data && data.length > 0) {
      const mapped = data?.map((subject) => ({
        ...subject,
        name: subject?.subject_name?.replace(/_/g, ' ') || '',
      }));

      const filtered = mapped.filter((s) => s.name.toLowerCase() !== 'observaciones');
      return filtered;
    }
    return [];
  }, [data]);

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="flex flex-col">
      <p className="text-left pb-2 font-encode-bold">Seleccione una materia</p>
      <div className="flex flex-row flex-wrap gap-2 max-w-3xl">
        {React.Children.toArray(
          subjects?.map((subject) => (
            <button
              className="max-w-sm w-80 shadow-xl border capitalize border-solid-gray-200 rounded-lg bg-white p-3 my-2 hover:bg-black hover:bg-opacity-20"
              onClick={() => handleSubjectPick(subject)}
            >
              {subject.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectSelection;
