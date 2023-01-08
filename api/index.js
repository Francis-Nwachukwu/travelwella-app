import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "11.847676",
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "29243263e3msh962cb29e4737098p1caa38jsn419864cf0d26",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (err) {
    return null;
  }
};
