interface IntroProps {
  title: string;
}
const Intro = ({ title }: IntroProps) => {

  return (
    <>
      <h1>{ title }</h1>
    </>
  );
}

export default Intro;