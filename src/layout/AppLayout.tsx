import Footer from "./Footer"

const AppLayout = ({ children }: any) => {

  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default AppLayout;