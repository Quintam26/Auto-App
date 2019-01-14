import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import About from '../about/About';
import Results from '../cars/Results';
import CarDetail from '../cars/CarDetail';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/search" component={Results}/>
              <Route exact path="/car/:id" component={CarDetail}/>
            </Switch>
          </main>

          <footer><p>&copy; 2019 Mario Quintana</p></footer>
        </div>
      </Router>
    );
  }
}

export default App;