import { View, Text } from "react-native";

function ProjectItem(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  );
}

export default ProjectItem;
