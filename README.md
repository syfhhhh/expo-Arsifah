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

// import React, { useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// // -----------------------------
// // Kumpulan Gambar Utama & Alternatif
// // -----------------------------
// const sumberGambar = [
//   ["https://i.pinimg.com/736x/a2/aa/08/a2aa08bfcc56b815a91d22d15a2088e6.jpg", "https://i.pinimg.com/1200x/07/ff/36/07ff36406497395f1b33f87ba79c2cd2.jpg"],
//   ["https://i.pinimg.com/736x/2c/ba/a3/2cbaa35c3010f921f621efdeb84d1c18.jpg", "https://i.pinimg.com/736x/be/48/b9/be48b9c22c38f2c5a8cd01752f83c8b7.jpg"],
//   ["https://i.pinimg.com/736x/44/00/26/44002616db854d84281c31c3b96143a0.jpg", "https://i.pinimg.com/1200x/12/7d/5d/127d5d8022f02b47e5bd891f8a42b2e5.jpg"],
//   ["https://i.pinimg.com/1200x/ec/1e/14/ec1e14708ceca0f00d79f97ff7630e75.jpg", "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg"],
//   ["https://i.pinimg.com/736x/0e/5d/f5/0e5df547f1f9ed800324c8201cbb43fb.jpg", "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg"],
//   ["https://i.pinimg.com/736x/de/a3/88/dea388ea8bb8e0ec8c5883958e832319.jpg", "https://i.pinimg.com/736x/43/74/33/4374338d60afe1b107a370aba9ec065f.jpg"],
//   ["https://i.pinimg.com/736x/c9/c8/ed/c9c8edb5430322068650da09648aa4a6.jpg", "https://i.pinimg.com/1200x/d2/52/a6/d252a613f3840fe30273ef19720eef55.jpg"],
//   ["https://i.pinimg.com/736x/20/15/b9/2015b997cf936a0445d2686fa251a7a1.jpg", "https://i.pinimg.com/736x/a0/7c/37/a07c3723d6727ebe6a68e97d48bcb92e.jpg"],
//   ["https://i.pinimg.com/736x/d4/15/45/d41545148c1d986d5ccf14cafd7c5b18.jpg", "https://i.pinimg.com/736x/f5/6c/f2/f56cf2d8074dad2bfc96103bf48789a5.jpg"],
// ];

// // -----------------------------
// // Style Global
// // -----------------------------
// const ukuranSel = Dimensions.get('window').width / 3 - 20;

// const desain = StyleSheet.create({
//   kontainer: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f0f7fa',
//   },
//   judul: {
//     fontSize: 23,
//     fontWeight: '700',
//     color: '#234e52',
//     marginBottom: 18,
//   },
//   gridArea: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   selGambar: {
//     width: ukuranSel,
//     height: ukuranSel,
//     margin: 5,
//     borderRadius: 14,
//     backgroundColor: '#cfd8dc',
//     resizeMode: 'cover',
//     borderWidth: 1,
//     borderColor: '#78909c',
//   },
// });

// // -----------------------------
// // Komponen Utama Galeri
// // -----------------------------
// export default function GaleriDinamis() {
//   const [tampilan, setTampilan] = useState(
//     sumberGambar.map(() => ({ ukuran: 1, alternatif: false }))
//   );

//   const ketikaTekan = (i: number) => {
//     setTampilan((lama) =>
//       lama.map((item, index) => {
//         if (index !== i) return item;
//         const next = item.ukuran === 1 ? 1.2 : item.ukuran === 1.2 ? 2 : 1;
//         return {
//           ukuran: next,
//           alternatif: !item.alternatif,
//         };
//       })
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={desain.kontainer}>
//       <Text style={desain.judul}>Galeri React Native</Text>
//       <View style={desain.gridArea}>
//         {sumberGambar.map(([utama, alternatif], i) => (
//           <Pressable key={i} onPress={() => ketikaTekan(i)}>
//             <Image
//               source={{ uri: tampilan[i].alternatif ? alternatif : utama }}
//               style={[
//                 desain.selGambar,
//                 { transform: [{ scale: tampilan[i].ukuran }] },
//               ]}
//             />
//           </Pressable>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }


<!-- tugas 2 -->
<!-- import React, { useState } from 'react';
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

// ===============================
// KONFIGURASI UMUM (MUDAH DIUBAH)
// ===============================
const JUMLAH_BARIS = 3; // untuk menentukan jumlah gambar 3x3
const GAMBARS_PER_BARIS = 3;
const RADIUS_GAMBAR = 14;
const WARNA_LATAR = '#f0f4f8';
const WARNA_BORDER_DEFAULT = '#aaa';
const WARNA_BORDER_ALTERNATIF = '#4FC3F7';
const WARNA_BAYANGAN = '#000';
const MAKS_SKALA = 2;
const KALI_SKALA = 1.2;
const MARGIN_GAMBAR = 6;

const nimAwal = '10584110';
const nimAkhir = '22';
const urlUtama = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
const parameterGambar = '_.jpg?1751871539';
const gambarAlternatif =
  'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

// ===============================
// HITUNG UKURAN GAMBAR
// ===============================
const ukuran = Dimensions.get('window').width / GAMBARS_PER_BARIS - (MARGIN_GAMBAR * 2);

// ===============================
// DATA GAMBAR
// ===============================
const buatDaftarGambar = () => {
  const daftar = [];
  for (let i = 60; i < 60 + JUMLAH_BARIS * GAMBARS_PER_BARIS; i++) {
    const nim = `${nimAwal}${i}${nimAkhir}`;
    daftar.push({
      main: `${urlUtama}${nim}${parameterGambar}`,
      alt: gambarAlternatif,
    });
  }
  return daftar;
};

// ===============================
// KOMPONEN UTAMA
// ===============================
export default function GridGambar() {
  const dataGambar = buatDaftarGambar();

  const [statusGambar, setStatusGambar] = useState(
    dataGambar.map(() => ({ scale: 1, isAlt: false }))
  );

  const handleGambarTekan = (index: number) => {
    setStatusGambar((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const skalaBaru = item.scale < MAKS_SKALA ? item.scale * KALI_SKALA : MAKS_SKALA;
        return {
          scale: skalaBaru,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={gaya.grid}>
      {dataGambar.map((gambar, index) => (
        <Pressable key={index} onPress={() => handleGambarTekan(index)}>
          <Image
            source={{ uri: statusGambar[index].isAlt ? gambar.alt : gambar.main }}
            style={[
              gaya.image,
              {
                transform: [{ scale: statusGambar[index].scale }],
                borderColor: statusGambar[index].isAlt ? WARNA_BORDER_ALTERNATIF : WARNA_BORDER_DEFAULT,
                shadowColor: WARNA_BAYANGAN,
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

// ===============================
// GAYA
// ===============================
const gaya = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: WARNA_LATAR,
  },
  image: {
    width: ukuran,
    height: ukuran,
    margin: MARGIN_GAMBAR,
    borderRadius: RADIUS_GAMBAR,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 2,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
});
 -->
 <!-- layout -->
 import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as splashScreen from "expo-splash-screen";
import { useEffect } from "react";


splashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const[loaded, error] = useFonts({
    "manufacturingConsent_regular": 
    require("../assets/fonts/ManufacturingConsent-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded && error == null) {
      splashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; 
  }



  return <Stack />;
}
