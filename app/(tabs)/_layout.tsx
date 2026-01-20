import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

function AnimatedIcon({ name, focused, color }: { name: any; focused: boolean; color: string }) {
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(focused ? 1.3 : 1) }],
  }));

  return (
    <Animated.View style={style}>
      <Ionicons name={name} size={26} color={color} />
    </Animated.View>
  );
}

// Global header component
function GlobalHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Maruti</Text>
      <Text style={styles.headerSubtitle}>Discover events and manage your bookings</Text>
    </View>
  );
}

export default function TabsLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const tabBarColor = isDark ? '#020617' : '#ffffff';
  const inactiveColor = isDark ? '#94a3b8' : '#9ca3af';
  const activeColor = '#2563eb';

  return (
    <View style={{ flex: 1 }}>
      {/* Global header visible on all screens */}
      <GlobalHeader />

      {/* Tabs */}
      <Tabs
        screenOptions={{
          headerShown: false, // Keep this false because we have our own header
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: tabBarColor,
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 15,
            borderTopColor: isDark ? '#020617' : '#e5e7eb',
          },
        }}
        style={{ flex: 1 }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedIcon
                name="home-outline"
                focused={focused}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookings"
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedIcon
                name="calendar-outline"
                focused={focused}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedIcon
                name="person-outline"
                focused={focused}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2563eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e7ff',
    marginTop: 4,
  },
});
