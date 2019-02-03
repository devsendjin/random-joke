import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  url = "https://api.chucknorris.io/jokes/categories";
  state = {
    genres: [],
    itemsToShow: 10,
    expanded: false
  };

  componentDidMount() {
    fetch(this.url)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({ genres: body });
      })
      .catch(err => console.error(`Err ${err}`));
  }

  showMore = () => {
    this.state.itemsToShow === 10
      ? this.setState({ itemsToShow: this.state.genres.length, expanded: true })
      : this.setState({ itemsToShow: 10, expanded: false });
  };

  render() {
    const { genres } = this.state;
    const { setJokeByCategory, selectedCategory } = this.props;

    const body = genres.slice(0, this.state.itemsToShow).map(genre => {
      const activeClass = selectedCategory === genre ? "active" : null;
      return (
        <li className={`genre__item ${activeClass}`} key={genre}>
          <span
            className="genre__item-text"
            onClick={() => setJokeByCategory(genre)}
          >
            {genre[0].toUpperCase() + genre.slice(1)}
          </span>
        </li>
      );
    });
    return (
      <aside>
        <nav>
          <ul className="genre__list">
            {body}
            <span className="more" onClick={this.showMore}>
              {this.state.expanded ? "Less" : "More"} &#10148;
            </span>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
