// Import komponen yang dibutuhkan dari React Native
import { ScrollView, Text, View } from "react-native";

// Fungsi utama komponen Index
export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      
      {/* Font: CabinSketch */}
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue",}}>
        Zaskia aulia ashar
        {"\n"}105841105722
      </Text>

      {/* Font: CormorantUnicase */}
      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue"}}>
        MUH. ILHAM AKBAR
        {"\n"}105841105822
      </Text>

      {/* Font: CroissantOne */}
      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        ZELVIA
        {"\n"}105841105922
      </Text>

      {/* Font: DancingScript */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24,color: "blue" }}>
        andi difta rameyza
        {"\n"}105841106022
      </Text>

      {/* Font: Gabriela */}
      <Text style={{ fontFamily: "Gabriela", fontSize: 24,color: "red", fontWeight: "bold" }}>
        Arsifah ainun aulia
        {"\n"}105841106122
      </Text>

      {/* Font alternatif karena ManufacturingConsent tidak tersedia */}
      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        105841106222
        {"\n"}tegar surya prayoga
      </Text>

      {/* Font: Niconne */}
      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        105841106322
        {"\n"}andi angke riona megawan
      </Text>

      {/* Font: DancingScript lagi, sesuai kesan feminim */}
      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        105841106422
        {"\n"}muh. fadli
      </Text>

      {/* Font: Caveat (mirip dengan gaya ringan dan sedikit miring) */}
      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        105841106522
        {"\n"} a.fahcri
      </Text>

      {/* Font: PlaywritePL (cocok untuk kesan formal dan bold) */}
      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
        105841106622
        {"\n"}m. agil gimnas
      </Text>
    </ScrollView>
  );
}
