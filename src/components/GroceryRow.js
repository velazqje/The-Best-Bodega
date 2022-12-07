import React from "react";
import SelectQuantity from "./SelectQuantity";

function GroceryRow({item}) {
  return  (
    <tr>
      <td>{item.name}</td>
      <td class="price">{item.price.toFixed(2)}</td>
      <td id="sq_td"><SelectQuantity/></td>
    </tr>
  );;
}

export default GroceryRow;
