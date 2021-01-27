import { useEffect } from "react";
import './Visualizer.css'

const marked = require('marked');

marked.setOptions({
  gfm: true,
  breaks: true
});

const Visualizer = (props) => {

  useEffect(() => {

    document.getElementById("preview").innerHTML = marked(props.input);

    let blocks = document.getElementsByTagName("pre");

    for (let index = 0; index < blocks.length; index++) {
      document.getElementsByTagName("pre")[index].style.border = "2px solid black";
    }

  }, [props.input]);

  return (
    <div className="container-fluid px-0">
      <h2 className="text-center text-white bg-dark py-2 mb-0 border border-dark">Visualizer</h2>
      <div id="preview" className="container-fluid mx-auto border border-dark shadow-lg p-4"></div>
    </div>
  );
};

export default Visualizer;