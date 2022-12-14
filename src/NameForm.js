// import React from "react";
 
// controlled component state+js
// export default class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: " " };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   // method
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     alert(`My name is : ${this.state.value}`);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button type="submit" value="submit">
//           submit
//         </button>
//       </form>
//     );
//   }
// }

// uncontrolled component directly controlled by DOM

// export default class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     alert(`My name is : ${this.input.current.value}`);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Name:
//           <input type="text" ref={this.input} />
//         </label>
//         <button type="submit" onClick={this.handleSubmit}>
//           submit
//         </button>
//       </form>
//     );
//   }
// }

// function component

import React, { useRef } from "react";
import "./NameForm.css";

function NameForm() {
  const ref = useRef();
  function submitForm(event) {
    event.preventDefault();
    alert(`My Name Is : ${ref.current.value}`);
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" ref={ref} />
      </label>
      <button type="submit" onClick={submitForm}>
        Submit
      </button>
    </form>
  );
}

export default NameForm;
