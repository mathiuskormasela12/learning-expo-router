import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

const Layout: React.FC = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{
          title: 'Home',
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({ size, color }) => {
            return (
              <Entypo name='home' size={size} color={color} />
            )
          }
        }} />
         <Tabs.Screen name='user/[name]' options={{
           title: 'User'
         }} />
      </Tabs>
  )
}

export default Layout
