import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text>editsd tiscreen.</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => addTodo({ text: "Walk the dog" })}>
        <Text>Add a Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.bg,
    },
  });

  return styles;
};
