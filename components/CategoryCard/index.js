import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity className="mr-2 items-center relative">
    <Image
    source={{uri:imgUrl}}
    className="h-20 w-20 bg-red-300 rounded"
    />
      <Text className="absolute bottom-1 left-1 text-white font-bold ">{title}</Text>
    </TouchableOpacity>
  )
}