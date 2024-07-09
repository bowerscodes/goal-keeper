// Global imports
import { 
  StyleSheet, 
  Button, 
  Image,
  FlatList,
  Text, 
  View 
} from 'react-native';
import { useState } from 'react';

// Local imports
import GoalInput from './components/GoalInput';
import GoalItem  from './components/GoalItem';


export const App = () => {

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const openAddGoalModalHandler = () => {
    setAddModalVisible(true);
  };

  const closeAddGoalModalHandler = () => {
    setAddModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { goal: enteredGoalText, key: `${currentGoals.length.toString()}` }
    ]);
    closeAddGoalModalHandler();
  };

  const removeGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsHeadingContainer}>
        <Text style={styles.goalsHeading}>Goals</Text>
        <Button 
          title='Add' 
          onPress={openAddGoalModalHandler}  
        />
        <GoalInput 
          visible={addModalVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={closeAddGoalModalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                value={itemData.item.goal}
                id={itemData.item.key} 
                onRemoveGoal={removeGoalHandler} 
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flexDirection: 'row',
    flex: 5,
    margin: 5
  },
  goalsHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalsHeading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
