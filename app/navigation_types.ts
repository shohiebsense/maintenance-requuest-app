import { StackNavigationProp } from "@react-navigation/stack";
import { RequestType } from "./sections/home/HomePageView";

export type RootStackParamList = {
    Home: undefined; // Home screen
    AddOrEditRequest: { request?: RequestType }; // Add/Edit screen with optional request data
};

// Define the navigation prop type for the Home screen
export type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Home"
>;