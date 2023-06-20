import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native'
import React from 'react'


export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>Card Slider</Text>
          <Text style={styles.appName}>O</Text>
        </View>
        <View style={styles.titles}>
          <Text style={styles.topTitles}>Select the Movie !</Text>
          <Text style={styles.subTitles}>Tap to change</Text>
          <View style={styles.card}></View>
          <View style={styles.button}>
            <Text style={styles.buttonTxt}>Start Watching !!!</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'column'
  },
  titles: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topTitles: {
    padding: 10,
    fontSize: 28,
  },
  subTitles: {
    padding: 4,
    fontSize: 18
  },
  card: {
    margin: 30,
    height: 435,
    width: 316,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  button: {
    width: 245,
    height: 50,
    backgroundColor: '#191A23',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTxt: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold'
    
  }


})