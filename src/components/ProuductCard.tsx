import Buttons from "./UI/Buttons/Buttons";
import Image from "./images/Image";
import { IProudct } from "../data/Interfaces/index.ts";
import { txtSlice } from "../assets/utilts/funcrions.ts";
function ProuductCard({
  detailProudct,
  setAllProudct,
  allProduct,
}: {
  detailProudct: IProudct;
  setAllProudct: (user: IProudct[]) => void;
  allProduct: IProudct[];
}) {
  function handleDelete() {
    const filtered = allProduct.filter((el) => el.id !== detailProudct.id);
    setAllProudct(filtered);
  }
  return (
    <div className="border-2 p-2 rounded-md flex flex-col justify-between ">
      <div>
        <div>
          <Image
            srcImage={detailProudct.imageURL}
            alt="ProudectOne"
            className="rounded-md w-full block"
          />
        </div>
        <div className="title py-2">
          <h3 className="text-lg text-black font-medium ">
            {detailProudct.title}
          </h3>
        </div>
        <div className="py-2 detail">
          <p className="text-sm">{txtSlice(detailProudct.description)}</p>
        </div>
        <div className="colors py-2 flex gap-2">
          {detailProudct.colors.map((el) => (
            <div
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ backgroundColor: el }}
              key={Math.random() * 6}
            ></div>
          ))}
        </div>
      </div>

      <div>
        {" "}
        <div className="money py-2 flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold text-blue-900">
              {detailProudct.price}$
            </p>
          </div>
          <div>
            <Image
              srcImage={detailProudct.category.imageURL}
              className="w-10 h-10 rounded-full block object-cover"
              alt={detailProudct.category.name}
            />
          </div>
        </div>
        <div className="py-2 flex items-center gap-2 text-white">
          <Buttons
            className=" btns  bg-red-700 "
            onClick={() => handleDelete()}
          >
            Delete
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ProuductCard;
