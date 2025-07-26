// Import komponen utama dari React Native
import { ScrollView, Text } from "react-native";

// Komponen utama yang menampilkan daftar nama mahasiswa dengan berbagai jenis font
export default function Index() {
  return (
    // ScrollView digunakan agar daftar bisa digulir jika kontennya melebihi layar
    <ScrollView contentContainerStyle={{ padding: 20 }}>

      {/* ============================== */}
      {/* BAGIAN SEBELUM STAMBUK UTAMA */}
      {/* ============================== */}

      {/* 1 - Static Font: "CabinSketch" bergaya tulisan tangan artistik */}
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue" }}>
        {"\n"}==105841105722== (Zaskia aulia ashar)
      </Text>

      {/* 2 - Static Font: "CormorantUnicase" klasik dan elegan */}
      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105822== (MUH. ILHAM AKBAR)
      </Text>

      {/* 3 - Variable Font: "CroissantOne" lembut dan playful */}
      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105922== (ZELVIA)
      </Text>

      {/* 4 - Variable Font: "DancingScript" menyerupai tulisan sambung */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        {"\n"}==105841106022== (andi difta rameyza)
      </Text>

      {/* 5 - Static Font: "Gabriela" tampil tegas dan berani, digunakan untuk highlight nama utama */}
      <Text style={{ fontFamily: "Gabriela", fontSize: 24, color: "red", fontWeight: "bold" }}>
        {"\n"}====105841106122==== Arsifah ainun aulia
      </Text>

      {/* ============================== */}
      {/* BAGIAN SETELAH STAMBUK UTAMA */}
      {/* ============================== */}

      {/* 6 - Variable Font: "IntelOneMono" jenis font monospace, cocok untuk tampilan data */}
      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        {"\n"}===tegar surya prayoga=== (105841106222)
      </Text>

      {/* 7 - Static Font: "Niconne" font halus dan feminin */}
      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        {"\n"}===andi angke riona megawan=== (105841106322)
      </Text>

      {/* 8 - Variable Font: "Caveat" bergaya tulisan tangan santai dan ekspresif */}
      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        {"\n"}===muh. fadli=== (105841106422)
      </Text>

      {/* 9 - Variable Font: "PlaywritePL" tampil artistik dan dramatis */}
      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
        {"\n"}===a.fahcri=== (105841106522) 
      </Text>

      {/* 10 - Static Font (pengulangan konsep): Gaya lain dari "DancingScript" */}
      <Text style={{ fontFamily: "NotoSansSinhala", fontSize: 24, color: "blue" }}>
        {"\n"}===m. agil gimnas== (105841106622)
      </Text>

    </ScrollView>
  );
}
