import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utility/utility";
import Cookies from "js-cookie";

const UserStore = create((set) => ({
  /*Login............................................ */

  LogingFormData: { email: "" },
  LoginFormOnChange: async (name, value) => {
    set((state) => ({
      LogingFormData: {
        ...state.LogingFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`api/v1/UserOTP/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* Logout........................................................... */
  UserLogoutequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`api/v1/UserLogout`);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* OTP verify request............................................ */
  isLogin: () => {
    return !!Cookies.get("token");
  },

  OTPFormData: { otp: "" },
  OTPFormOnChange: async (name, value) => {
    set((state) => ({
      OTPFormData: {
        ...state.OTPFormData,
        [name]: value,
      },
    }));
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`api/v1/VerifyLogin/${email}/${otp}`);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* Profile page ............................................... */
  ProfileForm: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFormChange: (name, value) => {
    set((state) => ({
      ProfileForm: {
        ...state.ProfileForm,
        [name]: value,
      },
    }));
  },

  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/ReadProfile`);
      if (res.data["data"].length > 0) {
        set({ ProfileDetails: res.data["data"][0] });
        set({ ProfileForm: res.data["data"][0] });
      } else {
        set({ ProfileDetails: [] });
      }
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  ProfileSaveRequest: async (PostBody) => {
    try {
      set({ ProfileDetails: null });
      let res = await axios.post(`/api/v1/UpdataProfile`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default UserStore;
