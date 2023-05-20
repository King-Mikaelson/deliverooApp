import React, {useLayoutEffect} from 'react';
import {View, Text,  Image, TextInput, ScrollView} from "react-native"
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline"
import Categories from '../../components/Categories';
import FeaturedRows from '../../components/FeaturedRows';

const  HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle:"Alucard's Playground",
        headerShown:false
      })
    }, [])
    return (
    <SafeAreaView className="bg-white pt-5 flex-1">
    <View className="flex-1">
    <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{
            uri:"https://links.papareact.com/wru"
        }}
        className="h-7 w-7 p-4 bg-gray-300 rounded-full"
        />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location
            < ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>

          <UserIcon  size={35} color="#00CCBB"/>
        </View>

        {/* Search Box */}
        <View className="space-x-2 pb-2 mx-4 flex-row items-center justify-between">
            <View className="flex-row space-x-2 p-3 bg-gray-200 flex-1">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput keyboardType='default' placeholder="Input your Text here"/>
            </View>

            <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

      {/* Body */}
      <ScrollView
      contentContainerStyle={{
        paddingBottom: 100
      }}
       className="bg-gray-100">
      {/* Categories */}
        <Categories/>
      {/* Featured Rows */}
      <FeaturedRows
      id="1234"
      description="Paid placements from our partners"
      featuredCatgory="Featured"
      title="Featured"/>

      <FeaturedRows
       id="12345"
      description="discounts"
      featuredCatgory="Everyone has been enjoying discounts"
      title="Tasty Discounts"/>


      <FeaturedRows 
      id="123456"
      description="Why not support your local resturants?"
      featuredCatgory="offers"
      title="Offers near you!"/>
      </ScrollView>

    </View>
        </SafeAreaView>
    );
  }

export default HomeScreen;