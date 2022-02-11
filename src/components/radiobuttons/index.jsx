import React from "react";

      const Radio = ({onChecked, option1value, option2value, option3value}) => {
    return (<div className="container">
    <div className="row">
      <div className="col-sm-12">
  
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={option1value} onChange = {e=>onChecked("option1",e)} />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" checked={option2value} onChange = {e=>onChecked("option2",e)} />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" checked={option3value} onChange = {e=>onChecked("option3",e)} />
              Option 3
            </label>
          </div>
        </form>
  
      </div>
    </div>
  </div>
  );
  }

  export default Radio; 
