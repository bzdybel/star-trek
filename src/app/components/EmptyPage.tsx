import React from "react";

export const EmptyPage: React.FC = () => {
  return (
    <div className="h-100 d-flex justify-content-center img-empty">
      <div className="yoda-empty">
        <p className="empty-text">May the force be with you</p>
        <img
          className="img-yoda h-100 w-100"
          src="https://wally.com.pl/galerie/f/fototapeta-mistrz-yoda-4_25470.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
