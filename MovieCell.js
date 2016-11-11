import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import * as api from './api'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'rgb(150, 150, 150)',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 12,
    color: 'rgb(100, 100, 100)',
  },
  poster: {
    marginRight: 10,
    width: 100,
    height: 100,
  }
})
const MovieCell = ({ movie }) => (
  <View style={styles.container}>
    <Image
      style={styles.poster}
      resizeMode="contain"
      source={{ uri: api.getPosterUrl(movie.poster_path) }}/>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
        <Text style={styles.overview} numberOfLines={3}>{movie.overview}</Text>
      </View>
  </View>
)
MovieCell.propTypes = {
  movie: React.PropTypes.object.isRequired,
}

export default MovieCell
