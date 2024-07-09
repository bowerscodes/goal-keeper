// Global imports
import { 
  StyleSheet, 
  Button, 
  Modal, 
  TextInput, 
  View 
} from 'react-native';
import { useState } from 'react';


const GoalInput = (props) => {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your goal' 
          value={enteredGoalText}
          onChangeText={goalInputHandler} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color={'red'} onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});
