// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { 
//   Ionicons, FontAwesome, MaterialIcons, Feather, Entypo, AntDesign, EvilIcons, Foundation, 
//   MaterialCommunityIcons, Octicons 
// } from '@expo/vector-icons';


// const IconScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Ionicons name="home" size={50} color="blue" />
//       <FontAwesome name="user" size={50} color="green" />
//       <MaterialIcons name="favorite" size={50} color="red" />
//       <Feather name="camera" size={50} color="purple" />
//       <Entypo name="chat" size={50} color="orange" />
//       <AntDesign name="heart" size={50} color="pink" />
//       <EvilIcons name="bell" size={60} color="black" />
//       <Foundation name="star" size={50} color="gold" />
//       <MaterialCommunityIcons name="email" size={50} color="teal" />
//       <Octicons name="gear" size={50} color="gray" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
// });

// export default IconScreen;
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { 
  Ionicons, FontAwesome, MaterialIcons, Feather, Entypo, AntDesign, EvilIcons,
  Foundation, MaterialCommunityIcons, Octicons 
} from '@expo/vector-icons';

const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="home" size={50} color="lightblue" style={styles.icon} />
      <FontAwesome name="user" size={50} color="pink" style={styles.icon} />
      <MaterialIcons name="favorite" size={50} color="lightblue" style={styles.icon} />
      <Feather name="camera" size={50} color="pink" style={styles.icon} />
      <Entypo name="chat" size={50} color="lightblue" style={styles.icon} />
      <AntDesign name="heart" size={50} color="pink" style={styles.icon} />
      <EvilIcons name="bell" size={60} color="lightblue" style={styles.icon} />
      <Foundation name="star" size={50} color="pink" style={styles.icon} />
      <MaterialCommunityIcons name="email" size={50} color="lightblue" style={styles.icon} />
      <Octicons name="gear" size={50} color="pink" style={styles.icon} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,               // pastikan kontainer bisa penuh tinggi
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',  // memusatkan horizontal
    alignItems: 'center',      // memusatkan vertikal (untuk baris)
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    margin: 15,
  },
});

export default IconScreen;
