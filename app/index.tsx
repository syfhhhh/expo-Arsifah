import React, { useState } from 'react';
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
