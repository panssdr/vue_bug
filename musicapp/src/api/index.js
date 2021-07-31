import axios from 'axios'


let baseUrl='http://localhost:3000';

//获取轮播图的api
export function getBanner(type=1){
    return  axios.get(`${baseUrl}/banner?type=${type}`);
}

// 获取推荐歌单,可选参数：limit：取出数量，默认是10
export function getMusicList(limit=10){
     return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//获取歌单的详情
export function getPlayListDetail(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}