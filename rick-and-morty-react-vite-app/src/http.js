import axios from "axios";

export function getCertainDataById(url, id, handleData, handleInfo) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      handleData([response.data]);
      handleInfo({ pages: 1 });
    })
    .catch((error) => {
      handleData([]);
    });
}

export function getAllDataByPage(url, page, handleData, handleInfo) {
  axios.get(`${url}?page=${page}`).then((response) => {
    handleData(response.data.results);
    handleInfo(response.data.info);
  });
}
