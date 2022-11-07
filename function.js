import axios from "axios";
let dizi =[];
const getData = async (number) =>{
  const {data: user} = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  )
  const {data: post} = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  )
  dizi.push("user:", user)
  dizi.push("post:", post)
  console.log(dizi)
}

export default getData;