/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Axios from 'axios'
import {Button} from 'native-base'
import User from './components/User';

export const App=()=>{
  const [details,setDetails]=useState(null)

  const fetchDetails=async ()=>{
    try {
      const {data}=await Axios.get('https://randomuser.me/api/')
      const details=data.results[0]

      setDetails(details)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchDetails()
  },[])

  if(!details){
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <View>
        <User details={details}/>
        <Button
        rounded
        style={styles.button}
        onPress={()=>fetchDetails()}
        >
          <Text>New User</Text>
        </Button>
      </View>
    </View>
  )
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222831"
  },
  button:{
    marginTop:30,
    paddingHorizontal:30
  }
})