import React, { useState } from "react";
import data from "./Data.json";

const StoryMaker = () => {
  const [rarity, setRarity] = useState<string>("no rarity");
  const [element, setElement] = useState<string>("no element");
  const [attack, setAttack] = useState<string>("no attack");

  const getRarities = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    data.rarity.forEach((rarity) => {
      options.push(<option value={rarity.content}>{rarity.name}</option>);
    });
    return options;
  };

  const getElements = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    data.element.forEach((element) => {
      options.push(<option value={element.content}>{element.name}</option>);
    });
    return options;
  };

  const getAttacks = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    data.attack.forEach((attack) => {
      options.push(<option value={attack.content}>{attack.name}</option>);
    });
    return options;
  };

  const makeStory = () => {
    return `${rarity} ${attack} ${element}`;
  };

  return (
    <div className="container">
      <div className="top">
        <div>
          <label htmlFor="rarity">Rarity</label>
          <select
            name=""
            id="rarity"
            onChange={(e) => setRarity(e.target.value)}
          >
            {getRarities()}
          </select>
        </div>
        <div>
          <label htmlFor="attack">Attack</label>
          <select
            name=""
            id="attack"
            onChange={(e) => setAttack(e.target.value)}
          >
            {getAttacks()}
          </select>
        </div>
        <div>
          <label htmlFor="element">Element</label>
          <select
            name=""
            id="element"
            onChange={(e) => setElement(e.target.value)}
          >
            {getElements()}
          </select>
        </div>
      </div>
      <div className="bottom">
        <label htmlFor="result">Result</label>
        <textarea value={makeStory()} rows={5} />
      </div>
    </div>
  );
};

export default StoryMaker;
