import React, { useState } from "react";
import storyData from "./StoryData.json";
import namingData from "./NamingData.json";
import creatures from "./GauntletData/Creatures.json";
import deity from "./GauntletData/Creatures.json";
import planes from "./GauntletData/Creatures.json";
import tribes from "./GauntletData/Creatures.json";

const gauntletData = creatures.gauntlets.concat(
  deity.gauntlets,
  planes.gauntlets,
  tribes.gauntlets
);

const StoryMaker = () => {
  const [rarity, setRarity] = useState<string>("no rarity");
  const [element, setElement] = useState<string>("no element");
  const [attack, setAttack] = useState<string>("no attack");

  const getRarities = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    storyData.rarity.forEach((rarity) => {
      options.push(<option value={rarity.content}>{rarity.name}</option>);
    });
    return options;
  };

  const getElements = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    storyData.element.forEach((element) => {
      options.push(<option value={element.content}>{element.name}</option>);
    });
    return options;
  };

  const getAttacks = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    storyData.attack.forEach((attack) => {
      options.push(<option value={attack.content}>{attack.name}</option>);
    });
    return options;
  };

  const makeStory = () => {
    return `${rarity} ${attack} ${element}`;
  };

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const makeName = (rarity: string, element: string, attack: string) => {
    const start = namingData.rarity.filter(
      (_rarity) => _rarity.name === rarity
    )[0].name;
    const middle = namingData.element.filter(
      (_element) => _element.name === element
    )[0].content;
    const end = namingData.attack.filter(
      (_attack) => _attack.name === attack
    )[0].content;

    return `${capitalizeFirstLetter(start)}'s ${middle} ${end}`;
  };

  const getFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.charAt(1);
  };

  const makeID = (rarity: string, element: string, attack: string) => {
    const start = namingData.rarity.filter(
      (_rarity) => _rarity.name === rarity
    )[0].name;
    const middle = namingData.element.filter(
      (_element) => _element.name === element
    )[0].content;
    const end = namingData.attack.filter(
      (_attack) => _attack.name === attack
    )[0].content;

    return `${getFirstLetter(start)}_${getFirstLetter(middle)}_${getFirstLetter(
      end
    )}`;
  };

  const makeStoryCell = (rarity: string, element: string, attack: string) => {
    const start = storyData.rarity.filter(
      (_rarity) => _rarity.name === rarity
    )[0].content;
    const middle = storyData.attack.filter(
      (_attack) => _attack.name === attack
    )[0].content;
    const end = storyData.element.filter(
      (_element) => _element.name === element
    )[0].content;

    return `${start} ${middle} ${end}`;
  };

  const makeRows = () => {
    return gauntletData.map((gauntlet, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            {makeName(gauntlet.rarity, gauntlet.element, gauntlet.attack)}
          </td>
          <td>{gauntlet.rarity}</td>
          <td>{gauntlet.element}</td>
          <td>{gauntlet.attack}</td>
          <td>
            {makeStoryCell(gauntlet.rarity, gauntlet.element, gauntlet.attack)}
          </td>
          <td>{makeID(gauntlet.rarity, gauntlet.element, gauntlet.attack)}</td>
        </tr>
      );
    });
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

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rarity</th>
            <th>Element</th>
            <th>Attack</th>
            <th>Story</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>{makeRows()}</tbody>
      </table>
    </div>
  );
};

export default StoryMaker;
