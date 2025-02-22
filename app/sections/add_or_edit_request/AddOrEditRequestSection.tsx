import React from "react";
import { SafeAreaView } from "react-native";
import AddOrEditRequestView from "./AddOrEditRequestView";
import HomePageStore from "../home/HomePageStore";
import { useNavigation } from "@react-navigation/native";

type AddOrEditRequestSectionProps = {
  route?: {
    params?: {
      request?: {
        title: string;
        status: string;
        info: string;
        type?: string;
        date: string;
      };
    };
  };
};

export const AddOrEditRequestSection = ({
  route,
}: AddOrEditRequestSectionProps) => {
  const initialRequest = route?.params?.request;
  const navigation = useNavigation(); 

  const handleSubmit = (request: {
    title: string;
    status: string;
    info: string;
    type?: string;
    date: string;
  }) => {
    console.error("add request");
    console.error("add request", initialRequest);

    if (initialRequest) {
      HomePageStore.editRequest(initialRequest.title, request);
    } else {
      console.error("add request");
      HomePageStore.addRequest({
        ...request,
        date: new Date().toLocaleDateString(),
      });
    }
    navigation.goBack();

  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddOrEditRequestView
        initialRequest={initialRequest}
        onSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
};
