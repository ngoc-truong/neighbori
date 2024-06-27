import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectItem from "./components/ProjectItem";

export default function App() {
  const [projects, setProjects] = useState([]);

  function addProjectHandler(title, description) {
    setProjects((currentProjects) => [
      ...currentProjects,
      { title: title, description: description },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <ProjectForm onAddProject={addProjectHandler} />
      </View>
      <View style={styles.projectsContainer}>
        <FlatList
          data={projects}
          renderItem={(itemData) => {
            return (
              <ProjectItem
                title={itemData.item.title}
                description={itemData.item.description}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.title;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 64,
    backgroundColor: "grey",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "green",
  },
  projectsContainer: {
    flex: 5,
    backgrounColor: "red",
  },
});
