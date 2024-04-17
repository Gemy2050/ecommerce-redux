import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
} from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart my-4">
      <div className="container">
        <h1 className="text-center mb-5">Cart</h1>
        {cart.map((el) => {
          return (
            <div
              key={el.id}
              className="row g-3 mb-5 justify-content-center align-items-center"
            >
              <div className="col-sm-4 text-center">
                <img
                  src={el.image}
                  alt={el.title}
                  style={{ width: "180px", height: "150px" }}
                />
              </div>
              <div className="col-sm-8 text-center mb-5">
                <h5>{el.title}</h5>
                <p className="text-black-50">
                  {el.quantity} x ${el.price} = $
                  {(el.quantity * el.price).toFixed(2)}
                </p>
                <button
                  className="btn btn-outline-dark me-3"
                  onClick={() => dispatch(decreaseCartQuantity(el))}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-danger me-3"
                  onClick={() => dispatch(removeFromCart(el))}
                >
                  <i className="fa fa-trash"></i>
                </button>
                <button
                  className="btn btn-outline-dark "
                  onClick={() => dispatch(addToCart(el))}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          );
        })}
        {cart.length > 0 ? (
          <h2 className="border-top py-4 text-center">
            Total Price: $
            {cart
              .reduce((acc, item) => {
                return (acc += item.price * item.quantity);
              }, 0)
              .toFixed(2)}
          </h2>
        ) : (
          <h2 className="border-top py-4 text-center">
            Cart is Empty <br />
            <Link to="/products" className="btn btn-outline-dark my-3">
              Browse Products
            </Link>
          </h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
