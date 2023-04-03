import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import getImages from 'services/fetch';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    search: '',
    results: {},
  };

  formSubmit = searchValue => {
    getImages(searchValue).then(data => {
      this.setState({
        search: searchValue,
        results: data.hits,
      });
      return data.hits;
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.formSubmit} />
        {this.state.search && <ImageGallery items={this.state.results} />}
      </Container>
    );
  }
}
