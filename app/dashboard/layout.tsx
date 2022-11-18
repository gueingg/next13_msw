import Form from "./form";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>개인정보 입력</h1>
      {children}
    </div>
  );
};
export default DashBoardLayout;
