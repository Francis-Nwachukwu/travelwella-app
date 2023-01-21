import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "6.410706178892949",
          tr_latitude: tr_lat ? tr_lat : "6.612470990602",
          bl_longitude: bl_lng ? bl_lng : "3.452691002149804",
          tr_longitude: tr_lng ? tr_lng : "4.097097275202185",
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
