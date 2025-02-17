import { View, Pressable, Button, StyleSheet, Text, TextInput } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function AddActivity() {
    const [steps, setSteps] = useState<number>(0);
    const { insertActivity } = useActivitiesContext();
    return (
        <View style={styles.container}>
            <Text>
                Log an activity
            </Text>
            <TextInput
                placeholder="enter steps"
                keyboardType="number-pad"
                onChangeText={(value) => setSteps(parseInt(value))}
            />
            <Pressable onPress={() => {
                insertActivity(steps, new Date());
                router.replace('/');
            }}>
                <Button title="Add steps">
                </Button>
            </Pressable>
            <Pressable>
                <Button title="Go back" onPress={() => { router.replace('/'); }}>
                </Button>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white"
    }
});