// Global imports
import { 
  StyleSheet, 
  FlatList,
  Text, 
  View 
} from 'react-native';
import { useState } from 'react';

// Local imports
import GoalInput from './components/GoalInput';
import GoalItem  from './components/GoalItem';


export default function App() {

  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { goal: enteredGoalText, key: `${currentGoals.length.toString()}` }
    ]);
  };


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeading}>Goals:</Text>
        <FlatList 
          data={goals} 
          renderItem={(itemData) => {
            return <GoalItem value={itemData.item.goal} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
    margin: 5
  },
  goalsHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16
  },
});
