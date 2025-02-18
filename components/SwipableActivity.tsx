import { View, StyleSheet, Text } from "react-native";
import { Activity, ActivityProps } from "./Activity";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useActivitiesContext } from "./ActivitiesProvider";

export default function SwipableActivity(props: ActivityProps) {
    const { deleteActivity } = useActivitiesContext();
    return (
        <View key={props.activity.id} style={styles.container}>
            <Swipeable
                renderLeftActions={() => <Action text="delete" />}
                renderRightActions={() => <Action text="delete" />}
                onSwipeableOpen={() => {
                    deleteActivity(props.activity.id)
                }}>
                <Activity activity={props.activity} />
            </Swipeable>
        </View>
    )
}

export const Action = ({ text }: { text: string }) => {
    return (
        <View style={styles.actionView}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        overflow: "hidden",
    },
    actionView: {
        backgroundColor: "#D00414",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        padding: 10
    }
})