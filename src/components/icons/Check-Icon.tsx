import { FC } from "react";

interface Props {
  color?: string;
  size?: string;
}

const CheckIcon: FC<Props> = ({ color, size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || "24px"}
      viewBox="0 0 24 24"
      width={size || "24px"}
      fill={color || "#000"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  );
};

export default CheckIcon;
