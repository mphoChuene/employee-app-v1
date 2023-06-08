import axios from "axios";

export class ContactService {
  static serverURL = "http://localhost:9000";

  static getAllContacts() {
    let dataURL = `${this.serverURL}/employees`;
    return axios.get(dataURL);
  }
}
