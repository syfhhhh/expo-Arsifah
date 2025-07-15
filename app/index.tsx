import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// ==============================
// DATA: Koleksi Gambar Utama & Alternatif (menggunakan URL lengkap agar gambar muncul)
// ==============================
const koleksiGambar = [
  {
    utama: "https://i.pinimg.com/736x/a2/aa/08/a2aa08bfcc56b815a91d22d15a2088e6.jpg",
    alternatif: "https://i.pinimg.com/1200x/07/ff/36/07ff36406497395f1b33f87ba79c2cd2.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/2c/ba/a3/2cbaa35c3010f921f621efdeb84d1c18.jpg",
    alternatif: "https://i.pinimg.com/736x/be/48/b9/be48b9c22c38f2c5a8cd01752f83c8b7.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/44/00/26/44002616db854d84281c31c3b96143a0.jpg",
    alternatif: "https://i.pinimg.com/1200x/12/7d/5d/127d5d8022f02b47e5bd891f8a42b2e5.jpg",
  },
  {
    utama: "https://i.pinimg.com/1200x/ec/1e/14/ec1e14708ceca0f00d79f97ff7630e75.jpg",
    alternatif: "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/0e/5d/f5/0e5df547f1f9ed800324c8201cbb43fb.jpg",
    alternatif: "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/de/a3/88/dea388ea8bb8e0ec8c5883958e832319.jpg",
    alternatif: "https://i.pinimg.com/736x/43/74/33/4374338d60afe1b107a370aba9ec065f.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/c9/c8/ed/c9c8edb5430322068650da09648aa4a6.jpg",
    alternatif: "https://i.pinimg.com/1200x/d2/52/a6/d252a613f3840fe30273ef19720eef55.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/20/15/b9/2015b997cf936a0445d2686fa251a7a1.jpg",
    alternatif: "https://i.pinimg.com/736x/a0/7c/37/a07c3723d6727ebe6a68e97d48bcb92e.jpg",
  },
  {
    utama: "https://i.pinimg.com/736x/d4/15/45/d41545148c1d986d5ccf14cafd7c5b18.jpg",
    alternatif: "https://i.pinimg.com/736x/f5/6c/f2/f56cf2d8074dad2bfc96103bf48789a5.jpg",
  },
];

// ==============================
// KOMPONEN GRID INTERAKTIF
// ==============================
export default function GaleriInteraktif() {
  const [status, setStatus] = useState(
    koleksiGambar.map(() => ({ skala: 1, ganti: false }))
  );

  // Ketika gambar ditekan: ubah gambar dan perbesar bertahap
  const ketikaDitekan = (index : number) => {
    setStatus((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const tingkatSkala = item.skala === 1 ? 1.2 : item.skala === 1.2 ? 2 : 1;
        return {
          skala: tingkatSkala,
          ganti: !item.ganti,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={gaya.kontainer}>
      <Text style={gaya.judul}>Galeri Gambar Dinamis</Text>
      <View style={gaya.grid}>
        {koleksiGambar.map((gambar, i) => (
          <Pressable key={i} onPress={() => ketikaDitekan(i)}>
            <Image
              source={{ uri: status[i].ganti ? gambar.alternatif : gambar.utama }}
              style={[
                gaya.gambar,
                { transform: [{ scale: status[i].skala }] },
              ]}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

// ==============================
// GAYA / STYLE
// ==============================
const ukuran = Dimensions.get('window').width / 3 - 20;

const gaya = StyleSheet.create({
  kontainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f9ff',
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gambar: {
    width: ukuran,
    height: ukuran,
    margin: 5,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#b0bec5',
  },
});
