import React, { useState, useEffect, useCallback } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";


function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const fetchPets = useCallback(() => {
    let url = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, [filters]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets,filters]); // Only depend on filters

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    fetchPets();
  };

  const onAdoptPet = (petId) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === petId ? { ...pet, isAdopted: true } : pet
      )
    );
  };


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;