import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: false, // This hides the header for all tab screens
          }} 
        />
      </Stack>
    </SafeAreaView>
  );
}