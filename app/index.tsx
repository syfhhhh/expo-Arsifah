// Import komponen utama dari React Native
import { ScrollView, Text } from "react-native";

// Komponen utama yang menampilkan daftar nama dengan berbagai font
export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      
      {/* Font: CabinSketch – Gaya coretan tangan, cocok untuk kesan playful */}
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue" }}>
        Zaskia aulia ashar
        {"\n"}105841105722
      </Text>

      {/* Font: CormorantUnicase – Elegan dan klasik */}
      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue" }}>
        MUH. ILHAM AKBAR
        {"\n"}105841105822
      </Text>

      {/* Font: CroissantOne – Stylish dan kekinian */}
      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        ZELVIA
        {"\n"}105841105922
      </Text>

      {/* Font: DancingScript – Terlihat feminim dan luwes */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        andi difta rameyza
        {"\n"}105841106022
      </Text>

      {/* Font: Gabriela – Berani dan tegas */}
      <Text style={{ fontFamily: "Gabriela", fontSize: 24, color: "red", fontWeight: "bold" }}>
        Arsifah ainun aulia
        {"\n"}105841106122
      </Text>

      {/* Font: IntelOneMono – Gaya monospaced untuk tampilan teknikal */}
      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        105841106222
        {"\n"}tegar surya prayoga
      </Text>

      {/* Font: Niconne – Unik dan ringan */}
      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        105841106322
        {"\n"}andi angke riona megawan
      </Text>

      {/* Font: DancingScript – Digunakan lagi untuk konsistensi gaya lembut */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        105841106422
        {"\n"}muh. fadli
      </Text>

      {/* Font: Caveat – Tulisan miring kasual seperti tulisan tangan */}
      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        105841106522
        {"\n"}a.fahcri
      </Text>

      {/* Font: PlaywritePL – Serif kuat yang cocok untuk nama akhir */}
      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
        105841106622
        {"\n"}m. agil gimnas
      </Text>

    </ScrollView>
  );
}
