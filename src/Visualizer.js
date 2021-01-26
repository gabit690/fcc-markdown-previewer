import { useEffect } from "react";
const marked = require('marked');

const Visualizer = (props) => {

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(props.input);
  }, [props.input]);

  return (
    <div id="preview"></div>
  );
};

export default Visualizer;