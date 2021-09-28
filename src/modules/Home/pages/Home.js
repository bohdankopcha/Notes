import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import NoteTitle from "../components/NoteTitle";
import NoteEditor from "../components/NoteEditor";
import NoteCreate from "../components/NoteCreate";

const Home = () => {
  const [data, setData] = useState([
    {
      title: "Hello world!",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis vel est cursus elementum. Nulla facilisi. Donec eu ligula at metus tempus sagittis vel nec justo. Suspendisse commodo condimentum urna, sed tincidunt nibh pharetra in. In laoreet tincidunt orci, sit amet venenatis est. Aenean vitae sollicitudin justo, non maximus nunc. Nullam ut hendrerit ex, eget suscipit velit. Integer nec vulputate urna, non tempus purus Praesent vehicula viverra arcu eget vestibulum. Nam ac neque fringilla, bibendum est sed, molestie diam. Integer in massa libero. Cras at porttitor est. Donec ut hendrerit neque. Ut tempus tellus a justo mattis venenatis. Vestibulum convallis, arcu ac dapibus lobortis, lacus nunc congue leo, et venenatis risus dui at orci. Quisque eget elit lorem. Nam id sapien a dui elementum pellentesque at ut mi. Sed convallis pulvinar lacus, at auctor ex consectetur tincidunt. Duis a maximus lorem. Quisque dictum, dui eu rhoncus condimentum, elit massa sagittis dolor, ac luctus est neque ac sapien. Integer et tempor felis. Integer a sem non lorem hendrerit pharetra rhoncus sed lectus. Cras est neque, porttitor rutrum placerat non, euismod a nunc. Etiam quis tortor dolor. Sed ultricies massa turpis, vel bibendum ex rhoncus nec. Suspendisse auctor luctus eros, vel dignissim purus auctor eu. Vivamus ac augue quis nibh viverra finibus eget at dui. Suspendisse consectetur suscipit lectus. Curabitur sit amet massa erat. Maecenas non rhoncus nibh, at bibendum ipsum. Vivamus quis leo mi. Curabitur vitae lorem a augue placerat aliquet in eu diam. Proin ligula sapien, consectetur sed eros vel, malesuada hendrerit erat.",
    },
    { title: "Glad to see you here!", caption: "Have a nice day <3" },
    {
      title: "Important giraffe info",
      caption:
        "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However, the existence of up to nine extant giraffe species has been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other prehistoric species, known from fossils, are extinct. The giraffe's chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, and its distinctive coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. Its scattered range extends from Chad in the north to South Africa in the south, and from Niger in the west to Somalia in the east. Giraffes usually inhabit savannahs and woodlands.",
    },
  ]);

  const newNote = (title, caption) => {
    title = title || '[not named]'
    const updatedData = [
      ...data,
      {
        title: title,
        caption: caption,
      },
    ];
    setData(updatedData);
  };

  const deleteNote = (index) => {
    const updatedData = data.filter((note, noteIndex) => {
      return noteIndex !== index;
    });
    setData(updatedData);
  };

  const changeNote = (index, newTitle, newCaption) => {
    newTitle = newTitle || "[not named]";
    const newNote = {
      title: newTitle,
      caption: newCaption,
    };
    const updatedData = data.map((note, noteIndex) => {
      return noteIndex === index ? newNote : note;
    });
    setData(updatedData);
  };

  return (
    <div>
      {data.length > 0 ? (
        <Tabs>
          <TabList className="titles-wrapper">
            {data.map((note, index) => {
              return (
                <Tab
                  key={index}
                  className="title"
                  selectedClassName="title-selected"
                >
                  <NoteTitle
                    title={note.title}
                    caption={note.caption}
                  />
                </Tab>
              );
            })}
          </TabList>
          <NoteCreate createNewNote={newNote} />
          <CaptionWrapper>
            {data.map((note, index) => {
              return (
                <TabPanel key={index}>
                  <NoteEditor
                    index={index}
                    title={note.title}
                    text={note.caption}
                    valueChangeHandler={changeNote}
                    deleteNote={deleteNote}
                  />
                </TabPanel>
              );
            })}
          </CaptionWrapper>
        </Tabs>
      ) : (
        <div>
          <NoNotesText>No notes</NoNotesText>
          <NoteCreate createNewNote={newNote} />
        </div>
      )}
    </div>
  );
};
const CaptionWrapper = styled.div`
  float: right; 
  width: 60%;
`
const NoNotesText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  font-weight: 900;
  padding-top: 3em;
  padding-bottom: 3em;
`;

export default Home;
