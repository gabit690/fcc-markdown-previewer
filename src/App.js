import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Visualizer from './Visualizer';

const initialInput = "# Título \n\
## Subtítulo \n\
A [Freecodecamp link](https://www.freecodecamp.com) \n\n\
Inline code `<div></div>` \n\
```\n\
// Code block. \n\n\
const greetings = (name) => {console.log('Hello' + name)};\n\
greetings('Gabit');\n\
// OUTPUT ==> Hello Gabit\n\
```\n\
List items \n\
- Item 1\n\
  - Item 2\n\
    - Item 3\n\n\
> Blockquote!\n\n\
![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/120px-Markdown-mark.svg.png)\n\n\
**bold text**.";

function App() {
  
  const [input, setInput] = useState(initialInput);
  
  function changeInput(newInput) {
    setInput(newInput);
  }

  return (
    <div className="App">
      <h1>Markdown previewer</h1>
      <p>By Gabit</p>
      <div>
        <Editor input={input} setInput={changeInput} />
        <Visualizer input={input} />
      </div>
    </div>
  );
}

export default App;


// User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

// User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

// Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.