import Address from "../components/AddressBook/AddressBook";
import AppLayout from "../layout/AppLayout";

const About = () => {

  return (
    <>
      <AppLayout 
        title="About Title">
        <h2>About Content</h2>
        <h2>Address</h2>
        <Address 
          street="street name"
          unit={1337}
          zip={1234567234242343}
          state="CA" />
      </AppLayout>
    </>
  );
}

export default About;
