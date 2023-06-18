import Intro from "./Intro";
import Footer from "./Footer";

interface AppLayoutProps 
  extends Address {
  children: any;
  title: string;
}

interface Address {
  street?: string;
  unit?: number;
  zip?: number;
  state?: StateField.FL;
}

enum StateField {
  FL = "Florida",
  MD = "Maryland",
  NY = "New York"
}

const AppLayout = ({ children, title }: AppLayoutProps) => {

  return (
    <>
      <Intro title={title} />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout;