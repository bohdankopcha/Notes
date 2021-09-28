import styled from "styled-components";

const NoteDelete = ({index, deleteNote}) => {
    return (<DeleteButton onClick={()=>deleteNote(index)}>&#10005;</DeleteButton>)
}

const DeleteButton = styled.span`
    color: red;
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    cursor: pointer;
`

export default NoteDelete;