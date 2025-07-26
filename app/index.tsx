// Import komponen utama dari React Native
import { ScrollView, Text } from "react-native";

// Komponen utama yang menampilkan daftar nama dengan berbagai font
export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      
      {/* Font: CabinSketch – Gaya coretan tangan, cocok untuk kesan playful */}
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue" }}>
        {"\n"}==105841105722== (Zaskia aulia ashar)
      </Text>

      {/* Font: CormorantUnicase – Elegan dan klasik */}
      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105822== ( MUH. ILHAM AKBAR)
      </Text>

      {/* Font: CroissantOne – Stylish dan kekinian */}
      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        {"\n"}==105841105922== (ZELVIA)
      </Text>

      {/* Font: DancingScript – Terlihat feminim dan luwes */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        {"\n"}==105841106022== (andi difta rameyza)
      </Text>

      {/* Font: Gabriela – Berani dan tegas */}
      <Text style={{ fontFamily: "Gabriela", fontSize: 24, color: "red", fontWeight: "bold" }}>
        {"\n"}====105841106122==== Arsifah ainun aulia
      </Text>

      {/* Font: IntelOneMono – Gaya monospaced untuk tampilan teknikal */}
      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        {"\n"}===tegar surya prayoga=== (105841106222)
      </Text>

      {/* Font: Niconne – Unik dan ringan */}
      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        {"\n"}===andi angke riona megawan=== (105841106322)
      </Text>

      {/* Font: DancingScript – Digunakan lagi untuk konsistensi gaya lembut */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        {"\n"}===muh. fadli=== (105841106422)
      </Text>

      {/* Font: Caveat – Tulisan miring kasual seperti tulisan tangan */}
      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        {"\n"}===a.fahcri=== (105841106522) 
      </Text>

      {/* Font: PlaywritePL – Serif kuat yang cocok untuk nama akhir */}
      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
  
        {"\n"}===m. agil gimnas== (105841106622)
      </Text>

    </ScrollView>
  );
}
