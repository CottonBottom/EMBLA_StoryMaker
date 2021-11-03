import React, { useState } from "react";
import { combineArrays } from "./ArrayMethods";
import dollData from "./DollDataLight.json";

const DollMaker = () => {
  const [hair, setHair] = useState<string>("no hair");
  const [face, setFace] = useState<string>("no face");
  const [body, setBody] = useState<string>("no body");
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
    return `${hair} ${face} ${body} ${leftArm} ${rightArm} ${leftLeg} ${rightLeg}`;
  };

  const makeRows = () => {
    const arrayOfArrays = [
      dollData.hairs,
      dollData.faces,
      dollData.bodies,
      dollData.left_arms,
      dollData.right_arms,
      dollData.left_legs,
      dollData.right_legs,
    ];
    const allCombinations = combineArrays(arrayOfArrays);
    console.log("All combinations: ", allCombinations.length);
    const onlySomeArrays = allCombinations.slice(10);

    return onlySomeArrays.map((combination, index) => {
      const comboArray = combination.split(",");
      comboArray.pop();
      return (
        <tr>
          <td>{index + 1}</td>
          <td>Image</td>
          <td>{comboArray}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="top">
        <div className="label-set">
          <label htmlFor="hair">Hair</label>
          <select name="" id="hair" onChange={(e) => setHair(e.target.value)}>
            {getBodyPart(dollData.hairs)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="face">Face</label>
          <select name="" id="face" onChange={(e) => setFace(e.target.value)}>
            {getBodyPart(dollData.faces)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="body">Body</label>
          <select name="" id="body" onChange={(e) => setBody(e.target.value)}>
            {getBodyPart(dollData.bodies)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="left_arm">Left Arm</label>
          <select
            name=""
            id="left_arm"
            onChange={(e) => setLeftArm(e.target.value)}
          >
            {getBodyPart(dollData.left_arms)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="right_arm">Right Arm</label>
          <select
            name=""
            id="right_arm"
            onChange={(e) => setRightArm(e.target.value)}
          >
            {getBodyPart(dollData.right_arms)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="left_leg">Left Leg</label>
          <select
            name=""
            id="left_leg"
            onChange={(e) => setLeftLeg(e.target.value)}
          >
            {getBodyPart(dollData.left_legs)}
          </select>
        </div>
        <div className="label-set">
          <label htmlFor="right_leg">Right Leg</label>
          <select
            name=""
            id="right_leg"
            onChange={(e) => setRightLeg(e.target.value)}
          >
            {getBodyPart(dollData.right_legs)}
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
