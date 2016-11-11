import React from 'react'

import Movies from './Movies'

import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
  BackAndroid,
  Platform
} from 'react-native'

const navBarHeight = 60

const styles = StyleSheet.create({
  navBarStyle: {
    paddingTop: navBarHeight,
    backgroundColor: 'rgb(255, 187, 36)',
  },
  navBarTitleStyle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
})

let navRef = null
if (Platform.OS === 'android') {

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (navRef && navRef.getCurrentRoutes().length > 1) {
    navRef.pop()
    return true
  }
  return false
  })
}

const App = () => (
  <Navigator
    style={{ paddingTop: navBarHeight }}
    initialRoute={{ key: 'movies' }}
    renderScene={(route, navigator) => {
      navRef = navigator
      if (route.key === 'movies') {
        return <Movies onSelectMovie={(movie) => navigator.push({ key: 'details', movie })}/>
      }
      return (
        <View style={{ flex: 1, backgroundColor: 'rgb(230, 230, 232)' }}>
          <Text>I'm a details view for ... </Text>
          <Text>{route.movie.title}</Text>
        </View>
      )
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
              return <Text style={styles.navBarTitleStyle}>Now Playing</Text>
            }
            return null
          },
        }}
      />
    }
  />
)

export default App;
