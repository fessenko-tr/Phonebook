import axios from "axios";

class ConnectionsAPI {
  static axiosInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
  });

  static setToken = (token) => {
    this.axiosInstance.defaults.headers.common.Authorization = token;
  };

  static unsetToken = () => {
    this.axiosInstance.defaults.headers.common.Authorization = "";
  };

  static getUsersInfo = () => {
    return this.axiosInstance.get("/users/current");
  };

  static registerUser(data) {
    return this.axiosInstance.post("/users/signup", data);
  }

  static loginUser(data) {
    return this.axiosInstance.post("/users/login", data);
  }

  static logoutUser() {
    return this.axiosInstance.post("/users/logout");
  }

  static getContacts() {
    return this.axiosInstance.get("/contacts");
  }

  static deleteContactById(id) {
    return this.axiosInstance.delete(`/contacts/${id}`);
  }

  static postContact(data) {
    return this.axiosInstance.post("/contacts", data);
  }

  static editContact(id, contact) {
    return this.axiosInstance.patch(`/contacts/${id}`, contact);
  }
}

export default ConnectionsAPI;
