import { useEffect, useState } from "react";
import "./index.css";
//import ikonat
import { FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
//import komponentet
import Header from "./Header";
import Logo from "./Logo";
import ShoppingBag from "./ShoppingBag";
import Hero from "./Hero";
import Search from "./Search";
import Loader from "./Loader";
import SideBar from "./SideBar";
import ProductDetails from "./ProductDetails";
import StaffSlider from "./StaffSlider";
import Services from "./Services";
import Footer from "./Footer";
// te dhenat e produkteve
import { ProductsData } from "./ProductsData";
export default function App() {
  const [products, setProducts] = useState(ProductsData);
  const [isOpen, setIsOpen] = useState(false);
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState("false");
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //hapja e sidebar
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  //shtimi i produkteve ne karte
  function AddtoCart(products, id) {
    const newProduct = { ...products, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //kontrollojme nese produkti eshte ne cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  }
  //hiq produktin nga cart
  function handleRemoveFromCart(id) {
    setCart((carts) => carts.filter((item) => item.id !== id));
  }
  //rrit sasine e nje produkti
  function handleIncreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    AddtoCart(cartItem, id);
  }
  //zvogelo sasine e nje produkti
  function handleDecreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      handleRemoveFromCart(id);
    }
  }
  //Cmimi total i produkteve
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrice(total);
  });
  //fshi te gjitha produktet nga cart
  function handleClearCart() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all shopping cart??"
    );
    if (confirmed) setCart([]);
  }
  //nr i produkteve te shtuara ne karte
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  //Product Details
  function handleEyeOpen(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }
  function handleEyeClose() {
    setQuery("");
    setIsLoading(true);
    setSelectedId(null);
  }
  useEffect(
    function () {
      async function getProducts() {
        setIsLoading(true);
        setError("");
        try {
          const res = await fetch(`https://fakestoreapi.com/products/`);
          if (!res.ok) throw new Error("Failed to fetch....");
          const data = await res.json();
          const filteredProducts = data.filter(
            (product) =>
              product.category === "men's clothing" ||
              product.category === "women's clothing"
          );
          setProducts(filteredProducts);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setProducts([]);
        setError("");
        return;
      }
      getProducts();
    },
    [query]
  );
  return (
    <>
      <Header>
        <Logo />
        <ShoppingBag onIsOpen={handleIsOpen} itemAmount={itemAmount} />
      </Header>
      <Hero />
      <Search query={query} setQuery={setQuery} />
      <Home>
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <Products>
            <Product
              products={products}
              AddtoCart={AddtoCart}
              onEyeOpen={handleEyeOpen}
              query={query}
            />
          </Products>
        )}
        {error && <ErrorMessage message={error} />}
        {selectedId && (
          <ProductDetails
            products={products}
            selectedId={selectedId}
            AddtoCart={AddtoCart}
            onEyeClose={handleEyeClose}
          />
        )}
      </Home>
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onIncreaseAmount={handleIncreaseAmount}
        onDecreaseAmount={handleDecreaseAmount}
        totalPrice={totalPrice}
        itemAmount={itemAmount}
      />
      <StaffSlider />
      <Services />
      <Footer />
    </>
  );
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}

function Home({ children }) {
  return (
    <div>
      <section className="section1">{children}</section>
    </div>
  );
}
function Products({ children }) {
  return <div className="container mx-auto">{children}</div>;
}

function Product({ products, AddtoCart, onEyeOpen, query }) {
  return (
    <div className="grid">
      {products
        .filter((row) => {
          if (query === "") {
            return row;
          } else if (row.title.toLowerCase().includes(query.toLowerCase())) {
            return row;
          }
        })
        .map((product) => (
          <ProductInfo
            key={product.id}
            products={product}
            AddtoCart={AddtoCart}
            onEyeOpen={onEyeOpen}
          />
        ))}
    </div>
  );
}
function ProductInfo({ products, AddtoCart, onEyeOpen }) {
  return (
    <div>
      <ProductImage
        products={products}
        AddtoCart={AddtoCart}
        onEyeOpen={onEyeOpen}
      />
      <ProductCategory products={products} />
    </div>
  );
}
function ProductImage({ products, AddtoCart, onEyeOpen }) {
  return (
    <div className="border">
      <div className="border_style">
        <div className="border_style_2">
          <img className="img" src={products.image} alt="" />
        </div>
        <div className="div_btn">
          <button onClick={() => AddtoCart(products, products.id)}>
            <div className="div_plus">
              <FaPlus className="plus" />
            </div>
          </button>
          <button className="eye" onClick={() => onEyeOpen(products.id)}>
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
}
function ProductCategory({ products }) {
  return (
    <div className="border_category">
      <div className="category">{products.category}</div>
      <h2 className="h2">{products.title}</h2>
      <h2 className="price">${products.price}</h2>
    </div>
  );
}
