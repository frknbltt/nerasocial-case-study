import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [mainData, setMainData] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const getEpisode = async (page = 1) => {
    const result = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    const data = await result.json();
    setMainData(data);
  };

  const getCharactersDetail = (characterIds = "") => {
    fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
      .then((response) => response.json())
      .then((responseJson) => setSelectedCharacters(responseJson));
  };
  const getCharactersFriends = (characterIds = []) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
      .then((response) => response.json())
      .then((responseJson) => setSelectedFriends(responseJson));
  };

  return (
    <MainContext.Provider
      value={{
        mainData,
        selectedFriends,
        getCharactersDetail,
        selectedCharacters,
        getCharactersFriends,
        getEpisode,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContextProvider;
