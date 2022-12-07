import { useState } from "react";
import React from "react";
import { FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";

function SelectQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increment = () =>
    setQuantity(quantity === 10 ? quantity : quantity + 1);
  const decrement = () => setQuantity(quantity === 0 ? quantity : quantity - 1);

  return <div class="control">
    
    <FaChevronCircleDown alt="down" class="arrow_dec" onClick={decrement} />
    <span class="quant">{quantity}</span>
    <FaChevronCircleUp alt="up" class="arrow_inc" onClick={increment}/>
  </div>;
}

export default SelectQuantity;
