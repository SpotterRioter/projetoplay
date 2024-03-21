import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CadastroDados = () => {
  const navigation = useNavigation();

  // Definindo estados para o nome, dia, mês e ano
  const [nome, setNome] = React.useState('');
  const [dia, setDia] = React.useState('');
  const [mes, setMes] = React.useState('');
  const [ano, setAno] = React.useState('');

  const validarData = () => {
    const diaNumero = parseInt(dia);
    const mesNumero = parseInt(mes);
    const anoNumero = parseInt(ano);

    if (isNaN(diaNumero) || isNaN(mesNumero) || isNaN(anoNumero)) {
      Alert.alert('Aviso', 'Por favor, preencha a data corretamente.');
      return;
    }

    if (diaNumero < 1 || diaNumero > 31 || mesNumero < 1 || mesNumero > 12 || anoNumero < 1900 || anoNumero > 2100) {
      Alert.alert('Aviso', 'Por favor, insira uma data válida.');
      return;
    }


    navigation.navigate("CadastroDados1");
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={32}
        color={Color.colorHotpink}
        style={[styles.icon, { marginTop: "15%" }]}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={[styles.title, { marginTop: "50%" }]}>Fale mais sobre você</Text>
      <View style={[styles.inputContainer]}>
        <Text style={styles.inputLabel}>Qual é o seu nome?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Qual a data do seu aniversário?</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="Dia"
            keyboardType="numeric"
            value={dia}
            onChangeText={text => setDia(text)}
          />
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="Mês"
            keyboardType="numeric"
            value={mes}
            onChangeText={text => setMes(text)}
          />
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="Ano"
            keyboardType="numeric"
            value={ano}
            onChangeText={text => setAno(text)}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={validarData}
      >
        <Ionicons name="arrow-forward" size={24} color={Color.colorWhite} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  title: {
    fontSize: 25,
    fontWeight:"bold",
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 20,
    textAlign:"center"
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_lgi,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartan,
    color: Color.colorGray,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: "row",
  },
  dateInput: {
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: Color.colorHotpink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Border.br_sm,
    alignItems: "center",
  },
});

export default CadastroDados;
