import React, { useState } from "react";
import { combineArrays } from "./ArrayMethods";
import dollData from "./DollDataLight.json";
//Broken dolls:
import bd1_brazoder from "./Dolls/bd1_brazoderecho.png";
import bd1_brazoizq from "./Dolls/bd1_brazoizquierdo.png";
import bd1_cabeza from "./Dolls/bd1_cabeza.png";
import bd1_piernader from "./Dolls/bd1_piernaderecha.png";
import bd1_piernaizq from "./Dolls/bd1_piernaizquierda.png";
import bd1_tronco from "./Dolls/bd1_tronco.png";
import bd2_brazoder from "./Dolls/bd2_brazoderecho.png";
import bd2_brazoizq from "./Dolls/bd2_brazoizquierdo.png";
import bd2_cabeza from "./Dolls/bd2_cabeza.png";
import bd2_piernader from "./Dolls/bd2_piernaderecha.png";
import bd2_piernaizq from "./Dolls/bd2_piernaizquierda.png";
import bd2_tronco from "./Dolls/bd2_tronco.png";
import bd3_brazoder from "./Dolls/bd3_brazoderecho.png";
import bd3_brazoizq from "./Dolls/bd3_brazoizquierdo.png";
import bd3_cabeza from "./Dolls/bd3_cabeza.png";
import bd3_piernader from "./Dolls/bd3_piernaderecha.png";
import bd3_piernaizq from "./Dolls/bd3_piernaizquierda.png";
import bd3_tronco from "./Dolls/bd3_tronco.png";
import bd4_brazoder from "./Dolls/bd4_brazoderecho.png";
import bd4_brazoizq from "./Dolls/bd4_brazoizquierdo.png";
import bd4_cabeza from "./Dolls/bd4_cabeza.png";
import bd4_piernader from "./Dolls/bd4_piernaderecha.png";
import bd4_piernaizq from "./Dolls/bd4_piernaizquierda.png";
import bd4_tronco from "./Dolls/bd4_tronco.png";
import bd5_brazoder from "./Dolls/bd5_brazoderecho.png";
import bd5_brazoizq from "./Dolls/bd5_brazoizquierdo.png";
import bd5_cabeza from "./Dolls/bd5_cabeza.png";
import bd5_piernader from "./Dolls/bd5_piernaderecha.png";
import bd5_piernaizq from "./Dolls/bd5_piernaizquierda.png";
import bd5_tronco from "./Dolls/bd5_tronco.png";
import bd6_brazoder from "./Dolls/bd6_brazoderecho.png";
import bd6_brazoizq from "./Dolls/bd6_brazoizquierdo.png";
// import bd6_cabeza from "./Dolls/bd6_cabeza.png";
import bd6_piernader from "./Dolls/bd6_piernaderecha.png";
import bd6_piernaizq from "./Dolls/bd6_piernaizquierda.png";
import bd6_tronco from "./Dolls/bd6_tronco.png";
import bd7_brazoder from "./Dolls/bd7_brazoderecho.png";
import bd7_brazoizq from "./Dolls/bd7_brazoizquierdo.png";
import bd7_cabeza from "./Dolls/bd7_cabeza.png";
import bd7_piernader from "./Dolls/bd7_piernaderecha.png";
import bd7_piernaizq from "./Dolls/bd7_piernaizquierda.png";
import bd7_tronco from "./Dolls/bd7_tronco.png";
import bd8_brazoder from "./Dolls/bd8_brazoderecho.png";
import bd8_brazoizq from "./Dolls/bd8_brazoizquierdo.png";
import bd8_cabeza from "./Dolls/bd8_cabeza.png";
import bd8_piernader from "./Dolls/bd8_piernaderecha.png";
import bd8_piernaizq from "./Dolls/bd8_piernaizquierda.png";
import bd8_tronco from "./Dolls/bd8_tronco.png";
import bd9_brazoder from "./Dolls/bd9_brazoderecho.png";
import bd9_brazoizq from "./Dolls/bd9_brazoizquierdo.png";
import bd9_cabeza from "./Dolls/bd9_cabeza.png";
import bd9_piernader from "./Dolls/bd9_piernaderecha.png";
import bd9_piernaizq from "./Dolls/bd9_piernaizquierda.png";
import bd9_tronco from "./Dolls/bd9_tronco.png";
import bd10_brazoder from "./Dolls/bd10_brazoderecho.png";
import bd10_brazoizq from "./Dolls/bd10_brazoizquierdo.png";
import bd10_cabeza from "./Dolls/bd10_cabeza.png";
import bd10_piernader from "./Dolls/bd10_piernaderecha.png";
import bd10_piernaizq from "./Dolls/bd10_piernaizquierda.png";
import bd10_tronco from "./Dolls/bd10_tronco.png";

