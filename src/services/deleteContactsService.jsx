import http from "./httpService";

export default function deleteOneContacts(id) {
  return http.delete(`/contacts/${id}`);
}
