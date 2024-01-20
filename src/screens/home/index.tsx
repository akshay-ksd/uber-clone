
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './molecule/header';
import SearchBar from './molecule/search-bar/search-bar';
import Suggestion from './orgnaizer/suggetions/suggention';
import CategoryList from './orgnaizer/category-list/category-list';
import data from './constants/data';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{flex:1}}>
        <SearchBar />
        <Suggestion/>
        {
          data.map((x,i)=>(
            <CategoryList data={x} key={i}/>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default Home;
