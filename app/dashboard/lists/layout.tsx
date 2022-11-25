
import Button from "../form/Button";
const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Button>{<div>알림</div>}</Button>
      <div>{children}</div>
    </div>
  );
};
export default ListLayout;
