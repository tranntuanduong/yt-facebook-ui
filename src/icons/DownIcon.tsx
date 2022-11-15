import { colors } from "colors";

interface Props {
  color?: string;
}

const DownIcon = ({ color = colors.textColor1 }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      fill={color}
      className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="nonzero"
        d="M452.707 549.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L456 552.586l-3.293-3.293z"
        transform="translate(-448 -544)"
      ></path>
    </svg>
  );
};

export default DownIcon;
