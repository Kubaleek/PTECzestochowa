import "./style.css";

interface IProps {
  children: React.ReactNode;
}

export default function SubPageLayout({ children }: IProps) {
  return (
    <>
      {children}
    </>
  );
}
