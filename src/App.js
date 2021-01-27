import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Visualizer from './Visualizer';

const initialInput = "# Heading \n\
## Subheading \n\
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

  function eraseEditorContent() {
    setInput("");
  }

  return (
    <div className="container-fluid bg-secondary App px-0">
      <h1 id="main-title" className="d-flex justify-content-center align-items-center">Markdown previewer</h1>
      <p  id="author" className="text-white d-flex justify-content-center">By Gabit</p>
      <div className="row">
        <div className="col-md-6 d-md-flex justify-content-center align-items-center px-5 mb-3 mb-md-0">
          <Editor input={input} setInput={changeInput} eraseInput={eraseEditorContent} />
        </div>
        <div className="col-md-6 d-md-flex justify-content-center align-items-center px-5">
          <Visualizer input={input} />  
        </div>
      </div>
    </div>
  );
}

export default App;