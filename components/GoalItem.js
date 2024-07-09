// Global imports
import { StyleSheet, Pressable, Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        style={({ pressed }) => pressed && styles.pressedItem }
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onRemoveGoal.bind(this, props.id)}
      >
        <Text style={styles.goalItemText}>{props.value}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 6,
    backgroundColor: '#eeeeee',
  },
  goalItemText: {
    color: 'black',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }
});
