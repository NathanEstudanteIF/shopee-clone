import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';

import {
  BellIcon,
  HouseIcon,
  ShoppingBagIcon,
  UserIcon,
  VideoCameraIcon
} from 'phosphor-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          paddingTop: 5,
        },
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <HouseIcon
              size={32}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="officialProducts"
        options={{
          title: 'Oficiais',
          tabBarIcon: ({ color, focused }) => (
            <ShoppingBagIcon
              size={32}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="live"
        options={{
          title: 'Live e Vídeo',
          tabBarIcon: ({ color, focused }) => (
            <VideoCameraIcon
              size={32}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color, focused }) => (
            <BellIcon
              size={32}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Eu',
          tabBarIcon: ({ color, focused }) => (
            <UserIcon
              size={32}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
