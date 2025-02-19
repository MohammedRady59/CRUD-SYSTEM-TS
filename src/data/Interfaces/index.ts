export interface IProudct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: { name: string; imageURL: string };
}

export interface IFormInput {
  /*   id: keyof IProudct;*/
  id: "title" | "description" | "imageURL" | "price";
  name: string;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
