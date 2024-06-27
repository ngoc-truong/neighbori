import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

function ProjectForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function titleInputHandler(enteredText) {
    setTitle(enteredText);
  }

  function descriptionInputHandler(enteredText) {
    setDescription(enteredText);
  }

  function addProjectHandler() {
    props.onAddProject(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <View style={styles.formContainer}>
      <Text>Project title</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={titleInputHandler}
        value={title}
      />
      <Text>Description</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={descriptionInputHandler}
        value={description}
      />
      <Button title="Add project" onPress={addProjectHandler} />
    </View>
  );
}

export default ProjectForm;

const styles = StyleSheet.create({
  formContainer: {
    // backgroundColor: "red",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
  },
});
