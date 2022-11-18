import Link from "next/link";
import Button from '../form/Button';

async function getList() {
  const res = await fetch(
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
  );
  return res.json();
}

type List = {
  fact: string;
};

const ListLayout = async ({ children }: { children: React.ReactNode }) => {
  const list = await getList();
  return (
    <div>
      <Button>{<div>알림</div>}</Button>
      <div>{children}</div>
      <ul>
        {list.map((data: List, idx: number) => (
          <li key={idx}>
            <Link href={`/dashboard/lists/${idx + 1}`}>{data.fact}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListLayout;
