import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";

function FormImagePicker(props) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
};

const handleRemove = (uri) => {
    setFieldValue(
        name,
        imageUris.filter((imageUri) => {
            
        })
    )
}
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FormImagePicker;