import React, { Component } from "react";
import "./app.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

class App extends Component {
  url = "https://api.chucknorris.io/jokes/random?category=";
  urlRandomJoke = "https://api.chucknorris.io/jokes/random";

  state = {
    jokeByCategory: "",
    selectedCategory: "",
    loading: false
  };

  componentDidMount() {
    this.onRandomJoke();
  }

  getJoke(url) {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({
          jokeByCategory: body.value,
          loading: false
        });
      })
      .catch(err => console.error(`Err ${err}`));
  }

  onRandomJoke = () => {
    this.setState({ loading: true });
    if (this.state.selectedCategory) {
      this.getJoke(this.url + this.state.selectedCategory);
    } else {
      this.getJoke(this.urlRandomJoke);
    }
  };

  setJokeByCategory = genre => {
    this.setState({ loading: true });
    fetch(this.url + genre)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({
          jokeByCategory: body.value,
          selectedCategory: genre,
          loading: false
        });
      })
      .catch(err => console.error(`Err ${err}`));
  };

  resetCategory = () => {
    if (this.state.selectedCategory) {
      this.setState({ selectedCategory: "" });
    }
  };

  render() {
    const { loading, jokeByCategory } = this.state;
    return (
      <div className="app">
        <Header />
        <div style={{ display: "flex", marginTop: "40px" }}>
          <Sidebar
            setJokeByCategory={this.setJokeByCategory}
            selectedCategory={this.state.selectedCategory}
          />
          <Main
            loading={loading}
            onRandomJoke={this.onRandomJoke}
            jokeByCategory={jokeByCategory}
            resetCategory={this.resetCategory}
          />
        </div>
      </div>
    );
  }
}

export default App;
