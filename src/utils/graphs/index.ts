export const generateGraphData = (type: string, reportData: any[]) => {
  if (!reportData || reportData.length === 0) return [];

  if (type === 'bimonthly') {
    let graphData = [
      {
        label: 'Lengua',
        name: 'lengua',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Cs Sociales',
        name: 'ciencias_sociales',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Matematica',
        name: 'matematica',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Cs. Naturales',
        name: 'ciencias_naturales',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Tecnologia',
        name: 'tecnologia',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'F.E.C',
        name: 'formacion_etica_y_ciudadana',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Ed. Fisica',
        name: 'educacion_fisica',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Plastica',
        name: 'plastica',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Musica',
        name: 'musica',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Preocup. y Esfuerzo',
        name: 'worry_and_effort',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Resp. en Grupo',
        name: 'group_responsibility',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Sol. y Colab.',
        name: 'solidarity_and_collaboration',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
      {
        label: 'Resp. Norm. Conv.',
        name: 'respect_rules',
        NS: 0,
        S: 0,
        B: 0,
        MB: 0,
        E: 0,
      },
    ];

    const reportName = [
      'lengua',
      'ciencias_sociales',
      'matematica',
      'ciencias_naturales',
      'tecnologia',
      'formacion_etica_y_ciudadana',
      'educacion_fisica',
      'plastica',
      'musica',
      'worry_and_effort',
      'group_responsibility',
      'solidarity_and_collaboration',
      'respect_rules',
    ];

    reportData.forEach((st) => {
      reportName.forEach((key) => {
        const sectionIdx = graphData.findIndex((obj) => obj.name === key);
        const value = st[key];
        graphData[sectionIdx][value] = graphData[sectionIdx][value] + 1;
      });
    });
    return graphData;
  }
  return [];
};
