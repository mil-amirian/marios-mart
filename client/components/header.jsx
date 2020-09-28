import React from 'react';

function PageTitle(props) {
  return (
    <header>
      <div className="header row d-flex align-items-center">
        <div className="col-1"></div>
        <h6 className="title col align-self-center pt-2"><b>$ </b>{props.text}</h6>
      </div>
    </header>
  );
}

export default PageTitle;
