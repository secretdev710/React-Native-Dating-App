import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';
import { Box } from 'native-base';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: 75,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'UserInfo',
          tabBarIcon: ({ color, focused }) => (
            !focused ?
              <Image source={require("@/assets/images/tab_icon_man.png")} style={styles.tab_icon} /> :
              <Box style={styles.tab_icon_sel} >
                <Image source={require("@/assets/images/tab_top_bar.png")} style={styles.tab_top_bar} />
                <Image source={require("@/assets/images/tab_icon_man_sel.png")} style={styles.tab_icon} />
              </Box>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            !focused ?
              <Image source={require("@/assets/images/tab_icon_chat.png")} style={styles.tab_icon} /> :
              <Box style={styles.tab_icon_sel} >
                <Image source={require("@/assets/images/tab_top_bar.png")} style={styles.tab_top_bar} />
                <Image source={require("@/assets/images/tab_icon_chat_sel.png")} style={styles.tab_icon} />
              </Box>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => (
            !focused ?
              <Image source={require("@/assets/images/tab_icon_heart.png")} style={styles.tab_icon} /> :
              <Box style={styles.tab_icon_sel} >
                <Image source={require("@/assets/images/tab_top_bar.png")} style={styles.tab_top_bar} />
                <Image source={require("@/assets/images/tab_icon_heart_sel.png")} style={styles.tab_icon} />
              </Box>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            !focused ?
              <Image source={require("@/assets/images/tab_icon_scan.png")} style={styles.tab_icon} /> :
              <Box style={styles.tab_icon_sel} >
                <Image source={require("@/assets/images/tab_top_bar.png")} style={styles.tab_top_bar} />
                <Image source={require("@/assets/images/tab_icon_scan_sel.png")} style={styles.tab_icon} />
              </Box>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: 'Other',
          tabBarIcon: ({ color, focused }) => (
            !focused ?
              <Image source={require("@/assets/images/tab_icon_other.png")} style={styles.tab_icon} /> :
              <Box style={styles.tab_icon_sel} >
                <Image source={require("@/assets/images/tab_top_bar.png")} style={styles.tab_top_bar} />
                <Image source={require("@/assets/images/tab_icon_other_sel.png")} style={styles.tab_icon} />
              </Box>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab_icon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
  },
  tab_top_bar: {
    width: 40,
    height: 7,
    objectFit: 'contain',
    marginBottom: 18
  },
  tab_icon_sel: {
    height: "100%",
    width: 40,
    alignItems: "center",
  },
});