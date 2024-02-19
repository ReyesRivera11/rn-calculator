import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MyButton from './components/MyButton';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles/styles';
import Display from './components/Display';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState("");

  const showValues = (newVal) => {
    const val = value + newVal;
    setValue(val);
  };

  const deleteValues = () => {
    setValue("");
  };

  const deleteByOne = () => {
    const val = value.slice(0, -1);
    setValue(val);
  };

  const showResult = () => {
    const val = eval(value);
    if (isNaN(val) || val === Infinity) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(val.toString());
    }
  };

  const porcentage = () => {
    const val = (parseFloat(value)) / 100;
    if (isNaN(val)) {
      setValue("Error");
      setTimeout(() => {
        setValue("");
      }, 2000);
    } else {
      setValue(val.toString());
    }
  };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Display value={value} />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <MyButton
            value={"AC"}
            colorText={"white"}
            color={"#747477"} size={70} fn={() => deleteValues()} />
          <MyButton
            value={"<-"}
            fn={() => deleteByOne()}
            colorText={"white"}
            color={"#747477"} size={70}
            icon={<FontAwesome6 name="delete-left" size={24} color="white" />} />
          <MyButton
            value={"%"}
            colorText={"white"}
            color={"#747477"} size={70} fn={() => porcentage()} />
          <MyButton
            value={"/"}
            fn={() => showValues("/")}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <MyButton value={"7"} color={"white"} size={70} fn={() => showValues("7")} />
          <MyButton value={"8"} color={"white"} size={70} fn={() => showValues("8")} />
          <MyButton value={"9"} color={"white"} size={70} fn={() => showValues("9")} />
          <MyButton
            value={"x"}
            fn={() => showValues("*")}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <MyButton value={"4"} color={"white"} size={70} fn={() => showValues("4")} />
          <MyButton value={"5"} color={"white"} size={70} fn={() => showValues("5")} />
          <MyButton value={"6"} color={"white"} size={70} fn={() => showValues("6")} />
          <MyButton
            value={"-"}
            fn={() => showValues("-")}
            colorText={"white"}
            color={"#4B5EFC"} size={70} />
        </View>

        <View style={styles.buttons}>
          <MyButton value={"1"} color={"white"} size={70} fn={() => showValues("1")} />
          <MyButton value={"2"} color={"white"} size={70} fn={() => showValues("2")} />
          <MyButton value={"3"} color={"white"} size={70} fn={() => showValues("3")} />
          <MyButton
            value={"+"}
            colorText={"white"}
            color={"#4B5EFC"} size={70} fn={() => showValues("+")} />
        </View>

        <View style={styles.buttons}>
          <MyButton value={"0"} color={"white"} size={140} fn={() => showValues("0")} />
          <MyButton value={"."} color={"white"} size={70} fn={() => showValues(".")} />
          <MyButton
            value={"="}
            colorText={"white"}
            color={"#4B5EFC"} size={70} fn={() => showResult()} />
        </View>

      </View>

    </View>
  );
}

