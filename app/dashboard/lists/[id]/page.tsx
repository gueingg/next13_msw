import React,{useRef} from "react";
import useSWR from "swr";

async function getList(id :string) {
  let res = await fetch(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=${id}`);
  return res.json();
}

export default async function Page({params}: {params: {id: string}}){
  const list = await getList(params.id)
  console.dir(list.fact);
  return (<div>{list.fact}</div>);
}


