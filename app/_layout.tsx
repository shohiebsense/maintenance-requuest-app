import HomePageSection from "./sections/home/HomePageSection";
import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AddOrEditRequestSection } from "./sections/add_or_edit_request/AddOrEditRequestSection";
import { RootStackParamList } from "./navigation_types";


const Stack = createStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePageSection}
          options={{ title: "Maintenance Requests" }}
        />
        <Stack.Screen
          name="AddOrEditRequest"
          component={AddOrEditRequestSection}
          options={{ title: "Add/Edit Request" }}
        />
      </Stack.Navigator>
  );
}