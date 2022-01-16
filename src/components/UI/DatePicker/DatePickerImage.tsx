import classNames from 'classnames';
import styled from 'styled-components';

const ImageContainer = styled.div<{ marginRight?: boolean }>`
  height: 94%;
  margin-top: 1.25px;
  margin-right: ${(props) => props.marginRight && '1.5px'};

  @media (max-width: 768px) {
    margin-right: 1.5px;
  }
`;

type Props = {
  marginRight?: boolean;
};

const DatePickerImage = ({ marginRight }: Props) => (
  <ImageContainer
    marginRight={marginRight}
    className={classNames('absolute top-0 right-0 px-3 py-2 bg-gray-300 h-full', marginRight && 'rounded-r')}
  >
    <svg className=" w-6 h-6 text-gray-400" fill=" none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </ImageContainer>
);

export default DatePickerImage;
