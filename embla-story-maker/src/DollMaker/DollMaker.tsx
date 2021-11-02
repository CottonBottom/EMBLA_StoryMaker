import React, { useState } from "react";
import dollData from "./DollData.json";

const StoryMaker = () => {
  const [hair, setHair] = useState<string>("no hair");
  const [face, setFace] = useState<string>("no face");
  const [body, setBody] = useState<string>("no body");

  const getHair = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    dollData.hairs.forEach((hair) => {
      options.push(<option value={hair}>{hair}</option>);
    });
    return options;
  };

  const getFace = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    dollData.faces.forEach((face) => {
      options.push(<option value={face}>{face}</option>);
    });
    return options;
  };

  const getBody = () => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    dollData.bodies.forEach((body) => {
      options.push(<option value={body}>{body}</option>);
    });
    return options;
  };

  const makeBody = () => {
    return `${hair} ${face} ${body}`;
  };

  return (
    <div className="container">
      <div className="top">
        <div>
          <label htmlFor="hair">Hair</label>
          <select name="" id="hair" onChange={(e) => setHair(e.target.value)}>
            {getHair()}
          </select>
        </div>
        <div>
          <label htmlFor="face">Face</label>
          <select name="" id="face" onChange={(e) => setFace(e.target.value)}>
            {getFace()}
          </select>
        </div>
        <div>
          <label htmlFor="element">Body</label>
          <select name="" id="body" onChange={(e) => setBody(e.target.value)}>
            {getBody()}
          </select>
        </div>
      </div>
      <div className="middle">
        <div>
          <label htmlFor="head">Head</label>
          <input type="checkbox" name="head" id="head" />
        </div>
        <div>
          <label htmlFor="left_arm_top">Left Arm Top</label>
          <input type="checkbox" name="left_arm_top" id="left_arm_top" />
        </div>
        <div>
          <label htmlFor="left_arm_middle">Left Arm Middle</label>
          <input type="checkbox" name="left_arm_middle" id="left_arm_middle" />
        </div>
        <div>
          <label htmlFor="left_arm_bottom">Left Arm Bottom</label>
          <input type="checkbox" name="left_arm_bottom" id="left_arm_bottom" />
        </div>
        <div>
          <label htmlFor="right_arm_top">Right Arm Top</label>
          <input type="checkbox" name="right_arm_top" id="right_arm_top" />
        </div>
        <div>
          <label htmlFor="right_arm_middle">Right Arm Middle</label>
          <input
            type="checkbox"
            name="right_arm_middle"
            id="right_arm_middle"
          />
        </div>
        <div>
          <label htmlFor="right_arm_bottom">Right Arm Bottom</label>
          <input
            type="checkbox"
            name="right_arm_bottom"
            id="right_arm_bottom"
          />
        </div>
        <div>
          <label htmlFor="left_leg_top">Left Leg Top</label>
          <input type="checkbox" name="left_leg_top" id="left_leg_top" />
        </div>
        <div>
          <label htmlFor="left_leg_middle">Left Leg Middle</label>
          <input type="checkbox" name="left_leg_middle" id="left_leg_middle" />
        </div>
        <div>
          <label htmlFor="left_leg_bottom">Left Leg Bottom</label>
          <input type="checkbox" name="left_leg_bottom" id="left_leg_bottom" />
        </div>
        <div>
          <label htmlFor="right_leg_top">Right Leg Top</label>
          <input type="checkbox" name="right_leg_top" id="right_leg_top" />
        </div>
        <div>
          <label htmlFor="right_leg_middle">Right Leg Middle</label>
          <input
            type="checkbox"
            name="right_leg_middle"
            id="right_leg_middle"
          />
        </div>
        <div>
          <label htmlFor="right_leg_bottom">Right Leg Bottom</label>
          <input
            type="checkbox"
            name="right_leg_bottom"
            id="right_leg_bottom"
          />
        </div>
      </div>
      <div className="bottom">
        <label htmlFor="result">Result</label>
        <textarea value={makeBody()} rows={5} />
      </div>
    </div>
  );
};

export default StoryMaker;
