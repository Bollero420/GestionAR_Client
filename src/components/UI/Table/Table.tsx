type Props = {
  children?: React.ReactNode;
};

const Table = ({ children }: Props) => {
  return <table className="w-full divide-gray-200">{children}</table>;
};

export default Table;
