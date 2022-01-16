import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

type Props = {
  isProcessing?: boolean;
  errorMessage: string;
  disabled?: boolean;
  children?: JSX.Element;
  childrenClassName?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'id' | 'name'>;

const TextArea = ({ errorMessage, disabled, children, childrenClassName, isProcessing, className, ...rest }: Props) => {
  const commonClassName = classNames(
    'w-full px-3 py-4 text-sm font-sen border border-gray-400 rounded-md focus:outline-none resize-none',
    isProcessing && 'animate-pulse'
  );

  const TextAreaElement = children ? (
    <div className="relative">
      <span className={classNames('absolute inset-y-0 left-0 flex', childrenClassName)}>{children}</span>
      <textarea {...rest} rows={4} disabled={disabled} className={classNames(commonClassName, className)} />
    </div>
  ) : (
    <textarea {...rest} className={commonClassName} rows={4} disabled={disabled} />
  );

  return (
    <div>
      {TextAreaElement}
      {errorMessage && (
        <span className={classNames('text-xs font-bold font-sans text-red-500 mt-1', className)}>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextArea;
