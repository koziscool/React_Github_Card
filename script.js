
var Card = React.createClass({

  getInitialState: function() {
    return null;
  },

  render: function() {
    return (
      <div>
        <img src="https://avatars.githubusercontent.com/u/7587245?v=3" width="80" />
        <h3>Kit</h3>
        <hr/>
      </div>
    );
  }

});


var Main = React.createClass({
  
  render: function() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
});


ReactDOM.render( <Main />, document.getElementById("root") );