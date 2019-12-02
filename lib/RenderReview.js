import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
const colors = ["#4CAF50", "#2196F3", "#00bcd4", "#ff9800", "#f44336"];

const RenderReview = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5
      }}
    >
      <View style={{ flex: 0.3, paddingHorizontal: 10 }}>
        <Animatable.Text
          animation={"fadeInLeft"}
          style={{ flex: 1, fontSize: 15, fontWeight: "200" }}
        >
          {props.type}
        </Animatable.Text>
      </View>
      <View
        style={{
          flex: 0.6,
          height: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          whiteSpace: "nowrap",
          backgroundColor: "#fff"
        }}
      >
        <Animatable.View
          animation={"fadeInLeft"}
          style={{
            width: `${(props.value * 100) / props.total}%`,
            height: 5,
            backgroundColor:
              (props.colors && props.colors[props.position]) ||
              colors[props.position],
            paddingHorizontal: 10
          }}
        />
      </View>
    </View>
  );
};

export default RenderReview;
