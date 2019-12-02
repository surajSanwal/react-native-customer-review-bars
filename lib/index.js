import React from "react";
import { FlatList } from "react-native";
import RenderReview from "./RenderReview";
import PropTypes from "prop-types";
const defaultRating = [
  { type: "Excellent", value: 0 },
  { type: "Good", value: 0 },
  { type: "Average", value: 0 },
  { type: "Below Average", value: 0 },
  { type: "Poor", value: 0 }
];
const Review = (props) => {
  var totalCount = 0;
  let data =
    props.reviews &&
    props.reviews.reduce((d, i, index) => {
      d.push({ ...defaultRating[index], ...i });
      totalCount += (i && i.value) || 0;
      return d;
    }, []);
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <RenderReview {...item} position={index} total={totalCount} />
      )}
    />
  );
};

Review.propTypes = {
  reviews: PropTypes.array
};

Review.defaultProps = {
  reviews: []
};
export default Review;
