export function validtionError(proudectObj: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) {
  const errors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (
    !proudectObj.title.trim() ||
    proudectObj.title.length < 10 ||
    proudectObj.title.length > 80
  ) {
    errors.title = "Enter Title Between 10 and 80";
  }
  if (
    !proudectObj.description.trim() ||
    proudectObj.description.length < 10 ||
    proudectObj.description.length > 800
  ) {
    errors.description = "Enter description Between 10 and 80";
  }
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(proudectObj.imageURL);
  if (!proudectObj.imageURL.trim() || !validUrl) {
    errors.imageURL = `Enter vaild Image`;
  }
  if (!proudectObj.price.trim() || isNaN(Number(proudectObj.price))) {
    errors.price = `Enter Vaild Price`;
  }

  return errors;
}
