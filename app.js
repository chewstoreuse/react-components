// TODO
var App = () => (
  <GroceryList groceryItems={['Coffee', 'Apples']} />
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: true
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));