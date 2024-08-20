interface IProps {
  msg: string;
}

function ErrorColor({ msg }: IProps) {
  return (
    <span className="block  text-red-700 text-sm font-semibold ">{msg}</span>
  );
}

export default ErrorColor;
