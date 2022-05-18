import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

const TableHead: FC<Props> = ({ children }: Props) => {
  return <thead className="border-gray-400 border-solid bg-gray-500 dark:bg-gray-900">{children}</thead>;
};

export default TableHead;
