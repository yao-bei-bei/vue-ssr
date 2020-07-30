import axios from 'axios';
let base;
if (process.env.STATS === 'dev'){
  base="http://www.getfunent.com"
}else{
  base=""
}
export default {
  get(params={}){
    return axios.get(`${base}/api/getNewTop`, {params: params}).then(res => res.data);
  }
  // get(params={}){
  //   let arr=[{name:1},{name:2},{name:3},{name:4}]
  //   return arr
  // }
}
