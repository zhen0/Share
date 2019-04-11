// import React from "react";
// import { connect } from "react-redux";
// import { sendUser } from "../../Client/reducers/user";
// import { Text, View, TextInput, Button } from "react-native";
// import styles from "../style";

// export default class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       address: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     // this.props.sendUser(this.state);

//     this.setState({
//       username: "",
//       password: ""
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.box}>
//           <Text>Sign Up</Text>
//         </View>

//         <View style={{ padding: 10 }}>
//           <TextInput
//             style={{ height: 40 }}
//             placeholder="name"
//             onChangeText={text => this.setState({ text })}
//           />
//           <View style={{ padding: 10 }}>
//             <TextInput
//               style={{ height: 40 }}
//               placeholder="address"
//               onChangeText={text => this.setState({ text })}
//             />
//           </View>
//         </View>

//         <Button
//           onPress={() => {
//             this.handleSubmit(this.state);
//           }}
//           title="Add Me"
//         />
//       </View>
//     );
//   }
// }

// // const mapDispatch = { sendUser };

// // const SignUp = connect(
// //   null,
// //   mapDispatch
// // )(SignUp);
