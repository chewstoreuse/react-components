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
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));