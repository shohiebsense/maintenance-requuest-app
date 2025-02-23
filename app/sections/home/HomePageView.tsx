import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./HomePageStyles";
import HomePageStore from "./HomePageStore";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../navigation_types";
import { RequestType } from "../../models/RequestType";

type HomePageViewProps = {
  stats: {};
};

interface StatCardProps {
  value: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <View style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const HomePageView = observer(({ stats }: HomePageViewProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "urgent":
        return "#ff8c00";
      case "emergency":
        return "#ff0000";
      case "non urgent":
        return "#808080";
      case "less urgent":
        return "#87ceeb";
      default:
        return "#cccccc";
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Maintenance Request</Text>

        <View style={styles.statsContainer}>
          <StatCard value={HomePageStore.openRequests} label="Open Requests" />
          <StatCard
            value={HomePageStore.urgentRequests}
            label="Urgent Requests"
          />
          <StatCard
            value={HomePageStore.avgResolutionTime}
            label="Average time (days) to resolve"
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {HomePageStore.requests
            .slice()
            .sort((a, b) => Number(b.id) - Number(a.id))
            .map((request, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.headerContainer}>
                  <Text style={styles.title}>{request.title}</Text>
                  <Text style={styles.date}>{request.date}</Text>
                </View>

                <View
                  style={[
                    styles.status,
                    { backgroundColor: getStatusColor(request.status) },
                  ]}
                >
                  <Text style={styles.statusText}>{request.status}</Text>
                </View>

                <Text style={styles.infoText}>{request.info}</Text>
                {request.type && (
                  <Text style={styles.typeText}>{request.type}</Text>
                )}
              </View>
            ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            navigation.navigate("AddOrEditRequest", {});
          }}
        >
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default HomePageView;
