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

// -----------------------------
// Kumpulan Gambar Utama & Alternatif
// -----------------------------
const sumberGambar = [
  ["https://i.pinimg.com/736x/a2/aa/08/a2aa08bfcc56b815a91d22d15a2088e6.jpg", "https://i.pinimg.com/1200x/07/ff/36/07ff36406497395f1b33f87ba79c2cd2.jpg"],
  ["https://i.pinimg.com/736x/2c/ba/a3/2cbaa35c3010f921f621efdeb84d1c18.jpg", "https://i.pinimg.com/736x/be/48/b9/be48b9c22c38f2c5a8cd01752f83c8b7.jpg"],
  ["https://i.pinimg.com/736x/44/00/26/44002616db854d84281c31c3b96143a0.jpg", "https://i.pinimg.com/1200x/12/7d/5d/127d5d8022f02b47e5bd891f8a42b2e5.jpg"],
  ["https://i.pinimg.com/1200x/ec/1e/14/ec1e14708ceca0f00d79f97ff7630e75.jpg", "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg"],
  ["https://i.pinimg.com/736x/0e/5d/f5/0e5df547f1f9ed800324c8201cbb43fb.jpg", "https://i.pinimg.com/736x/f7/8e/46/f78e46a2cb335ece4130774cc2913324.jpg"],
  ["https://i.pinimg.com/736x/de/a3/88/dea388ea8bb8e0ec8c5883958e832319.jpg", "https://i.pinimg.com/736x/43/74/33/4374338d60afe1b107a370aba9ec065f.jpg"],
  ["https://i.pinimg.com/736x/c9/c8/ed/c9c8edb5430322068650da09648aa4a6.jpg", "https://i.pinimg.com/1200x/d2/52/a6/d252a613f3840fe30273ef19720eef55.jpg"],
  ["https://i.pinimg.com/736x/20/15/b9/2015b997cf936a0445d2686fa251a7a1.jpg", "https://i.pinimg.com/736x/a0/7c/37/a07c3723d6727ebe6a68e97d48bcb92e.jpg"],
  ["https://i.pinimg.com/736x/d4/15/45/d41545148c1d986d5ccf14cafd7c5b18.jpg", "https://i.pinimg.com/736x/f5/6c/f2/f56cf2d8074dad2bfc96103bf48789a5.jpg"],
];

// -----------------------------
// Style Global
// -----------------------------
const ukuranSel = Dimensions.get('window').width / 3 - 20;

const desain = StyleSheet.create({
  kontainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f7fa',
  },
  judul: {
    fontSize: 23,
    fontWeight: '700',
    color: '#234e52',
    marginBottom: 18,
  },
  gridArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  selGambar: {
    width: ukuranSel,
    height: ukuranSel,
    margin: 5,
    borderRadius: 14,
    backgroundColor: '#cfd8dc',
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#78909c',
  },
});

// -----------------------------
// Komponen Utama Galeri
// -----------------------------
export default function GaleriDinamis() {
  const [tampilan, setTampilan] = useState(
    sumberGambar.map(() => ({ ukuran: 1, alternatif: false }))
  );

  const ketikaTekan = (i: number) => {
    setTampilan((lama) =>
      lama.map((item, index) => {
        if (index !== i) return item;
        const next = item.ukuran === 1 ? 1.2 : item.ukuran === 1.2 ? 2 : 1;
        return {
          ukuran: next,
          alternatif: !item.alternatif,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={desain.kontainer}>
      <Text style={desain.judul}>Galeri React Native</Text>
      <View style={desain.gridArea}>
        {sumberGambar.map(([utama, alternatif], i) => (
          <Pressable key={i} onPress={() => ketikaTekan(i)}>
            <Image
              source={{ uri: tampilan[i].alternatif ? alternatif : utama }}
              style={[
                desain.selGambar,
                { transform: [{ scale: tampilan[i].ukuran }] },
              ]}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
