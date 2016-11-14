import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import * as api from './api'
import ProgressiveImage from './ProgressiveImage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 187, 36)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
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
    width: 300,
    height: 300,
  }
})
const MovieCell = ({ movie }) => (
  <View style={styles.container}>
    <ProgressiveImage
      style={styles.poster}
      resizeMode="contain"
      resizeMethod="resize"
      sourceHigh={{ uri: api.getPosterUrlHigh(movie.poster_path) }}
      sourceLow={{ uri: api.getPosterUrlLow(movie.poster_path) }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} >{movie.title}</Text>
        <Text style={styles.overview} >{movie.overview}</Text>
      </View>
  </View>
)
MovieCell.propTypes = {
  movie: React.PropTypes.object.isRequired,
}

export default MovieCell
