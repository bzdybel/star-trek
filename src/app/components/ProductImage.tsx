import React from "react";
// import { CharacterProperties } from "../models/models";

// interface characterImageProps {
//   image: CharacterProperties["image"];
//   isUnavailable: CharacterProperties["isUnavailable"];
//   customClass?: string;
//   isPromo?: CharacterProperties["isPromo"];
//   disabledTop?: boolean;
// }

// export function characterImage({
//   isUnavailable,
//   image,
//   customClass,
//   isPromo,
//   disabledTop,
// }: characterImageProps) {
//   return (
//     <>
//       {isPromo ? (
//         <div className={"top promo-label"}>Promo</div>
//       ) : (
//         <div className={`top ${disabledTop ? "height-0" : ""}`} />
//       )}
//       <img
//         className={`character-image-wrapper ${customClass} img-fluid w-100 p-0 m-0 h-100  ${
//           isUnavailable && "character-unavailable"
//         }`}
//         src={image}
//         alt="Not available"
//       />
//     </>
//   );
// }
