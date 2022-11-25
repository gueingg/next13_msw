import Link from "next/link";
import { notFound } from "next/navigation";
import React, {use} from "react";

async function getLists() {
  const res = await fetch(
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
  );
  if(!res.ok){
   return undefined;
  }
  return res.json();
}

export type List = {
  fact: string;
};

export default async function Page() {
  const lists = await getLists();
  if(!lists){
    notFound()
  }
  return (
    <div>
      <ul>
        {lists.map((data: List, idx: number) => (
          <li key={idx}>
            <Link href={`/dashboard/lists/${idx + 1}`}>{data.fact}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
