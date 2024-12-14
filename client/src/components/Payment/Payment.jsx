import { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/payment/{userId}");
      window.location.href = res.data.paymentUrl;
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <button
        className="bg-green-500 text-white p-2"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;
