import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/dataContext'
import CustomButton from '../components/CustomButton';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {state.name}</Text>
      <CustomButton text="Restaurants" onPress={() => navigation.navigate("Restaurants")} />
      <CustomButton text="Reviews" onPress={() => navigation.navigate("Reviews")} />

      {state.isAdmin ? (

            <CustomButton text="Users" onPress={() => navigation.navigate("Users")} />

          ) : (

              <></>
              
          )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'space-around'
  },
  text: {
    fontSize: 30,
    margin: 40
  }
})

export default Home;