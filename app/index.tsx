// Import komponen utama dari React Native
import { ScrollView, Text } from "react-native";

// Komponen utama yang menampilkan daftar nama dengan berbagai font unik
export default function Index() {
  return (
    // ScrollView memungkinkan konten digulir secara vertikal jika melebihi tinggi layar
    <ScrollView contentContainerStyle={{ padding: 20 }}>

      {/* Bagian ini menampilkan 5 nama mahasiswa SEBELUM nomor stambuk 105841106122 */}
      {/* Masing-masing nama menggunakan font yang berbeda: kombinasi antara font statis dan font variable */}

      {/* 1 - Static Font: "CabinSketch" memiliki tampilan seperti tulisan tangan dengan goresan tebal */}
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue" }}>
        {"\n"}==105841105722== (Zaskia aulia ashar)
      </Text>

      {/* 2 - Static Font: "CormorantUnicase" elegan dan klasik, cocok untuk penekanan formal */}
      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105822== (MUH. ILHAM AKBAR)
      </Text>

      {/* 3 - Variable Font: "CroissantOne" dinamis dan playful, cocok untuk nuansa kreatif */}
      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105922== (ZELVIA)
      </Text>

      {/* 4 - Variable Font: "DancingScript" bergaya tulisan sambung, memberi kesan personal dan ekspresif */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        {"\n"}==105841106022== (andi difta rameyza)
      </Text>

      {/* 5 - Static Font: "Gabriela" klasik dan tegas, digunakan untuk menyorot nama utama (Arsifah) */}
      <Text style={{ fontFamily: "Gabriela", fontSize: 24, color: "red", fontWeight: "bold" }}>
        {"\n"}====105841106122==== Arsifah ainun aulia
      </Text>

      {/* Bagian ini menampilkan 5 nama mahasiswa SESUDAH nomor stambuk 105841106122 */}
      {/* Menjaga keseimbangan antara penggunaan font statis dan font variable */}

      {/* 6 - Variable Font: "IntelOneMono" merupakan font monospaced yang modern dan mudah dibaca */}
      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        {"\n"}===tegar surya prayoga=== (105841106222)
      </Text>

      {/* 7 - Static Font: "Niconne" lembut dan feminin, memberi kesan santai */}
      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        {"\n"}===andi angke riona megawan=== (105841106322)
      </Text>

      {/* 8 - Variable Font: "Caveat" tampak seperti tulisan tangan santai, cocok untuk suasana kasual */}
      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        {"\n"}===muh. fadli=== (105841106422)
      </Text>

      {/* 9 - Variable Font: "PlaywritePL" memberikan kesan dramatis dan ekspresif, cocok untuk nama panggung */}
      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
        {"\n"}===a.fahcri=== (105841106522) 
      </Text>

      {/* 10 - Static Font (ulang): "DancingScript" digunakan kembali agar ada variasi dan penguatan visual */}
      <Text style={{ fontFamily: "NotoSansSinhala ", fontSize: 24, color: "blue" }}>
        {"\n"}===m. agil gimnas== (105841106622)
      </Text>

    </ScrollView>
  );
}
