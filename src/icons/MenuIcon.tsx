import { colors } from "colors";

interface Props {
  color?: string;
}

const MenuIcon = ({ color = colors.textColor1 }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      fill={color}
      className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
      viewBox="0 0 44 44"
    >
      <circle cx="7" cy="7" r="6"></circle>
      <circle cx="22" cy="7" r="6"></circle>
      <circle cx="37" cy="7" r="6"></circle>
      <circle cx="7" cy="22" r="6"></circle>
      <circle cx="22" cy="22" r="6"></circle>
      <circle cx="37" cy="22" r="6"></circle>
      <circle cx="7" cy="37" r="6"></circle>
      <circle cx="22" cy="37" r="6"></circle>
      <circle cx="37" cy="37" r="6"></circle>
    </svg>
  );
};

export default MenuIcon;
