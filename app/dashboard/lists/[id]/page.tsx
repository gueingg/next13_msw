import Link from "next/link";
import React, { useRef } from "react";
import { List } from "../page";

async function getList(id: string) {
  let res = await fetch(
    `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=${id}`
  );
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const list = await getList(params.id);
  return (
    <div>
      {list.map((data: List, idx: number) => (
        <Link key={idx} href={"/dashboard/lists"}>
          {data.fact}
        </Link>
      ))}
    </div>
  );
}
