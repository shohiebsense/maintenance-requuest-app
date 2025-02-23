import React from "react";
import { SafeAreaView } from "react-native";
import AddOrEditRequestView from "./AddOrEditRequestView";
import HomePageStore from "../home/HomePageStore";
import { useNavigation } from "@react-navigation/native";
import { getCurrentDate } from "../../util/common_utils";

type AddOrEditRequestSectionProps = {
  route?: {
    params?: {
      request?: {
        id?: string;
        title: string;
        status: string;
        info: string;
        urgentLevel: string;
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
    id?: string;
    title: string;
    status: string;
    info: string;
    urgentLevel: string;
    date: string;
  }) => {

    if (initialRequest) {
      HomePageStore.editRequest(initialRequest.title, request);
    } else {
      console.error("add request");
      HomePageStore.addRequest({
        ...request,
        date: getCurrentDate(),
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
