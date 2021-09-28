import styled from "styled-components";
const NoteTitle = ({ title, caption }) => (
  <label>
    <TitleText>
      {title.substring(0, 13)}
      {title.length > 13 ? "..." : ""}
    </TitleText>
    <CaptionText>
      {caption.substring(0, 65)}
      {caption.length > 65 ? "..." : "."}
    </CaptionText>
  </label>
);

const TitleText = styled.label`
  color: #d9d9d9;
  font-weight: 800;
  font-size: 1.5em;
  word-wrap: break-word;
`;
const CaptionText = styled.p`
  color: rgba(176, 176, 176, 1);
  font-size: 0.7rem;
  word-wrap: break-word;
`;

export default NoteTitle;
