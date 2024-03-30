// HomeScreen.jsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList'; 
import ToDoForm from '../components/ToDoForm'; 

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText.trim()]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
