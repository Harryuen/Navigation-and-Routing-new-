// ToDoList.jsx
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;