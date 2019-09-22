import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const HomeScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Add Post' onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default HomeScreen;
