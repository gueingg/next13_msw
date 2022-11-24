import Link from "next/link";
import React from "react";

async function getLists() {
  const res = await fetch(
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
  );
  return res.json();
}

export type List = {
  fact: string;
};

export default async function Page() {
  const lists = await getLists();
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
