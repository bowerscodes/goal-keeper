// Global imports
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.value}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#eeeeee',
  },
  goalItemText: {
    color: 'black'
  }
});