const allBrokenParts = [
  bd1_brazoder,
  bd1_brazoizq,
  bd1_cabeza,
  bd1_piernader,
  bd1_piernaizq,
  bd1_tronco,
  bd2_brazoder,
  bd2_brazoizq,
  bd2_cabeza,
  bd2_piernader,
  bd2_piernaizq,
  bd2_tronco,
  bd3_brazoder,
  bd3_brazoizq,
  bd3_cabeza,
  bd3_piernader,
  bd3_piernaizq,
  bd3_tronco,
  bd4_brazoder,
  bd4_brazoizq,
  bd4_cabeza,
  bd4_piernader,
  bd4_piernaizq,
  bd4_tronco,
  bd5_brazoder,
  bd5_brazoizq,
  bd5_cabeza,
  bd5_piernader,
  bd5_piernaizq,
  bd5_tronco,
  bd6_brazoder,
  bd6_brazoizq,
  // bd6_cabeza,
  bd6_piernader,
  bd6_piernaizq,
  bd6_tronco,
  bd7_brazoder,
  bd7_brazoizq,
  bd7_cabeza,
  bd7_piernader,
  bd7_piernaizq,
  bd7_tronco,
  bd8_brazoder,
  bd8_brazoizq,
  bd8_cabeza,
  bd8_piernader,
  bd8_piernaizq,
  bd8_tronco,
  bd9_brazoder,
  bd9_brazoizq,
  bd9_cabeza,
  bd9_piernader,
  bd9_piernaizq,
  bd9_tronco,
  bd10_brazoder,
  bd10_brazoizq,
  bd10_cabeza,
  bd10_piernader,
  bd10_piernaizq,
  bd10_tronco,
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

  const getTotalCombinations = () => {
    const arrayOfArrays = [
      dollData.cabeza,
      dollData.tronco_brazoizq,
      dollData.brazoder_piernaizq,
      dollData.piernader,
    ];
    const allCombinations = combineArrays(arrayOfArrays);
    return allCombinations.length;
  };

  // Commented to save resources
  // const makeRows = () => {
  //   const arrayOfArrays = [
  //     dollData.cabeza,
  //     dollData.tronco_brazoizq,
  //     dollData.brazoder_piernaizq,
  //     dollData.piernader,
  //   ];
  //   const allCombinations = combineArrays(arrayOfArrays);
  //   console.log("All combinations: ", allCombinations.length);
  //   const onlySomeArrays = allCombinations.slice(10);

  //   return allCombinations.map((combination, index) => {
  //     const comboArray = combination.split(",");
  //     comboArray.pop();
  //     const head = makeImageName(comboArray[0], "cabeza");
  //     const tronco = makeImageName(comboArray[1], "tronco");
  //     const leftArm = makeImageName(comboArray[1], "brazoizq");
  //     const rightArm = makeImageName(comboArray[2], "brazoder");
  //     const leftLeg = makeImageName(comboArray[2], "piernaizq");
  //     const rightLeg = makeImageName(comboArray[3], "piernader");
  //     return (
  //       <tr>
  //         <td>{index + 1}</td>
  //         <td>fallen-angel-{index + 1}</td>
  //         <td className="image-cell">
  //           <div className="image-container">
  //             <img
  //               className="base tronco"
  //               src={getImage(tronco)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part head"
  //               src={getImage(head)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part arm"
  //               src={getImage(leftArm)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part arm"
  //               src={getImage(rightArm)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part leg"
  //               src={getImage(leftLeg)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part leg"
  //               src={getImage(rightLeg)}
  //               alt={`embla-${index}`}
  //             />
  //           </div>
  //         </td>
  //         <td>
  //           <ul>
  //             <li>head: {comboArray[0]}</li>
  //             <li>leftSide: {comboArray[1]}</li>
  //             <li>rightSide: {comboArray[2]}</li>
  //             <li>rightLeg: {comboArray[3]}</li>
  //           </ul>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

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
      <div className="total-combinations-title">
        Total Combinations: {getTotalCombinations()}
      </div>
      {/* Commented to save resources
      <div className="table-top">
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
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Broken Doll</th>
            <th>Parts Used</th>
          </tr>
        </thead>
        <tbody>{makeRows()}</tbody>
      </table> */}
    </div>
  );
};

export default DollMaker;
