import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center h-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5 w-[300px]">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200 font-psemibold">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[86px] h-[11px] absolute -bottom-0 -right-0"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregula text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />

          <StatusBar backgroundColor="#161622" style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
