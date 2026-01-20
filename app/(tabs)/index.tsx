import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { darkTheme, lightTheme } from '../../theme/color';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkTheme : lightTheme;

  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Animated.View entering={FadeInDown.duration(600)} style={styles.header}>
        <Text style={styles.greeting}>Hi Daniel 👋</Text>
        <Text style={styles.location}>Premium Car Care at Your Doorstep</Text>
      </Animated.View>

      {/* Hero Banner */}
      <Animated.Image
        entering={FadeInRight.duration(700)}
        source={{ uri: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2' }}
        style={styles.banner}
      />

      {/* Services */}
      <Text style={styles.sectionTitle}>Popular Services</Text>

      <View style={styles.grid}>
        {services.map((item, index) => (
          <Animated.View
            key={index}
            entering={FadeInDown.delay(index * 120).springify()}
          >
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Offer Card */}
      <Animated.View entering={FadeInDown.delay(700)} style={styles.offerCard}>
        <Text style={styles.offerTitle}>🚗 Flat 25% OFF on First Service</Text>
        <Text style={styles.offerSub}>Trusted mechanics • Genuine parts • Free pickup & drop</Text>
      </Animated.View>

    </ScrollView>
  );
}

const services = [
  { title: 'Car Wash', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { title: 'Periodic Service', icon: 'https://cdn-icons-png.flaticon.com/512/854/854878.png' },
  { title: 'Battery', icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050525.png' },
  { title: 'AC Repair', icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933825.png' },
  { title: 'Tyres', icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126590.png' },
  { title: 'Denting', icon: 'https://cdn-icons-png.flaticon.com/512/809/809957.png' },
];

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
      paddingTop: 10,
    },
    header: {
      marginBottom: 10,
    },
    greeting: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.textPrimary,
    },
    location: {
      color: colors.textSecondary,
      marginTop: 4,
    },
    banner: {
      width: width - 32,
      height: 180,
      borderRadius: 16,
      marginVertical: 14,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10,
      color: colors.textPrimary,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: (width - 48) / 3,
      backgroundColor: colors.card,
      borderRadius: 14,
      padding: 14,
      alignItems: 'center',
      marginBottom: 14,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 4,
    },
    icon: {
      width: 36,
      height: 36,
      marginBottom: 6,
    },
    cardText: {
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'center',
      color: colors.textPrimary,
    },
    offerCard: {
      backgroundColor: colors.accent,
      borderRadius: 16,
      padding: 18,
      marginVertical: 20,
    },
    offerTitle: {
      color: '#fff',
      fontSize: 17,
      fontWeight: '700',
    },
    offerSub: {
      color: '#e5e7eb',
      marginTop: 6,
      fontSize: 13,
    },
  });
