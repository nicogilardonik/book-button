import { useState } from "react";
import "./Modal.css";

const RentButton = ({ productid }) => {
  const redirectToCheckout = () => {
    const checkoutUrl = `${
      import.meta.env.VITE_BASE_CHECKOUT_URL
    }checkout?productId=${productid}`;
    window.open(checkoutUrl, "_blank", "width=800,height=600");
  };

  const buttonStyle = {
    margin: "0 auto",
    backgroundColor: "#5B27EC",
    cursor: "pointer",
    color: "white",
    padding: "0.8rem 1.8rem",
    border: "none",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#774BEE ",
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={redirectToCheckout}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Reservar
      </button>
    </div>
  );
};

export default RentButton;
