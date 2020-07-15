// import React from 'react';

// const Switch = ({ hClick }) => <input type="checkbox" onClick={hClick} />;

// export default Switch;
// //

import React from 'react';
import './index.css';

const Switch = ({ hClick }) => (
  <>
    <input
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
      onClick={hClick}
    />
    <label className="react-switch-label" htmlFor={`react-switch-new`}>
      <span className={`react-switch-button`} />
    </label>
  </>
);

export default Switch;
