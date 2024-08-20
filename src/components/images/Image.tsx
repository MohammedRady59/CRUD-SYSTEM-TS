interface IImages {
  srcImage: string;
  alt: string;
  className: string;
}

function Image({ srcImage, alt, className }: IImages) {
  return <img src={srcImage} alt={alt} className={className} loading="lazy" />;
}

export default Image;
