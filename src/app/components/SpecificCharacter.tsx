import React, { useState } from "react";
// import { ProductImage } from "./ProductImage";
// import { ProductInformation } from "./ProductInformation";
// import { ProductRating } from "./ProductRating";
import { CharacterProperties } from "../models/models";
// import { ProductDetails } from "./ProductDetails";
import { v4 as uuidv4 } from "uuid";

interface ProductProps {
  item: CharacterProperties;
}

export function SpecificCharacter({ item }: ProductProps) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  // const { name, image, description, rating, isUnavailable, isPromo, id } = item;
  return (
    <div key={uuidv4()} className="product-container">
      {/* <ProductImage
        image={image}
        isUnavailable={isUnavailable}
        isPromo={isPromo}
      />
      <div className={`product-information-wrapper d-flex flex-column h-50`}>
        <ProductInformation name={name} description={description} />
        <div className="d-flex flex-column align-items-center h-50 pd-3">
          <div className="d-flex rating ">
            <ProductRating rating={rating} />
          </div>
          <button
            type="submit"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={!isUnavailable ? () => setIsPopupOpen(true) : () => {}}
            className={`align-self-center show-details btn btn-primary btn-lg active  d-flex justify-content-center ${
              isUnavailable && "button-unavailable"
            }`}
          >
            {isUnavailable ? (
              <p className="m-0" data-cy="unavailable">
                Unavailable
              </p>
            ) : (
              <p data-cy="show_detail" className="m-0">
                Show detail
              </p>
            )}
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <ProductDetails
          name={name}
          image={image}
          description={description}
          setIsPopupOpen={setIsPopupOpen}
          isPopupOpen={isPopupOpen}
        />
      )} */}
    </div>
  );
}
