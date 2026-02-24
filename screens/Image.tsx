import { useFetchimage } from "../hooks/useFetchimage";

import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Button, View , Image, FlatList } from "react-native";

const ImageScreen = () => {
    const {image} = useFetchimage();

    return(
        <ScrollView>
            {[...image].reverse().map((item: any) => (
                    <Text key={item.id}>
                      {item.title}
                    </Text>
                  ))}
        </ScrollView>
    )
}

export default ImageScreen