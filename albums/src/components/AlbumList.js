import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// classes have lifecycle methods
class AlbumList extends Component {
  state = { albums: [] }; // initializing state

  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));

      /*{
        console.log(responseData);
      });
      */

      /*
      this.setState({ albums: responseData }));

      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      */
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make component available to other parts of the applciation
export default AlbumList;
