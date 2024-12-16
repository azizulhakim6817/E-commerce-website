import { create } from "zustand";
import axios from "axios";

const FeaturesStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    let res = await axios.get("/api/v1/FeaturesList");
    if (res.data["status"] === "success") {
      set({ FeatureList: res.data["data"] });
    }
  },

  LegalDetials: null,
  LegalDetialsRequest: async (type) => {
    set({ LegalDetials: null });
    let res = await axios.get(`/api/v1/LegalDetails/${type}`);
    if (res.data["status"] === "success") {
      set({ LegalDetials: res.data["data"] });
    }
  },
}));

export default FeaturesStore;
