import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const RootLayout = () => {
  return (
    <SafeAreaView>
      <Text className='text-4xl'>RootLayout</Text>
    </SafeAreaView>
  )
}

export default RootLayout

{/**
  
  <SafeAreaView>
    <Stack>
      <Stack.Screen name='index'/>
    </Stack>
    </SafeAreaView>
  */}