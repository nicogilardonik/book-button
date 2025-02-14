import { useState } from "react";
import "./Modal.css";

const RentButton = ({ productId }) => {
  const redirectToCheckout = () => {
    const checkoutUrl = `https://google.com/checkout?productId=${productId}`;
    window.open(checkoutUrl, "_blank", "width=800,height=600");
  };

  const buttonStyle = {
    margin: "0 auto",
    backgroundColor: "#732DE9",
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
    backgroundColor: "#8c4ff0",
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
