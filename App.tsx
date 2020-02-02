import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Login  from './component/login';

export default class App extends React.Component {
 loginHandler = () => {
    console.log("User Hit Login Button");
  }

  render() {
    return (
    <View style={styles.container}>
      <Text>It Works</Text>
     <Login onLogin={this.loginHandler} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
