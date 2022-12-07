import React from "react";
import GroceryTable from "../components/GroceryTable";

// renders when a user clicks on control

function OrderPage({ items }) {
  return (
    <article className="allArticles">
      <h2>Place an Order</h2>
      <p>Select the quantity of items to order.</p>
      <GroceryTable items={items} />
    </article>
  );
}

export default OrderPage;
