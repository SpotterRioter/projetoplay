import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CadastroDados1 = () => {
  const navigation = useNavigation();
  const [meninoSelected, setMeninoSelected] = React.useState(false);
  const [meninaSelected, setMeninaSelected] = React.useState(false);

  const handleMeninoPress = () => {
    setMeninoSelected(true);
    setMeninaSelected(false);
  };

  const handleMeninaPress = () => {
    setMeninoSelected(false);
    setMeninaSelected(true);
  };

  const handleBackgroundPress = () => {
    setMeninoSelected(false);
    setMeninaSelected(false);
  };

  const handleBackwardPress = () => {
    navigation.navigate("CadastroDados");
  };

  return (
    <View style={styles.cadastroDados2}>
      <Pressable style={styles.backwardButton} onPress={handleBackwardPress}>
        <Ionicons name="arrow-back" size={30} color="hotpink" />
      </Pressable>
      <Text style={styles.faleMaisSobre}>Fale mais sobre você</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("CadastroDados2")}
      >
        <View style={styles.groupChild} />
        <Text style={styles.prximo}>Próximo</Text>
      </Pressable>
      <Text style={styles.voc}>Você é ?</Text>
      <Pressable
        style={[
          styles.menino,
          styles.meninoTypo,
          meninoSelected && styles.selectedMenino,
        ]}
        onPress={handleMeninoPress}
      >
        <Text style={styles.buttonText}>Menino</Text>
      </Pressable>
      <Pressable
        style={[
          styles.menina,
          styles.meninoTypo,
          meninaSelected && styles.selectedMenina,
        ]}
        onPress={handleMeninaPress}
      >
        <Text style={styles.buttonText}>Menina</Text>
      </Pressable>
      <Pressable style={styles.background} onPress={handleBackgroundPress} />
      <Image
        style={[styles.meninaIcon, styles.iconLayout, meninaSelected && styles.meninaSelected]}
        contentFit="cover"
        source={require("../assets/menina.png")}
      />
      <Image
        style={[styles.menino1Icon, styles.iconLayout, meninoSelected && styles.meninoSelected]}
        contentFit="cover"
        source={require("../assets/menino-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backwardButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    padding: 10,
  },
  selectedMenino: {
    backgroundColor: "lightblue", // Azul claro para Menino selecionado
    borderRadius: 10, // Adiciona borderRadius
  },
  selectedMenina: {
    backgroundColor: "red", // Vermelho para Menina selecionada
    borderRadius: 10, // Adiciona borderRadius
  },
  meninoTypo: {
    top: 490,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textAlign: "right",
    color: Color.colorGray,
    position: "absolute",
    padding: 5, // Adiciona preenchimento
  },
  meninaSelected: {
    backgroundColor: "pink", // Preenchimento rosa para Menina
    borderRadius: 50, // Adiciona borderRadius
  },
  meninoSelected: {
    backgroundColor: "blue", // Preenchimento azul para Menino
    borderRadius: 50, // Adiciona borderRadius
  },
  buttonText: {
    fontSize: FontSize.size_8xl_4, // Aumenta a fonte em 4x
    fontFamily: FontFamily.leagueSpartanMedium, // Altera a fonte
  },
  cadastroLayout: {
    height: 141,
    width: 147,
    top: 334,
    position: "absolute",
  },
  iconLayout: {
    height: 106,
    width: 106,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: 58,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_lgi,
    height: 13,
    top: 0,
    position: "absolute",
  },
  faleMaisSobre: {
    top: 198,
    left: 62,
    fontSize: FontSize.size_8xl_4,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanMedium,
    textAlign: "right",
    color: Color.colorGray,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorHotpink, // Cor hotpink
    left: 20,
    top: 0,
    height: 46,
    width: 239,
    position: "absolute",
  },
  prximo: {
    top: 5,
    left: 98,
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textAlign: "right",
    position: "absolute",
  },
  rectangleParent: {
    top: 564,
    left: 53,
    height: 46,
    width: 239,
    position: "absolute",
  },
  voc: {
    top: 275,
    left: 44,
    fontFamily: FontFamily.leagueSpartan,
    fontSize: FontSize.size_17xl,
    textAlign: "right",
    color: Color.colorGray,
    position: "absolute",
  },
  menino: {
    left: 235,
    overflow: "hidden",
  },
  menina: {
    left: 67,
  },
  background: {
    position: "absolute",
    top: 275,
    left: 0,
    width: "100%",
    height: 20,
    backgroundColor: "transparent",
    zIndex: -1, // Coloca por trás dos botões
  },
  cadastroDados2Child: {
    left: 209,
  },
  cadastroDados2Item: {
    left: 43,
  },
  meninaIcon: {
    top: 350,
    left: 63,
  },
  menino1Icon: {
    top: 350,
    left: 230,
  },
  cadastroDados2Inner: {
    height: "3%",
    width: "6.67%",
    top: "4.75%",
    right: "85%",
    bottom: "92.25%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 94,
    backgroundColor: Color.colorGray,
    width: 57,
    borderRadius: Border.br_lgi,
    height: 13,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    left: 147,
  },
  groupChild1: {
    left: 221,
  },
  rectangleGroup: {
    top: 89,
    left: 31,
    width: 279,
    height: 13,
    position: "absolute",
  },
  cadastroDados2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CadastroDados1;
