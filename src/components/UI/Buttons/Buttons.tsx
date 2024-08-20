import { ReactNode, ButtonHTMLAttributes } from "react";

interface IBtns extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
function Buttons({ children, className, ...rest }: IBtns) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Buttons;
