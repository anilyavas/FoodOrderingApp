import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function MenuLayout() {
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Menu',
          headerRight: () => (
            <Link href='/' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='plus-square-o'
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name='[id]'
        options={{
          headerTitle: 'Menu',
          headerRight: () => (
            <Link href='/' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='pencil'
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
