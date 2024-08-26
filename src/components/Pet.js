import React from "react";
import data from "./db.json"

function Pet({pet, onAdoptPet}) {
  const handleAdoptPet = () => {
    onAdoptPet(pet.id);
  };
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
         {pet.name}({pet.gender === "male" ? '♂' : '♀'}) {/*'♀' OR '♂' */}
          PET NAME
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        { pet.isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
        ) : (
        <button className="ui primary button" onClick={handleAdoptPet}>Adopt pet</button>
        )}
      </div>
    </div>
  );
}

export default Pet;