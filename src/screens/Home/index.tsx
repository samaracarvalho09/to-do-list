import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles';
import Rocket from '../../assets/rocket-icon.svg';
import { useState } from "react";
import TaskList from "../../components/TaskList";
import EmptyList from "../../components/EmptyList";
import AddButton from '../../assets/plus-icon.svg';
import ToDo from '../../assets/todo-icon.svg'
import uuid from 'react-native-uuid';

interface Task {
  name: string;
  checked: boolean;
  id: string,
}

export default function Home() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleTaskAdd() {
    if (task.trim()) {
      const newTask = {
        id: uuid.v4() as string,
        name: task,
        checked: false,
      };
      setTaskList(prevState => [...prevState, newTask]);
      setTask('');
    }
  };

  function handleTaskRemove(id: string, name: string) {
    return Alert.alert('Excluir tarefa', `Deseja excluir a tarefa "${name}"?`, [{
      text: 'Sim',
      onPress: () => setTaskList(prevState => prevState.filter(task => task.id !== id))
    },
    {
      text: 'Não',
      style: 'cancel'
    }])
  };

  function toggleTaskChecked(taskId: string) {
    setTaskList(prevState =>
      prevState.map(item =>
        item.id === taskId ? { ...item, checked: !item.checked } : item
      )
    )
  }

  return (
    <>
      <View style={styles.wrapperContainer}>
        <View style={styles.darkContainer}>
        </View>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Rocket />
            <ToDo />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor='#808080'
              onChangeText={setTask}
              value={task}
            />
            <TouchableOpacity
              onPress={handleTaskAdd}
              style={styles.buttonAdd}
            >
              <AddButton
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerTaskCounter}>
            <View style={styles.containerCreatedTasks}>
              <Text style={styles.textStyleCreatedTask}>Criadas</Text>
              <Text style={styles.numberStyleCreatedTask}>{taskList.length}</Text>
            </View>
            <View style={styles.containerCompletedTasks}>
              <Text style={styles.textStyleCompletedTasks}>Concluídas</Text>
              <Text style={styles.numberStyleCompletedTasks}>{taskList.filter(task => task.checked).length}</Text>
            </View>
          </View>
          <View style={styles.containerTaskList}>
            <FlatList
              keyExtractor={item => item.id}
              data={taskList}
              renderItem={({ item }) => (
                <TaskList
                  key={item.id}
                  taskName={item.name}
                  checked={item.checked}
                  onToggle={() => toggleTaskChecked(item.id)}
                  onRemove={() => handleTaskRemove(item.id, item.name)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList />
              }
            />
          </View>
        </View>
      </View>
    </>
  )
}