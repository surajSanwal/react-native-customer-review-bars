import React from "react";
import { FlatList, ViewPropTypes, FlatListProperties } from "react-native";
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
      scrollEnabled={false}
      data={data}
      renderItem={({ item, index }) => (
        <RenderReview
          {...item}
          position={index}
          total={totalCount}
          {...props}
        />
      )}
      {...props.flatListProps}
    />
  );
};

Review.propTypes = {
  reviews: PropTypes.array,
  showCount: PropTypes.bool,
  showPercentage: PropTypes.bool,
  reviewTypeStyle: ViewPropTypes.style,
  colors: PropTypes.array,
  rightTextStyle: ViewPropTypes.style,
  flatListProps: FlatListProperties
};

Review.defaultProps = {
  reviews: [],
  showCount: false,
  showPercentage: false,
  reviewTypeStyle: {},
  rightTextStyle: {},
  flatListProps: {}
};
export default Review;
