import React, { useState } from "react";
import styled from "styled-components";
const NoteCreate = ({ onClick }) => {
  const [titleInput, setTitleInput] = useState("");
  const [captionInput, setCaptionInput] = useState("");

  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible(!visible);
  };

  const handleTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleCaptionInputChange = (e) => {
    setCaptionInput(e.target.value);
  };

  return (
    <React.Fragment>
      <PlusButton onClick={togglePopup}>+</PlusButton>
      {visible && (
        <PopUpWrapper>
          <PopUp>
          <label>
          <span className='modal-title-square'/><span className='modal-title'>Create a new note</span>
          </label>
          <PopUpInpuTitle>Title</PopUpInpuTitle>
            <PopUpInput
              value={titleInput}
              onChange={(e) => handleTitleInputChange(e)}
            />
          <PopUpInpuTitle>Caption</PopUpInpuTitle>
            <PopUpInput
              value={captionInput}
              onChange={(e) => handleCaptionInputChange(e)}
            />
            <button onClick={() => onClick(titleInput, captionInput)} className='popup-button submit'>Submit</button>
            <button onClick={togglePopup} className='popup-button cancel'>Cancel</button>
          </PopUp>
        </PopUpWrapper>
      )}
    </React.Fragment>
  );
};

const PlusButton = styled.button`
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 1.2em;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    225deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border: none;
  border-radius: 50%;
  padding: .5rem 1rem .5rem 1rem;
  color: white;
  z-index: 2;
  position: absolute;
  top: 85%;
  left: 30%
`;

const PopUpWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-self: center;
  padding-top: 5rem;
  z-index:3
`
const PopUp = styled.div`
  z-index:4;
  padding: 2rem;
  width: 25%;
  height: 40%;
  margin-top: 5%;
  margin-left: 35%;
  border-radius: 15px;
  background: #fff;
`
const PopUpInpuTitle = styled.p`
  font-family: 'Nunito', sans-serif;
  margin-bottom: .3em;
`
const PopUpInput = styled.input`
  width: 95%;
  outline: none;
  padding: .5rem;
  border: 1px solid #5e5e5e;
  color: #5e5e5e;
  border-radius: 5px;
  font-family: 'Nunito', sans-serif;

`

export default NoteCreate;
