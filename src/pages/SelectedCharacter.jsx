import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { MainContext } from "../contexts/MainContext";
import { Link, useHistory } from "react-router-dom";
import CharacterDetailCard from "../components/CharacterDetailCard";
import moment from "moment";

const SelectedCharacter = () => {
  const params = useParams();
  const { selectedCharacters, getCharactersDetail, selectedFriends } =
    useContext(MainContext);
  const getCharacters = (ids = []) => {
    getCharactersDetail(ids);
  };
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getCharactersDetail(params.id);
  }, [params.id]);

  return (
    <div className="selected-character">
      <button className="history-button" onClick={handleClick}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-left"
          class="svg-inline--fa fa-arrow-left fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
          ></path>
        </svg>
      </button>
      <div className="selected-top">
        <img src={selectedCharacters.image} alt="img" />
        <div className="top-right-side">
          <h1>{selectedCharacters.name}</h1>
          <p>
            <strong> Created: </strong>
            {moment(selectedCharacters.created).format("LL")}
          </p>
          <p>
            <strong> Gender: </strong>
            {selectedCharacters.gender}
          </p>
          <p>
            <strong>Species: </strong>
            {selectedCharacters.species}
          </p>
          <p>
            <strong> Status: </strong>
            {selectedCharacters.status}
          </p>
          <p>
            <strong> Story: </strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            perferendis iste adipisci corporis cumque. Nisi ut placeat tenetur.
            Iste est cumque magnam culpa, quibusdam iure error molestias
            perferendis sequi autem vitae impedit blanditiis porro nobis
            suscipit beatae totam optio placeat dolore explicabo labore et
            laboriosam fuga! Suscipit officiis quos ipsa debitis eligendi
            officia a sunt voluptas similique, repudiandae minus, iusto corporis
            placeat molestiae illum. Perspiciatis praesentium placeat
            laudantium! Fuga repellat iure quo dicta, exercitationem delectus
            non quis corrupti sapiente officiis iusto voluptas vitae minus
            libero ex repellendus, tempora necessitatibus sit incidunt qui
            soluta magni consectetur. Amet eaque numquam aperiam laborum.
          </p>
        </div>
      </div>
      <div className="selected-bottom">
        {selectedFriends.map((character) => {
          return (
            <Link to={`/character/${character.id}`}>
              <CharacterDetailCard
                name={character.name}
                img={character.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedCharacter;
