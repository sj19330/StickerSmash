import { View, Image, StyleSheet, Text } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <View>
      <Image source={placeholderImageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
