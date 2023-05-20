import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from '../ResturantCard'

export default function FeaturedRows({id,title, description,featuredCatgory}) {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color={"#00CCBB"}/>
      </View>

      <Text className="text-gray-500 px-4 text-xs">{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {/* Resturant Cards */}
        <ResturantCard
        id ={"1234"}
        imageUrl="https://links.papareact.com/gn7"
        title="Mike Resturant"
        rating={"4.5"}
        genre={"American"}
        address={"123 Main Street"}
        short_description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
        dishes={[]}
        long={"123.123"}
        lat={"123.123"}
        />
      </ScrollView>
    </View>
  )
}