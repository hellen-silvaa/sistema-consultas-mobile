<TouchableOpacity
  style={[styles.menuItem, { backgroundColor: "#C62828" }]}
  onPress={() => navigation.navigate("PressaoArterial")}
>
  <Text style={styles.menuIcone}>🩺</Text>
  <Text style={styles.menuTitulo}>Pressão Arterial</Text>
  <Text style={styles.menuDescricao}>
    Aferir PA e acionar emergência cardiológica se grave
  </Text>
</TouchableOpacity>
