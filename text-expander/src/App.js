// This is a practice code for making a reusable and highly flexible react component

import "./index.css";
import TextExpander from "./TextExpander";

function App() {
  return (
    <div className="App">
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        color="orange"
        initialBtnText="show text"
        endingBtnText="collaps text"
        wordLimit={40}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        wordLimit={20}
        defaultExpand={true}
        divBackgroundColor="#f6f6f6"
        divBorder="1px solid gray"
        divPadding="10px"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
    </div>
  );
}

export default App;
