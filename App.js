import React from 'react'

import Movies from './Movies'

import {
  View,
  Text,
  Navigator,
  TouchableOpacity,
} from 'react-native'

const navBarHeight = 60
const navBarStyle = {
  paddingTop: navBarHeight,
  backgroundColor: 'rgb(255, 187, 36)'
}
const App = () => (
  <Navigator
    style={{ paddingTop: navBarHeight }}
    initialRoute={{ key: 'movies' }}
    renderScene={(route, navigator) => {
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
        style={navBarStyle}
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
              return <Text>Now Playing</Text>
            }
            return null
          },
        }}
      />
    }
  />
)

export default App;
