import { useClerk } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { styled } from "nativewind";
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/(auth)/sign-in');
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="flex-1">
        <Text className="text-2xl font-bold mb-6">Settings</Text>

        {/* Logout Button */}
        <Pressable
          className="bg-red-500 p-4 rounded-lg items-center mt-auto mb-4"
          onPress={handleSignOut}
        >
          <Text className="text-white font-semibold text-base">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Settings