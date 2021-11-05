import React, { useState } from "react";
import { combineArrays } from "./ArrayMethods";
import dollData from "./DollDataLight.json";
//Broken dolls:
import bd1_cabeza from "./Dolls/01_bd1_cabeza.png";
import bd2_cabeza from "./Dolls/01_bd2_cabeza.png";
import bd1_torso from "./Dolls/02_bd1_torso.png";
import bd2_torso from "./Dolls/02_bd2_torso.png";
import bd1_brazoizq from "./Dolls/03_bd1_brazoizq.png";
import bd2_brazoizq from "./Dolls/03_bd2_brazoizq.png";
import bd1_brazoder from "./Dolls/04_bd1_brazoder.png";
import bd2_brazoder from "./Dolls/04_bd2_brazoder.png";
import bd1_piernaizq from "./Dolls/05_bd1_piernaizq.png";
import bd2_piernaizq from "./Dolls/05_bd2_piernaizq.png";
import bd1_piernader from "./Dolls/06_bd1_piernader.png";
import bd2_piernader from "./Dolls/06_bd2_piernader.png";

const allBrokenParts = [
  bd1_cabeza,
  bd2_cabeza,
  bd1_torso,
  bd2_torso,
  bd1_brazoizq,
  bd2_brazoizq,
  bd1_brazoder,
  bd2_brazoder,
  bd1_piernaizq,
  bd2_piernaizq,
  bd1_piernader,
  bd2_piernader,
];

const DollMaker = () => {
  const [head, setHead] = useState<string>("no head");
  const [torso, setTorso] = useState<string>("no torso");
  const [leftArm, setLeftArm] = useState<string>("no left arm");
  const [rightArm, setRightArm] = useState<string>("no right arm");
  const [leftLeg, setLeftLeg] = useState<string>("no left leg");
  const [rightLeg, setRightLeg] = useState<string>("no right leg");

  const getBodyPart = (bodyPart: string[]) => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    bodyPart.forEach((part) => {
      options.push(<option value={part}>{part}</option>);
    });
    return options;
  };

  const makeBody = () => {
    return `${head} ${torso} ${leftArm} ${rightArm} ${leftLeg} ${rightLeg}`;
  };

  const makeImageName = (bd: string, part: string) => {
    return `${bd}_${part}`;
  };

  const getImage = (imageName: string) => {
    console.log(allBrokenParts);
    return allBrokenParts.filter((brokenPart) =>
      brokenPart.includes(imageName)
    )[0];
  };

  const makeRows = () => {
    const arrayOfArrays = [
      dollData.cabeza,
      dollData.torso,
      dollData.brazoizq,
      dollData.brazoder,
      dollData.piernaizq,
      dollData.piernader,
    ];
    const allCombinations = combineArrays(arrayOfArrays);
    console.log("All combinations: ", allCombinations.length);
    const onlySomeArrays = allCombinations.slice(10);

    return onlySomeArrays.map((combination, index) => {
      const comboArray = combination.split(",");
      comboArray.pop();
      const head = makeImageName(comboArray[0], "cabeza");
      const torso = makeImageName(comboArray[1], "torso");
      const leftArm = makeImageName(comboArray[2], "brazoizq");
      const rightArm = makeImageName(comboArray[3], "brazoder");
      const leftLeg = makeImageName(comboArray[4], "piernaizq");
      const rightLeg = makeImageName(comboArray[5], "piernader");
      return (
        <tr>
          <td>{index + 1}</td>
          <td>fallen-angel-{index + 1}</td>
          <td className="image-cell">
            <div className="image-container">
              <img
                className="base torso"
                src={getImage(torso)}
                alt={`embla-${index}`}
              />
              <img
                className="part head"
                src={getImage(head)}
                alt={`embla-${index}`}
              />
              <img
                className="part arm"
                src={getImage(leftArm)}
                alt={`embla-${index}`}
              />
              <img
                className="part arm"
                src={getImage(rightArm)}
                alt={`embla-${index}`}
              />
              <img
                className="part leg"
                src={getImage(leftLeg)}
                alt={`embla-${index}`}
              />
              <img
                className="part leg"
                src={getImage(rightLeg)}
                alt={`embla-${index}`}
              />
            </div>
          </td>
          <td>
            <ul>
              <li>head: {comboArray[0]}</li>
              <li>torso: {comboArray[1]}</li>
              <li>leftArm: {comboArray[2]}</li>
              <li>rightArm: {comboArray[3]}</li>
              <li>leftLeg: {comboArray[4]}</li>
              <li>rightLeg: {comboArray[5]}</li>
            </ul>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="top">
        <div className="label-set">
          <label htmlFor="head">Head</label>
          <select
            name=""
            id="head"
            onChange={(e) => setHead(makeImageName(e.target.value, "cabeza"))}
          >
            {getBodyPart(dollData.cabeza)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="torso">Torso</label>
          <select name="" id="torso" onChange={(e) => setTorso(e.target.value)}>
            {getBodyPart(dollData.torso)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="left_arm">Left Arm</label>
          <select
            name=""
            id="left_arm"
            onChange={(e) => setLeftArm(e.target.value)}
          >
            {getBodyPart(dollData.brazoizq)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="right_arm">Right Arm</label>
          <select
            name=""
            id="right_arm"
            onChange={(e) => setRightArm(e.target.value)}
          >
            {getBodyPart(dollData.brazoder)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="left_leg">Left Leg</label>
          <select
            name=""
            id="left_leg"
            onChange={(e) => setLeftLeg(e.target.value)}
          >
            {getBodyPart(dollData.piernaizq)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="right_leg">Right Leg</label>
          <select
            name=""
            id="right_leg"
            onChange={(e) => setRightLeg(e.target.value)}
          >
            {getBodyPart(dollData.piernader)}
          </select>
        </div>
      </div>
      <div className="bottom">
        <label htmlFor="result">Result</label>
        <textarea value={makeBody()} rows={5} />
      </div>
      {/* <div className="table-top">
        <div className="label-set">
          <label htmlFor="results">Results</label>
          <select
            name=""
            id="results"
            onChange={(e) => setRightLeg(e.target.value)}
          >
            {getBodyPart(dollData.right_legs)}
          </select>
        </div>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Broken Doll</th>
            <th>Parts Used</th>
          </tr>
        </thead>
        <tbody>{makeRows()}</tbody>
      </table>
    </div>
  );
};

export default DollMaker;
