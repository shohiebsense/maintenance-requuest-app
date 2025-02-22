import React from "react";
import { SafeAreaView } from "react-native";
import { AddOrEditRequestView } from "./AddOrEditRequestView";
import HomePageStore from "../home/HomePageStore";

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

  const handleSubmit = (request: {
    title: string;
    status: string;
    info: string;
    type?: string;
    date: string;
  }) => {
    if (initialRequest) {
      // Edit existing request
      HomePageStore.editRequest(initialRequest.title, request);
    } else {
      // Add new request
      HomePageStore.addRequest({
        ...request,
        date: new Date().toLocaleDateString(),
      });
    }
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
