import { Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack> 
        <Stack.Screen name="(modals)" options={{ presentation: 'modal', title: 'Modal', headerShown: false}} />
    </Stack>
  );
}