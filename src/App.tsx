import ProuductCard from "./components/ProuductCard";
import "./index.css";
import {
  productList,
  formInputList,
  colors,
  categories,
} from "./data/index.ts";
import Modal from "./components/UI/Model/Model.tsx";
import { useState, ChangeEvent, FormEvent } from "react";
import Buttons from "./components/UI/Buttons/Buttons.tsx";
import Input from "./components/UI/Inputs/Input.tsx";
import { IProudct } from "./data/Interfaces/index.ts";
import { validtionError } from "./Validtion/index.ts";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg.tsx";
import CircleColo from "./components/CircleColo/CircleColo.tsx";
import { v4 as uuid } from "uuid";
import Select from "./components/UI/Select/Select.tsx";
import ErrorColor from "./components/ErrorColor/ErrorColor.tsx";

function App() {
  /* State */
  const [allProduct, setAllProudct] = useState<IProudct[]>(productList);

  const [proudcts, setProduct] = useState<IProudct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [errorColor, setErrorColor] = useState("");

  const [colorList, setColorList] = useState<string[]>([]);
  const [selected, setSelected] = useState(categories[0]);

  const [openForm, setOpen] = useState(false);
  /* Function handle State */
  function handleOpen() {
    setOpen(!openForm);
  }

  function onChangehandle(e: ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setProduct({
      ...proudcts,
      [id]: value,
    });
    setErrorMsg({
      ...errorMsg,
      [id]: "",
    });
    setErrorColor("");
  }

  function submitHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validtionError({
      title: proudcts.title,
      description: proudcts.description,
      imageURL: proudcts.imageURL,
      price: proudcts.price,
    });

    const errorMsgIf =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "") &&
      colorList.length !== 0;
    if (errorMsgIf) {
      setAllProudct((items) => [
        ...items,
        { ...proudcts, id: uuid(), colors: colorList, category: selected },
      ]);
      handleOpen();
      setColorList([]);
      setErrorColor("");
    } else {
      setErrorMsg(errors);
      setErrorColor("Enter Color Please");
    }
  }

  function onCancelForm() {
    setOpen(!openForm);
  }
  function handleColors(newColor: string) {
    setErrorColor("");
    if (colorList.includes(newColor)) {
      setColorList((items) => items.filter((col) => col != newColor));
    } else {
      setColorList((items) => [...items, newColor]);
    }
  }

  /* Renders */
  const renderInputs = formInputList.map((el) => (
    <div
      className="flex flex-col gap-2 mb-2 font-medium  text-gray-700 "
      key={el.id}
    >
      <label htmlFor={el.id}>{el.label}</label>
      <Input
        type={el.type}
        name={el.name}
        id={el.id}
        value={proudcts[el.id]}
        onChange={onChangehandle}
      />
      <ErrorMsg msg={errorMsg[el.id]} />
    </div>
  ));

  const renderColors = colors.map((el) => (
    <CircleColo color={el} key={el} onClick={() => handleColors(el)} />
  ));
  return (
    <main className="container">
      <div className="flex justify-end py-2">
        <Buttons
          className="btns w-fit  bg-indigo-700 text-white"
          onClick={handleOpen}
        >
          Add
        </Buttons>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5">
        {allProduct.map((proudct) => (
          <ProuductCard
            key={proudct.id}
            setAllProudct={setAllProudct}
            allProduct={allProduct}
            detailProudct={proudct}
          />
        ))}
      </div>
      {openForm && (
        <Modal handleOpen={handleOpen} openForm={openForm}>
          <form className="space-y-2" onSubmit={submitHandle}>
            {renderInputs}

            <div>
              <Select selected={selected} setSelected={setSelected} />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {renderColors}
              <ErrorColor msg={errorColor} />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {colorList.map((el) => (
                <span
                  style={{ backgroundColor: el }}
                  className={`p-1 mr-1 mb-1  rounded-md text-sm text-white`}
                  key={el}
                >
                  {el}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-white">
              <Buttons className="btns  bg-indigo-700">Submit</Buttons>
              <Buttons className="btns  bg-gray-700" onClick={onCancelForm}>
                Cencel
              </Buttons>
            </div>
          </form>
        </Modal>
      )}
    </main>
  );
}

export default App;
