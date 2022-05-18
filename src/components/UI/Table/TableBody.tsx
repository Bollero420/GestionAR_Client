import { FC } from 'react';

type Props = {
  children?: any;
};

const TableBody: FC<Props> = ({ children }: Props) => {
  return <tbody className="bg-white dark:bg-gray-900 dark:divide-gray-700">{children}</tbody>;
};

export default TableBody;
