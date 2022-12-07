import React from "react";
import StoreTable from "../components/StoreTable";
import ZipSearch from "../components/ZipSearch";

function StoresPage({ stores }) {
  return (
    <article className="allArticles">
      <h2>Our Stores</h2>
      <p>Find The Best Bodega located near you.</p>

      <StoreTable stores={stores} />
      <ZipSearch />
    </article>
  );
}

export default StoresPage;
