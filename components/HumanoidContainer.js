import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HumanoidContainer = ({ propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={[styles.groupChild, styles.groupLayout]} />
      <Text style={[styles.nHumano, styles.humanoTypo1]}>Nó Humano</Text>
      <View style={[styles.groupItem, styles.groupLayout]} />
      <Text style={[styles.nHumano1, styles.humanoTypo1]}>Nó Humano</Text>
      <View style={[styles.groupInner, styles.groupLayout]} />
      <Text style={[styles.nHumano2, styles.humanoTypo1]}>Nó Humano</Text>
      <View style={[styles.rectangleView, styles.groupChildLayout]} />
      <Text style={[styles.nHumano3, styles.humanoTypo]}>Nó Humano</Text>
      <View style={[styles.groupChild1, styles.groupChildLayout]} />
      <Text style={[styles.nHumano4, styles.humanoTypo]}>Nó Humano</Text>
      <View style={[styles.groupChild2, styles.groupChildLayout]} />
      <Text style={[styles.nHumano5, styles.humanoTypo]}>Nó Humano</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 86,
    width: 93,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_6xs,
    top: 0,
    position: "absolute",
  },
  humanoTypo1: {
    width: 73,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini_4,
    top: 96,
    position: "absolute",
  },
  groupChildLayout: {
    top: 118,
    height: 86,
    width: 93,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  humanoTypo: {
    top: 214,
    width: 73,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini_4,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  nHumano: {
    left: 10,
  },
  groupItem: {
    left: 111,
  },
  nHumano1: {
    left: 120,
  },
  groupInner: {
    left: 221,
  },
  nHumano2: {
    left: 231,
  },
  rectangleView: {
    left: 0,
  },
  nHumano3: {
    left: 10,
  },
  groupChild1: {
    left: 111,
  },
  nHumano4: {
    left: 120,
  },
  groupChild2: {
    left: 221,
  },
  nHumano5: {
    left: 231,
  },
  rectangleParent: {
    top: 989,
    left: 25,
    width: 314,
    height: 227,
    position: "absolute",
  },
});

export default HumanoidContainer;
