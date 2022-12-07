import React from "react";
import GroceryRow from "./GroceryRow";

function GroceryTable({ items, quantity }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th class="price">Price</th>
          <th id="sq_th">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {/* Render rows of data from map function DOM (iterates through list)*/}
        {items.map((item, i) => <GroceryRow item={item} key={i}/> )}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td class ="price" id="total">Total</td>
            <td id="priceless">
              Priceless
            </td>

        </tr>
      </tfoot>
    </table>
  );
}

export default GroceryTable;
