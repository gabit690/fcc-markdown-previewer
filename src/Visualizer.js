import { useEffect } from "react";
const marked = require('marked');

marked.setOptions({
  gfm: true,
  breaks: true
});

const Visualizer = (props) => {

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(props.input);
  }, [props.input]);

  return (
    <div>
      <h2>Visualizer</h2>
      <div id="preview"></div>
    </div>
  );
};

export default Visualizer;