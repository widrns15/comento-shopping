const ProductCard = ({ Name, Description, Thumnail }) => {
  return (
    <div>
      <img width={200} src={Thumnail} alt={Name} />
      <div>{Name}</div>
      <div>{Description}</div>
    </div>
  );
};

export default ProductCard;
