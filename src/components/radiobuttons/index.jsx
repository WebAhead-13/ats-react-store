var React = require('react');

var Application = React.createClass({
  render: function () {
    return (<div className="container">
    <div className="row">
      <div className="col-sm-12">
  
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Option 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Option 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Option 3
            </label>
          </div>
        </form>
  
      </div>
    </div>
  </div>
  );
  }
});

module.exports = Application;