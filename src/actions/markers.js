export const MARKER_CLICKED = 'MARKER_CLICKED';
export const MAP_CLICKED = 'MAP_CLICKED';

export default {
  markerClick(props, marker) {
    return dispatch => {
      dispatch(markerClicked({ props, marker }));
    };
  },
  mapClick() {
    return dispatch => {
      dispatch(mapClicked());
    };
  }
};

const markerClicked = marker => ({ type: MARKER_CLICKED, marker });
const mapClicked = () => ({ type: MAP_CLICKED });
