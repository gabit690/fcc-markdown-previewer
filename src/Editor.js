import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Editor.css';

const Editor = (props) => {

  function handleChange(ev) {
    props.setInput(ev.target.value);
  }

  return (
    <div className="container-fluid px-0">
      <div style={{position: 'relative'}}>
        <h2 className="text-center text-white bg-dark py-2 mb-0 border border-dark">Editor</h2>
        <button title="clear" type="button" className="btn btn-outline-info" onClick={props.eraseInput}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
          </svg>
        </button>
      </div>
      <textarea id="editor" className="d-block border border-dark shadow-lg p-4" value={props.input} onChange={handleChange}></textarea>
    </div>
  );
}

export default Editor;