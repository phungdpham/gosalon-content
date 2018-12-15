import axios from 'axios';

export default {
  //Get all new contents
  getContents: function() {
    return axios.get("/api/contents");
  },
  //get all the content with the given id
  getContent: function(id) {
    return axios.get("/api/contents/" + id);
  },
  deleteContent: function(id) {
    return axios.delete('/api/contents/' + id);
  },
  //save a content to the database
  saveContent: function(newContent) {
    return axios.post("/api/contents", newContent);
  }
};