import ProductStarRating from "./ProductStarRating";
export default function ProductDetails({
  products,
  selectedId,
  AddtoCart,
  onEyeClose,
}) {
  const product = products.find((item) => {
    return item.id === parseInt(selectedId);
  });
  const { image, title, description, price } = product;
  return (
    <>
      <button onClick={onEyeClose} className="close">
        &times;
      </button>
      <section className="box_details">
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="img_txt_wrapper">
            {/*imazhi*/}
            <div className="div_details">
              <img src={image} alt="image" className="image_details" />
            </div>
            {/*titulli,cmimi,pershkrimi*/}
            <div className="div_text">
              <h1 className="title_details">{title}</h1>
              <div className="price_details">${price}</div>
              <p className="description_details">{description}</p>
              <p className="starRating">
                <p>
                  {" "}
                  <ProductStarRating />
                </p>
              </p>
              <button
                className="button_details"
                onClick={() => AddtoCart(product, product.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
