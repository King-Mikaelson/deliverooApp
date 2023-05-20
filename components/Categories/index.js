import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard 
      title="Grocery"
      imgUrl="https://links.papareact.com/gn7"/>
      <CategoryCard
      title="Food" 
      imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard 
      title="Pharmacy"
      imgUrl="https://links.papareact.com/gn7"/>
      <CategoryCard 
      title="Grocery"
      imgUrl="https://links.papareact.com/gn7"/>
      <CategoryCard
      title="Food" 
      imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard 
      title="Pharmacy"
      imgUrl="https://links.papareact.com/gn7"/>

    </ScrollView>
  );
}