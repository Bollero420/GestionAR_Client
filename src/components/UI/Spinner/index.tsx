type Props = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 25, color = '#37BBED' }: Props) => (
  <div className="animate-pulse">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: 'rgba(0, 0, 0, 0)',
        WebkitAnimationPlayState: 'running',
        animationPlayState: 'running',
        WebkitAnimationDelay: '0s',
        animationDelay: '0s',
      }}
      width={size}
      height={size}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox={`0 0 ${size / 2} ${size / 2}`}
    >
      <circle
        cx={size / 4}
        cy={size / 4}
        r={(size * 35) / 200}
        fill="none"
        stroke={color}
        strokeDasharray={`${(size * 164.93361431346415) / 200} ${(size * 56.97787143782138) / 200}`}
        strokeWidth={(size * 10) / 200}
        style={{
          WebkitAnimationPlayState: 'running',
          animationPlayState: 'running',
          WebkitAnimationDelay: '0s',
          animationDelay: '0s',
        }}
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values={`0 ${size / 4} ${size / 4};360 ${size / 4} ${size / 4}`}
        ></animateTransform>
      </circle>
    </svg>
  </div>
);

export default Spinner;
