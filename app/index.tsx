import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Ukuran dan margin untuk setiap gambar
const ukuranGambar = 100;
const jarakGambar = 5;

// Daftar gambar utama dan alternatif
const gambarUtama = [
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

const gambarAlternatif = [
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

export default function Beranda() {
  const [statusGambar, setStatusGambar] = useState(
    Array.from({ length: 9 }, () => ({
      pakaiAlternatif: false,
      skala: 1,
      jumlahKlik: 0,
    }))
  );

  const saatGambarDitekan = (index: number) => {
    setStatusGambar((sebelumnya) =>
      sebelumnya.map((item, i) => {
        if (i === index) {
          const totalKlik = (item.jumlahKlik + 1) % 3;
          const skalaBaru = totalKlik === 1 ? 1.2 : totalKlik === 2 ? 1.4 : 1;
          return {
            pakaiAlternatif: !item.pakaiAlternatif,
            skala: skalaBaru,
            jumlahKlik: totalKlik,
          };
        }
        return item;
      })
    );
  };

  const gaya = StyleSheet.create({
    kontainerGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: ukuranGambar * 3 + jarakGambar * 6,
    },
    gayaGambar: {
      width: ukuranGambar,
      height: ukuranGambar,
      margin: jarakGambar,
      borderRadius: 8,
      backgroundColor: "#ccc",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 20,
      }}
    >
      {/* Segitiga Merah */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "red",
          marginBottom: 20,
        }}
      />

      {/* Tabung Biru */}
      <View
        style={{
          width: 120,
          height: 50,
          backgroundColor: "blue",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          105841106122
        </Text>
      </View>

      {/* Nama Oranye */}
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          ARSIFAH AINUN AULIA
        </Text>
      </View>

      {/* Foto Profil */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Image
          source={{
            uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106122_.jpg?1751871436",
          }}
          style={{
            width: 120,
            height: 160,
            borderRadius: 10,
            marginRight: 10,
          }}
        />
        <Image
          source={{
            uri: "https://ngdblog.africa/wp-content/uploads/2023/01/Wow-gif.gif",
          }}
          style={{ width: 120, height: 160, borderRadius: 10 }}
        />
      </View>

      {/* Judul Grid */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        GAMBAR TUGAS 2
      </Text>

      {/* Grid Gambar */}
      <View style={gaya.kontainerGrid}>
        {gambarUtama.map((linkGambar, idx) => (
          <TouchableOpacity key={idx} onPress={() => saatGambarDitekan(idx)}>
            <Image
              source={{
                uri: statusGambar[idx].pakaiAlternatif
                  ? gambarAlternatif[idx]
                  : linkGambar,
              }}
              style={[
                gaya.gayaGambar,
                {
                  transform: [{ scale: statusGambar[idx].skala }],
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
