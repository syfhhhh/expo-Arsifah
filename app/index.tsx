// Import komponen penting dari React Native untuk membuat tampilan scroll dan teks
import { ScrollView, Text, View } from "react-native";

// Fungsi utama komponen Index – menampilkan daftar nama dengan gaya font yang unik dan ekspresif
export default function Index() {
  return (

    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontFamily: "CabinSketch", fontSize: 26, color: "blue" }}>
        Zaskia aulia ashar
        {"\n"}105841105722
      </Text>

      <Text style={{ fontFamily: "CormorantUnicase", fontSize: 24, color: "blue" }}>
        MUH. ILHAM AKBAR
        {"\n"}105841105822
      </Text>

      <Text style={{ fontFamily: "CroissantOne", fontSize: 24, color: "blue" }}>
        ZELVIA
        {"\n"}105841105922
      </Text>

      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        andi difta rameyza
        {"\n"}105841106022
      </Text>

      <Text style={{ fontFamily: "Gabriela", fontSize: 24, color: "red", fontWeight: "bold" }}>
        Arsifah ainun aulia
        {"\n"}105841106122
      </Text>

      <Text style={{ fontFamily: "IntelOneMono", fontSize: 24, color: "blue" }}>
        105841106222
        {"\n"}tegar surya prayoga
      </Text>

      <Text style={{ fontFamily: "Niconne", fontSize: 24, color: "blue" }}>
        105841106322
        {"\n"}andi angke riona megawan
      </Text>

      <Text style={{ fontFamily: "DancingScript", fontSize: 24, color: "blue" }}>
        105841106422
        {"\n"}muh. fadli
      </Text>

      <Text style={{ fontFamily: "Caveat", fontSize: 24, color: "blue" }}>
        105841106522
        {"\n"} a.fahcri
      </Text>

      <Text style={{ fontFamily: "PlaywritePL", fontSize: 24, color: "blue" }}>
        105841106622
        {"\n"}m. agil gimnas
      </Text>
    </ScrollView>
  );
}
