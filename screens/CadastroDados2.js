import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Importando Ionicons
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const CadastroDados2 = () => {
  const navigation = useNavigation();

  // Função para retornar à tela CadastroDados1
  const goBackToCadastroDados1 = useCallback(() => {
    navigation.navigate("CadastroDados1");
  }, [navigation]);



  return (
    <>
      <View style={styles.cadastroDados3}>
        <Text style={[styles.deixeOBeloContainer, styles.prximoFlexBox]}>
          <Text style={styles.deixeO}>{`Você confirma com o `}</Text>
          <Text style={styles.belo}>Belo</Text>
          <Text style={styles.deixeO}> o seu cadastro?</Text>
        </Text>
        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate("CadastroDados3")}
        >
          <View style={styles.nextButtonChild} />
          <Text style={[styles.prximo, styles.prximoFlexBox]}>Confirmar</Text>
        </Pressable>
        <Image
          style={styles.belo1Icon}
          source={require("../assets/belo-1.png")}
        />
        <Ionicons // Adicionando o ícone Ionicons
          name="arrow-back"
          size={24}
          color={Color.colorHotpink} // Definindo a cor como hotpink
          style={styles.arrowBackIcon}
          onPress={goBackToCadastroDados1} // Adicionando a função para retornar à tela CadastroDados1
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  prximoFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  groupLayout: {
    width: 58,
    borderRadius: Border.br_lgi,
    height: 13,
    top: 0,
    position: "absolute",
  },
  deixeO: {
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorGray,
    fontSize: FontSize.size_8xl_4 * 0.7, // Redução de 30%
  },
  belo: {
    fontWeight: "700",
    fontFamily: FontFamily.leagueSpartanBold,
    color: Color.colorHotpink,
    fontSize: FontSize.size_8xl_4 * 0.8, // Redução de 30%
  },
  deixeOBeloContainer: {
    top: 158,
    left: 31,
    fontSize: FontSize.size_8xl_4 * 0.9, // Redução de 30%
  },
  nextButtonChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorHotpink,
    left: 0,
    top: 0,
    height: 46,
    width: 209,
    position: "absolute",
  },
  prximo: {
    top: 10,
    left: 68,
    fontSize: FontSize.size_4xl * 0.7, // Redução de 30%
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    color: Color.colorWhite,
  },
  nextButton: {
    top: 635,
    left: 90,
    height: 46,
    width: 239,
    position: "absolute",
  },
  belo1Icon: {
    top: 216,
    left: 38,
    width: 304,
    height: 304,
    position: "absolute",
    overflow: "hidden",
  },
  arrowBackIcon: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  cadastroDados3Child: {
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
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    left: 0,
  },
  groupItem: {
    left: 74,
    width: 57,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_lgi,
    height: 13,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 147,
    backgroundColor: Color.colorGray,
  },
  rectangleView: {
    left: 221,
    backgroundColor: Color.colorGainsboro_100,
  },
  rectangleParent: {
    top: 89,
    left: 31,
    width: 279,
    height: 13,
    position: "absolute",
  },
  cadastroDados3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default CadastroDados2;
