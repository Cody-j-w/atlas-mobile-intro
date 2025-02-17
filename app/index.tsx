import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { router } from "expo-router";
import { Button, Pressable, View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
    const { activities } = useActivitiesContext();
    return (
        <View style={styles.container}>
            <FlashList
                renderItem={({ item }) => (
                    <Text style={styles.text} key={item.id}>
                        {item.steps} taken on{" "}{new Date(item.date).toLocaleDateString()}
                    </Text>
                )}
                data={activities}
                estimatedItemSize={50}
            />
            <Pressable>
                <Button title="Add activity" onPress={() => { router.replace('/add-activity'); }}>
                </Button>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
    },
    text: {
        color: "white",
        marginLeft: 20
    },
});