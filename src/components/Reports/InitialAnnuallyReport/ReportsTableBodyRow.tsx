import React from 'react';

import { TableRow } from '../../UI/Table';

import { getAgeKey } from '../../../utils/helper';

export const GenderByGradesTableBodyRow = ({ data }) => {
  const { row } = data;
  const keyByRow = row === 'female' ? 'F' : row === 'male' ? 'M' : 'T';

  const colNames = ['total', '1', '2', '3', '4', '5', '6', '7'];

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{keyByRow}</div>
      </td>
      {React.Children.toArray(
        colNames.map((col) => (
          <td>
            <div className="text-sm text-center">{data[`_${col}_${row}`]}</div>
          </td>
        ))
      )}
    </TableRow>
  );
};

export const FoodServiceByGendersTableBodyRow = ({ data }) => {
  const { row } = data;
  const keyByRow = row === 'copa_de_leche' ? 'COPA DE LECHE' : 'ALMUERZO';

  const colNames = ['female', 'male', 'total'];

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{keyByRow}</div>
      </td>
      {React.Children.toArray(
        colNames.map((col) => (
          <td>
            <div className="text-sm text-center">{data[col]}</div>
          </td>
        ))
      )}
    </TableRow>
  );
};

export const RepeatersByGenderTableBodyRow = ({ data }) => {
  const { row } = data;
  const keyByRow =
    row === 'total'
      ? 'TOTAL'
      : row === 'first'
      ? 'Por 1era vez'
      : row === 'second'
      ? 'Por 2nda vez'
      : row === 'third'
      ? 'Por 3era vez'
      : 'Por 4ta vez';

  const colNames = ['1', '2', '3', '4', '5', '6', '7'];

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{keyByRow}</div>
      </td>
      {React.Children.toArray(
        colNames.map((col) => {
          const prefix = row !== 'total' ? `_${col}_` : `_${col}_total_`;
          return (
            <>
              <td>
                <div className="text-sm text-center">{data[`${prefix}female`]}</div>
              </td>
              <td>
                <div className="text-sm text-center">{data[`${prefix}male`]}</div>
              </td>
              <td>
                <div className="text-sm text-center">{data[`${prefix}total`]}</div>
              </td>
            </>
          );
        })
      )}
    </TableRow>
  );
};

export const StudentsByAgeAndGenderTableBodyRow = ({ data }) => {
  const { row } = data;
  const keyByRow = getAgeKey(row);

  const colNames = ['total', '1', '2', '3', '4', '5', '6', '7'];
  const availableValues = Object.keys(data);

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center">{keyByRow}</div>
      </td>
      {React.Children.toArray(
        colNames.map((col) => {
          const hasFMT =
            availableValues.includes(`_${col}_female`) ||
            availableValues.includes(`_${col}_male`) ||
            availableValues.includes(`_${col}total`);
          return (
            <>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_female`] : '-'}</div>
              </td>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_male`] : '-'}</div>
              </td>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_total`] : '-'}</div>
              </td>
            </>
          );
        })
      )}
    </TableRow>
  );
};

export const StudentsByCountryAndGenderTableBodyRow = ({ data }) => {
  const { row } = data;
  const colNames = ['total', '1', '2', '3', '4', '5', '6', '7'];

  const availableValues = Object.keys(data);

  return (
    <TableRow className="cursor-pointer hover:bg-black hover:bg-opacity-20">
      <td>
        <div className="text-center capitalize">{row}</div>
      </td>
      {React.Children.toArray(
        colNames.map((col) => {
          const hasFMT =
            availableValues.includes(`_${col}_female`) ||
            availableValues.includes(`_${col}_male`) ||
            availableValues.includes(`_${col}total`);
          return (
            <>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_female`] : '-'}</div>
              </td>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_male`] : '-'}</div>
              </td>
              <td>
                <div className="text-sm text-center">{hasFMT ? data[`_${col}_total`] : '-'}</div>
              </td>
            </>
          );
        })
      )}
    </TableRow>
  );
};
