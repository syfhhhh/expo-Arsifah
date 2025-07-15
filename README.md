import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Segitiga Merah */}
      <View style={styles.segitiga} />

      {/* Persegi Panjang dengan Nama */}
      <View style={styles.persegi}>
        <Text style={styles.teks}>ARSIFAH AINUN AULIA</Text>
      </View>

      {/* Bentuk Kapsul dengan NIM */}
      <View style={styles.kapsul}>
        <Text style={styles.teks}>105841106122</Text>
      </View>

      {/* Foto Profil dan GIF */}
      <View style={styles.fotoRow}>
        <Image
          source={{
            uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106122_.jpg?1751871436",
          }}
          style={styles.gambar}
        />
        <Image
          source={{
            uri: "https://ngdblog.africa/wp-content/uploads/2023/01/Wow-gif.gif",
          }}
          style={styles.gambar}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  segitiga: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    marginBottom: 30,
  },
  persegi: {
    width: 250,
    height: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },
  kapsul: {
    backgroundColor: 'blue',
    paddingHorizontal: 40,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  teks: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fotoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  gambar: {
    width: 120,
    height: 160,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
