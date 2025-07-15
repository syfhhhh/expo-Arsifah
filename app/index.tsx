import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UKURAN = 100;
const JARAK = 5;


const daftarGambarUtama = [
  "https://i.pinimg.com/736x/a2/aa/08/a2aa08bfcc56b815a91d22d15a2088e6.jpg",
  "https://i.pinimg.com/736x/2c/ba/a3/2cbaa35c3010f921f621efdeb84d1c18.jpg",
  "https://i.pinimg.com/736x/44/00/26/44002616db854d84281c31c3b96143a0.jpg",
  "https://i.pinimg.com/1200x/ec/1e/14/ec1e14708ceca0f00d79f97ff7630e75.jpg",
  "https://i.pinimg.com/736x/0e/5d/f5/0e5df547f1f9ed800324c8201cbb43fb.jpg",
  "https://i.pinimg.com/736x/de/a3/88/dea388ea8bb8e0ec8c5883958e832319.jpg",
  "https://i.pinimg.com/736x/c9/c8/ed/c9c8edb5430322068650da09648aa4a6.jpg",
  "https://i.pinimg.com/736x/20/15/b9/2015b997cf936a0445d2686fa251a7a1.jpg",
  "https://i.pinimg.com/736x/d4/15/45/d41545148c1d986d5ccf14cafd7c5b18.jpg",
];

const daftarGambarGanti = [
  "https://i.pinimg.com/1200x/07/ff/36/07ff36406497395f1b33f87ba79c2cd2.jpg",
  "https://i.pinimg.com/736x/be/48/b9/be48b9c22c38f2c5a8cd01752f83c8b7.jpg",
  "https://i.pinimg.com/1200x/12/7d/5d/127d5d8022f02b47e5bd891f8a42b2e5.jpg",
  "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg",
  "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg",
  "https://i.pinimg.com/736x/43/74/33/4374338d60afe1b107a370aba9ec065f.jpg",
  "https://i.pinimg.com/1200x/d2/52/a6/d252a613f3840fe30273ef19720eef55.jpg",
  "https://i.pinimg.com/736x/a0/7c/37/a07c3723d6727ebe6a68e97d48bcb92e.jpg",
  "https://i.pinimg.com/736x/f5/6c/f2/f56cf2d8074dad2bfc96103bf48789a5.jpg",
];

export default function HalamanBeranda() {
  const [dataGambar, setDataGambar] = useState(
    Array(9).fill(null).map(() => ({
      jumlahKlik: 0,
      tampilAlternatif: false,
    }))
  );

  const saatGambarDiklik = (posisi: number) => {
    setDataGambar((sebelumnya) =>
      sebelumnya.map((gbr, i) => {
        if (i === posisi) {
          const klikBaru = (gbr.jumlahKlik + 1) % 3;
          return {
            jumlahKlik: klikBaru,
            tampilAlternatif: !gbr.tampilAlternatif,
          };
        }
        return gbr;
      })
    );
  };

  const skalaGambar = (jumlah: number) => {
    if (jumlah === 1) return 1.2;
    if (jumlah === 2) return 2.0;
    return 1.0;
  };

  const gaya = StyleSheet.create({
    kotakGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: UKURAN * 3 + JARAK * 6,
    },
    gambar: {
      width: UKURAN,
      height: UKURAN,
      margin: JARAK,
      borderRadius: 10,
      backgroundColor: "#ccc",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f2f2f2",
      }}
    >

      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        GAMBAR TUGAS 2
      </Text>

      <View style={gaya.kotakGrid}>
        {daftarGambarUtama.map((urlGambar, urutan) => (
          <TouchableOpacity
            key={urutan}
            onPress={() => saatGambarDiklik(urutan)}
          >
            <Image
              source={{
                uri: dataGambar[urutan].tampilAlternatif
                  ? daftarGambarGanti[urutan]
                  : urlGambar,
              }}
              style={[
                gaya.gambar,
                { transform: [{ scale: skalaGambar(dataGambar[urutan].jumlahKlik) }] },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
