import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Buttons from './components/Buttons';
import { FontAwesome6 } from '@expo/vector-icons';
export default function App() {
  const [value, setValue] = useState("");
  const show = (num) => {
    const newVal = value + num;
    setValue(newVal)
  };
  const deleteAll = () => {
    setValue("");
  };
  const deleteByOne = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  };
  const result = () => {
    const newValue = eval(value);
    setValue(newValue.toString());
  };
  const porcentage = () => {
    newValue = (parseFloat(value)) / 100;
    setValue(newValue.toString());
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* screen Container  */}
      <View style={styles.textContainer}>
        <TextInput value={value} placeholder='0' style={{ fontSize: 50 }} />
      </View>
      {/* numbers container */}
      <View style={styles.buttonsContainer}>

        <View style={styles.buttons}>
          <Buttons value={"CA"} colorText={"white"} color={"#747477"} size={70} funcion={() => deleteAll()} />
          <Buttons value={"<-"} colorText={"white"} color={"#747477"} size={70} icon={<FontAwesome6 name="delete-left" size={24} color="white" />} funcion={() => deleteByOne()} />
          <Buttons
            value={"%"}
            colorText={"white"}
            color={"#747477"} size={70} funcion={() => porcentage()} />
          <Buttons
            value={"/"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} funcion={() => show("/")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"7"} color={"white"} size={70} funcion={() => show("7")} />
          <Buttons value={"8"} color={"white"} size={70} funcion={() => show("8")} />
          <Buttons value={"9"} color={"white"} size={70} funcion={() => show("9")} />
          <Buttons
            value={"x"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} funcion={() => show("*")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"4"} color={"white"} size={70} funcion={() => show("4")} />
          <Buttons value={"5"} color={"white"} size={70} funcion={() => show("5")} />
          <Buttons value={"6"} color={"white"} size={70} funcion={() => show("6")} />
          <Buttons
            value={"-"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} funcion={() => show("-")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"1"} color={"white"} size={70} funcion={() => show("1")} />
          <Buttons value={"2"} color={"white"} size={70} funcion={() => show("2")} />
          <Buttons value={"3"} color={"white"} size={70} funcion={() => show("3")} />
          <Buttons
            value={"+"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} funcion={() => show("+")} />
        </View>

        <View style={styles.buttons}>
          <Buttons value={"0"} color={"white"} size={140} funcion={() => show("0")} />
          <Buttons value={"."} color={"white"} size={70} funcion={() => show(".")} />
          <Buttons
            value={"="}
            colorText={"white"}
            color={"#4B5EFC"} size={70} funcion={() => result()} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    padding: 10,
    paddingRight: 20,
    paddingTop: 120,
    color: "black",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  text: {
    fontSize: 30
  },
  buttonsContainer: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    justifyContent: "center"
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10
  },
});
