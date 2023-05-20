import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline';

const ResturantCard = ({
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="">
    <Image
    source={{uri:imageUrl}}
    className="h-36 w-64 rounded"
    />
    <View className="px-3 pb-4">
    <Text className="font-bold text-lg pt-2">{title}</Text>

    <View className="flex-row items-center space-x-1" >
        <StarIcon opacity={0.5} size={22} color="green"/>
        <Text className="text-gray-500 text-sm">
            <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        {/* <MapPinIcon opacity={0.5} size={22} color="green"/> */}
    </View>
    </View>

    </TouchableOpacity>
  )
}

export default ResturantCard