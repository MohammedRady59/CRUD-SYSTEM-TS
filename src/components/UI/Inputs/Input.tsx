import { InputHTMLAttributes } from "react";
interface IPorps extends InputHTMLAttributes<HTMLInputElement> {}
function Input({ ...rest }: IPorps) {
  return (
    <>
      <input
        className="border-[1px]  rounded-md border-gray-300 shadow-md p-3 focus:border-indigo-300 focus:outline-none focus:ring-2 text-md"
        {...rest}
      />
    </>
  );
}

export default Input;
