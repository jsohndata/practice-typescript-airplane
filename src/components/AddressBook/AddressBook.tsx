interface AddressProps {
  street: string;
  unit: number;
  zip: number;
  state: string;
}

const AddressBook = ( { street, unit, zip, state}: AddressProps) => {

  return (
    <>
      <p>street: { street }</p>
      <p>unit: { unit }</p>
      <p>zip: { zip }</p>
      <p>state: { state }</p>
    </>
  );
}

export default AddressBook;