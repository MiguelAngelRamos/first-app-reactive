import { React, Fragment, useState } from 'react';
import { StyleSheet, FlatList, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  // Estado de la lista de tareas
  const [task, setTask] = useState(''); // Texto del input
  const [tasks, setTasks] = useState([]); // Listado de tareas 

  const addTask = () => {
    // si hay texto en el input    
    //       react         
    if(task.trim()){
      setTasks([...tasks, {id: Date.now().toString, text: task, completed: false }]);
      setTask('');
    }
  }
  
  // Función para marcar dar la tarea por completada
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed}:task
    ));
  };
  return (
    <>
      <View style={styles.container}>
       <Text style={styles.title}>Lista de Tareas </Text>
       <View>
        <TextInput 
          style={styles.input} 
          placeholder='Escriba una tarea...'
          value={task}
          onChangeText={setTask}
          />
        <Button title="Agregar" onPress={addTask}/>
       </View>
       <FlatList 
        data={tasks}
        renderItem={({ item }) => (
         <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <Text>{item.text}</Text>
         </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
       />
      </View>
    </>

  );
}

// Estilos de la App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:24,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
    width: '70%'
  }
});

