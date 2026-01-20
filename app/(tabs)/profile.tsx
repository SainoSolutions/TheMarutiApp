import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { darkTheme, lightTheme } from '../../theme/color';

export default function ProfileScreen() {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Daniel</Text>
    </View>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.textPrimary,
    },
    subtitle: {
      fontSize: 16,
      color: colors.textSecondary,
      marginTop: 6,
    },
  });
