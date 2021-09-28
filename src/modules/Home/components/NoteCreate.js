import React, { useState } from "react";
import styled from "styled-components";

const NoteCreate = ({ createNewNote }) => {
  const [titleInput, setTitleInput] = useState("");
  const [captionInput, setCaptionInput] = useState("");

  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
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
      <PlusButton onClick={toggleModal}>+</PlusButton>
      {visible && (
        <ModalWrapper>
          <Modal>
            <label>
              <ModalTitleSquare />
              <ModalTitle>Create a new note</ModalTitle>
            </label>
            <ModalinputTitle>Title</ModalinputTitle>
            <Modalnput
              value={titleInput}
              onChange={(e) => handleTitleInputChange(e)}
            />
            <ModalinputTitle>Caption</ModalinputTitle>
            <Modalnput
              value={captionInput}
              onChange={(e) => handleCaptionInputChange(e)}
            />
            <ModalButton
              submit
              onClick={() => {
                createNewNote(titleInput, captionInput);
                toggleModal();
              }}
            >
              Submit
            </ModalButton>
            <ModalButton onClick={toggleModal}>Cancel</ModalButton>
          </Modal>
        </ModalWrapper>
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
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: white;
  z-index: 2;
  position: absolute;
  top: 85%;
  left: 30%;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-self: center;
  padding-top: 5rem;
  z-index: 3;
`;
const Modal = styled.div`
  z-index: 4;
  padding: 2rem;
  width: 25%;
  height: 40%;
  margin-top: 5%;
  margin-left: 35%;
  border-radius: 15px;
  background: #fff;
`;
const ModalinputTitle = styled.p`
  font-family: "Nunito", sans-serif;
  margin-bottom: 0.3em;
`;
const Modalnput = styled.input`
  width: 95%;
  outline: none;
  padding: 0.5rem;
  border: 1px solid #5e5e5e;
  color: #5e5e5e;
  border-radius: 5px;
  font-family: "Nunito", sans-serif;
`;

const ModalTitleSquare = styled.span`
  height: 15%;
  width: 10%;
  background-color: rgb(111, 83, 167);
  border-radius: 5px;
  display: inline-block;
  vertical-align: middle;
`;
const ModalTitle = styled.span`
  vertical-align: middle;
  margin-left: 1em;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
`;
const ModalButton = styled.button`
  margin-top: 10%;
  float: right;
  padding: 0.7rem 1rem 0.7rem 1rem;
  border: none;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
  font-weight: 800;

  ${(props) =>
    props.submit
      ? `
    color: #fff;
    background: #007a5a;
  `
      : `
    margin-right: 1em;
    border: 1px solid #5e5e5e;
  `}
`;

export default NoteCreate;
