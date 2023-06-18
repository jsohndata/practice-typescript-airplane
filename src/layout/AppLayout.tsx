import Intro from "./Intro";
import Footer from "./Footer";

interface AppLayoutProps {
  children: any;
  title: string;
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