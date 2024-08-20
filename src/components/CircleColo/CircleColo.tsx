import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
}

function CircleColo({ color, ...rest }: IProps) {
  return (
    <div
      className="w-6 h-6 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      {...rest}
    ></div>
  );
}

export default CircleColo;
