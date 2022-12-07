import React, { useState } from "react";
import stores from "../data/stores";

function ZipSearch({stores}) {
  const [zipCode, setZipCode] = useState("");

  return (
    <form action="" method="">
      <fieldset>
        <legend id="ziplegend">Enter your 5 digit zip code:</legend>
        <label for="zip" id="zip">
          Zip code
        </label>
        <input
          type="text"
          value={zipCode}
          id="zipID"
          name="zipCode"
          placeholder="00000"
          size="5"
          maxLength="5"
          onChange={(e) => setZipCode(e.target.value)}
        />

        <label for="alert">
          <button
            name="alert"
            onClick={(e) => {

                // if (zipCode in stores.zipCode) {
                //   alert(`ComingYou entered ${zipCode}`);
                // e.preventDefault();}
                // else {

              alert(`You entered ${zipCode}. Stay tuned for more locations!`);
              e.preventDefault();
                // }
            }}
          >
            Submit
          </button>
        </label>
      </fieldset>
    </form>
  );
}

export default ZipSearch;
