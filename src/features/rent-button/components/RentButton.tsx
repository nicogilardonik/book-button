import { useState } from "react";
import "./Modal.css";

const RentButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redirectToCheckout = () => {
    window.location.href = "https://tusitio.com/checkout";
  };

  const buttonStyle = {
    margin: "0 auto",
    backgroundColor: "green",
    cursor: "pointer",
    color: "white",
    padding: "0.6rem 1.2rem",
    border: "none",
  };

  return (
    <div>
      <button style={buttonStyle} onClick={openModal}>
        Reservar ahora
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirmar Reserva</h2>
            <p>¿Deseas continuar con el checkout de reserva?</p>
            <div className="modal-actions">
              <button onClick={redirectToCheckout}>Ir a Checkout</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentButton;
