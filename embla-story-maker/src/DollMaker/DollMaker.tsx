import React, { useState } from "react";
import { combineArrays } from "./ArrayMethods";
import dollData from "./DollDataLight.json";
//Broken dolls:
import bd1_cabeza from "./Dolls/bd1_cabeza.png";
import bd2_cabeza from "./Dolls/bd2_cabeza.png";
import bd1_tronco from "./Dolls/bd1_tronco.png";
import bd2_tronco from "./Dolls/bd2_tronco.png";
import bd1_brazoizq from "./Dolls/bd1_brazoizquierdo.png";
import bd2_brazoizq from "./Dolls/bd2_brazoizquierdo.png";
import bd1_brazoder from "./Dolls/bd1_brazoderecho.png";
import bd2_brazoder from "./Dolls/bd2_brazoderecho.png";
import bd1_piernaizq from "./Dolls/bd1_piernaizquierda.png";
import bd2_piernaizq from "./Dolls/bd2_piernaizquierda.png";
import bd1_piernader from "./Dolls/bd1_piernaderecha.png";
import bd2_piernader from "./Dolls/bd2_piernaderecha.png";
import bd4_cabeza from "./Dolls/bd4_cabeza.png";
import bd3_cabeza from "./Dolls/bd3_cabeza.png";
import bd4_tronco from "./Dolls/bd4_tronco.png";
import bd3_tronco from "./Dolls/bd3_tronco.png";
import bd4_brazoizq from "./Dolls/bd4_brazoizquierdo.png";
import bd3_brazoizq from "./Dolls/bd3_brazoizquierdo.png";
import bd4_brazoder from "./Dolls/bd4_brazoderecho.png";
import bd3_brazoder from "./Dolls/bd3_brazoderecho.png";
import bd4_piernaizq from "./Dolls/bd4_piernaizquierda.png";
import bd3_piernaizq from "./Dolls/bd3_piernaizquierda.png";
import bd4_piernader from "./Dolls/bd4_piernaderecha.png";
import bd3_piernader from "./Dolls/bd3_piernaderecha.png";

const allBrokenParts = [
  bd1_cabeza,
  bd2_cabeza,
  bd1_tronco,
  bd2_tronco,
  bd1_brazoizq,
  bd2_brazoizq,
  bd1_brazoder,
  bd2_brazoder,
  bd1_piernaizq,
  bd2_piernaizq,
  bd1_piernader,
  bd2_piernader,
  bd3_cabeza,
  bd4_cabeza,
  bd3_tronco,
  bd4_tronco,
  bd3_brazoizq,
  bd4_brazoizq,
  bd3_brazoder,
  bd4_brazoder,
  bd3_piernaizq,
  bd4_piernaizq,
  bd3_piernader,
  bd4_piernader,
];

const DollMaker = () => {
  const [head, setHead] = useState<string>("bd1");
  const [leftSide, setLeftSide] = useState<string>("bd1");
  const [rightSide, setRightSide] = useState<string>("bd1");
  const [rightLeg, setRightLeg] = useState<string>("bd1");

  const getBodyPart = (bodyPart: string[]) => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    bodyPart.forEach((part) => {
      options.push(<option value={part}>{part}</option>);
    });
    return options;
  };

  const makeBody = () => {
    return `${head} ${leftSide} ${rightSide} ${rightLeg}`;
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
      dollData.tronco_brazoizq,
      dollData.brazoder_piernaizq,
      dollData.piernader,
    ];
    const allCombinations = combineArrays(arrayOfArrays);
    console.log("All combinations: ", allCombinations.length);
    const onlySomeArrays = allCombinations.slice(10);

    return allCombinations.map((combination, index) => {
      const comboArray = combination.split(",");
      comboArray.pop();
      const head = makeImageName(comboArray[0], "cabeza");
      const tronco = makeImageName(comboArray[1], "tronco");
      const leftArm = makeImageName(comboArray[1], "brazoizq");
      const rightArm = makeImageName(comboArray[2], "brazoder");
      const leftLeg = makeImageName(comboArray[2], "piernaizq");
      const rightLeg = makeImageName(comboArray[3], "piernader");
      return (
        <tr>
          <td>{index + 1}</td>
          <td>fallen-angel-{index + 1}</td>
          <td className="image-cell">
            <div className="image-container">
              <img
                className="base tronco"
                src={getImage(tronco)}
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
              <li>leftSide: {comboArray[1]}</li>
              <li>rightSide: {comboArray[2]}</li>
              <li>rightLeg: {comboArray[3]}</li>
            </ul>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="bd-maker-container">
        <div className="result">
          <label htmlFor="result">Result</label>
          <div className="image-container">
            <img
              className="base tronco"
              src={getImage(makeImageName(leftSide, "tronco"))}
              alt={`tronco`}
            />
            <img
              className="part head"
              src={getImage(makeImageName(head, "cabeza"))}
              alt={`head`}
            />
            <img
              className="part arm"
              src={getImage(makeImageName(leftSide, "brazoizq"))}
              alt={`leftArm`}
            />
            <img
              className="part arm"
              src={getImage(makeImageName(rightSide, "brazoder"))}
              alt={`rightArm`}
            />
            <img
              className="part leg"
              src={getImage(makeImageName(rightSide, "piernaizq"))}
              alt={`leftLeg`}
            />
            <img
              className="part leg"
              src={getImage(makeImageName(rightLeg, "piernader"))}
              alt={`rightLeg`}
            />
          </div>
        </div>
        <div className="setup">
          <div className="label-set">
            <label htmlFor="head">Head</label>
            <select name="" id="head" onChange={(e) => setHead(e.target.value)}>
              {getBodyPart(dollData.cabeza)}
            </select>
          </div>
          <div className="label-set">
            <label htmlFor="left_side">Left Side</label>
            <select
              name=""
              id="left_side"
              onChange={(e) => setLeftSide(e.target.value)}
            >
              {getBodyPart(dollData.tronco_brazoizq)}
            </select>
          </div>
          <div className="label-set">
            <label htmlFor="right_side">Right Side</label>
            <select
              name=""
              id="right_side"
              onChange={(e) => setRightSide(e.target.value)}
            >
              {getBodyPart(dollData.brazoder_piernaizq)}
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
          <textarea value={makeBody()} rows={5} />
        </div>
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
