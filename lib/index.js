import React from "react";
import { FlatList } from "react-native";
import RenderReview from "./RenderReview";

const Review = () => {
  return (
    <FlatList
      data={[
        { type: "Excellent", value: 80 },
        { type: "Good", value: 50 },
        { type: "Average", value: 30 },
        { type: "Below Average", value: 40 },
        { type: "Poor", value: 10 }
      ]}
      renderItem={({ item, index }) => (
        <RenderReview {...item} position={index} />
      )}
    />
  );
};

export default Review;
