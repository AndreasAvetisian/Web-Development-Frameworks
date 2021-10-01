import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

// let carrot = false;
// let limon = false;
// let yogurt = false;
// let beer = false;

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    // setTimeout(() => {
    //   // this.state.items = [];
    //   // this.state.items.push();
    //   this.setState({ items: [...this.state.items, { id: 5, value: 'carrots', qty: 5, unit: 'x'}] });
    // }, 2000);
  }

  addSomeProduct(nameOfThisProduct) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].value === nameOfThisProduct) {
        let productArr = [...this.state.items];
        productArr[i].qty += Math.floor(Math.random() * 10) + 1;
        return this.setState({items: productArr});
      } else {
        this.setState({ items: [...this.state.items, {id: (this.state.items.length+1), value: nameOfThisProduct, qty: Math.floor(Math.random() * 10) + 1, unit: 'x' }]});
      }
    }
  }
  
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <p>This buttonts will add random quantity of products (from 1 to 10).</p>
      <div className={ styles.buttons}>
        <button onClick={() => this.addSomeProduct('Carrots')}>Add carrots!</button>
        <button onClick={() => this.addSomeProduct('Limons')}>Add limons!</button>
        <button onClick={() => this.addSomeProduct('Yogurts')}>Add yogurts!</button>
        <button onClick={() => this.addSomeProduct('Beer')}>Add beer!</button>
      </div>
      
    </div>
  }
}

export default App;