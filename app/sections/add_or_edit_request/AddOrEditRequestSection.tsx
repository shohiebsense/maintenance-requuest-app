import React from "react";
import { SafeAreaView } from "react-native";
import AddOrEditRequestView from "./AddOrEditRequestView";
import HomePageStore from "../home/HomePageStore";
import { useNavigation } from "@react-navigation/native";
import { getCurrentDate } from "../../util/common_utils";
import { RequestType } from "../../models/RequestType";
type AddOrEditRequestSectionProps = {
  route?: {
    params?: {
      request?: RequestType;
    };
  };
};

export const AddOrEditRequestSection = ({
  route,
}: AddOrEditRequestSectionProps) => {
  const initialRequest = route?.params?.request;
  const navigation = useNavigation(); 

  const handleSubmit = (request: RequestType) => {

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
