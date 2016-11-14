import React from 'react'

import Movies from './Movies'
import MovieDetails from './MovieDetails'

import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const navBarHeight = 60

const styles = StyleSheet.create({
  navBarStyle: {
    paddingTop: navBarHeight,
    backgroundColor: 'rgb(255, 187, 36)',
  },
  navBarTitleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
})

const NavMovies = ({ onNavChange, tabIndex }) => (
  <Navigator
    style={{ paddingTop: navBarHeight }}
    initialRoute={{ key: 'movies' }}
    renderScene={(route, navigator) => {
      onNavChange(navigator)
      navRef = navigator
      if (route.key === 'movies') {
        return <Movies onSelectMovie={(movie) => navigator.push({ key: 'details', movie })} tabIndex={tabIndex}/>
      } if (route.key === 'details') {
        return <MovieDetails movie={route.movie}/>
      }
    }}
    configureScene={() => Navigator.SceneConfigs.PushFromRight}
    navigationBar={
      <Navigator.NavigationBar
        style={styles.navBarStyle}
        routeMapper={{
          LeftButton: (route, navigator) => {
            if (route.key === 'movies') return null
            return (
              <TouchableOpacity onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableOpacity>
            )
          },
          RightButton: () => {},
          Title: (route) => {
            if (route.key === 'movies') {
              if (tabIndex === 1) {
                return <Text style={styles.navBarTitleStyle}>Now Playing</Text>
              } else {
                return <Text style={styles.navBarTitleStyle}>Top Rated</Text>
              }
            }
            return null
          },
        }}
      />
    }
  />
)

NavMovies.propTypes = {
  onNavChange: React.PropTypes.func
}

export default NavMovies;
