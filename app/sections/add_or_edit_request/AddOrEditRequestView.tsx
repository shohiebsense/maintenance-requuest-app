import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
    ScrollView,
  
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./AddOrEditRequestStyles";
import { RequestType } from "@/app/models/RequestType";

type AddOrEditRequestViewProps = {
  initialRequest?: RequestType;
  onSubmit: (request: RequestType) => void;
};


const AddOrEditRequestView = ({
  initialRequest,
  onSubmit,
}: AddOrEditRequestViewProps) => {
  const id = undefined;
  const [title, setTitle] = useState(initialRequest?.title || "");
  const [status, setStatus] = useState(initialRequest?.status || "Open");
  const [type, setType] = useState(initialRequest?.type || "");
  const [urgentLevel, setUrgentLevel] = useState(initialRequest?.urgentLevel || "");
  const [date, setDate] = useState(initialRequest?.date || "");

  const handleSubmit = () => {
    onSubmit({ id, title, status, type, urgentLevel, date });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title *</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Bedroom window has cracked"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Select Status *</Text>
      <View style={styles.picker}>
        <Picker selectedValue={status} onValueChange={setStatus}>
          <Picker.Item label="Open" value="Open" />
          <Picker.Item label="Urgent" value="Urgent" />
          <Picker.Item label="Emergency" value="Emergency" />
          <Picker.Item label="Non Urgent" value="Non Urgent" />
          <Picker.Item label="Less Urgent" value="Less Urgent" />
        </Picker>
      </View>

      <Text style={styles.label}>Description *</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description of your request"
        multiline
        value={type}
        onChangeText={setType}
      />

      <Text style={styles.label}>Type (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Urgent"
        value={urgentLevel}
        onChangeText={setUrgentLevel}
      />

      <TouchableOpacity style={styles.button} onPress={() => { 
        handleSubmit();
      }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default AddOrEditRequestView;