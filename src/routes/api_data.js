/** @typedef { import ('./myTypes.d').Weather} Weather } */
/** @typedef { import ('./myTypes.d').CompState} CompState } */

/**
 * returns weather data according to the place it receives
 *
 * @param {string} place The place the API should look for
 * @returns {Promise<CompState>} result of the API request as status object
 */
export function getData(place) {
  const url = encodeURI(
    `http://127.0.0.1:8090/api/collections/weather/records?filter=(place~"${place}")`
  );
  const errMsg = `404 -- No data available for place "${place}"`;

  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      // else:
      throw new Error(errMsg);
    })
    .then((data) => {
      if (data.items.length === 0) throw new Error(errMsg);

      return {
        state: "success",
        payload: data.items[0],
        error: "",
      };
    })
    .catch((error) => ({
      state: "fail",
      payload: {},
      error: error,
    }));
}
