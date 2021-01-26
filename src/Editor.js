import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Editor = (props) => {

    function handleChange(ev) {
        props.setInput(ev.target.value);
    }

    return (
        <div>
            <h2>Editor</h2>
            <textarea id="editor" value={props.input} onChange={handleChange}></textarea>
        </div>
    );
}

export default Editor;