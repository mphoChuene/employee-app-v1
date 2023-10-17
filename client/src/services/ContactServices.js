import axios from "axios";

export class ContactService {
  static serverURL = "http://localhost:9000";

  static getAllContacts() {
    let dataURL = `${this.serverURL}/employees`;
    return axios.get(dataURL);
  }

  static getContact(contactId) {
    let dataURL = `${this.serverURL}/employees/${contactId}`;
    return axios.get(dataURL);
  }

  static updateContact(contact, contactId) {
    let dataURL = `${this.serverURL}/employees/${contactId}`;
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactId) {
    let dataURL = `${this.serverURL}/employees/${contactId}`;
    return axios.delete(dataURL);
  }

  static createContact(contact) {
    let dataURL = `${this.serverURL}/employees`;
    return axios.post(dataURL, contact);
  }
}
