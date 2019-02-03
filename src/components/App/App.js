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

  onRandomJoke = () => {
		this.setState({ loading: true });
    fetch(this.urlRandomJoke)
      .then(res => {
        return res.json();
      })
      .then(body => {
        if (!this.state.selectedCategory) {
          this.setState({
            jokeByCategory: body.value,
            loading: false
          });
        } else {
          this.setState({
            jokeByCategory: body.value,
            selectedCategory: "",
            loading: false
          });
        }
      })
      .catch(err => console.error(`Err ${err}`));
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
          />
        </div>
      </div>
    );
  }
}

export default App;
