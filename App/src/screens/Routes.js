import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/dataContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Home from './Home';
import Restaurants from './restaurants/Restaurants';
import Reviews from './reviews/Reviews';

const Tab = createBottomTabNavigator();

const Routes = ({navigation}) => {
    const { state, dispatch } = useContext(Context)

    return (
        <Tab.Navigator screenOptions={{
            headerRight: () => (
                <Entypo 
                    name= 'log-out'
                    size={20}
                    style={{ margin: 10 }}
                    color= '#000'
                    onPress={() => dispatch({type: 'logOut'})}
                />
            )
        }}>

        <Tab.Screen
            name='Home'
            component={Home} 
            options={{
                tabBarIcon: () => (
                    <Entypo name='home' size={30} />
                )
            }}
        />

        <Tab.Screen
            name='Restaurants'
            component={Restaurants} 
            options={{
                tabBarIcon: () => (
                    <Entypo name='bowl' size={30} />
                )
            }}
        />

        <Tab.Screen
            name='Reviews'
            component={Reviews} 
            options={{
                tabBarIcon: () => (
                    <Entypo name='fingerprint' size={30} />
                )
            }}
        />

        </Tab.Navigator>
  )
};

const styles = StyleSheet.create({

});

export default Routes;