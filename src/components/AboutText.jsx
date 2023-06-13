import { TypeAnimation } from 'react-type-animation';

const AboutText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Since a young age, I have always loved creating. From playing the piano, to building Rube Goldberg machines and puzzles, solving problems creatively has always intrigued me. Now, I explore this passion through technology. ',
        () => {
          console.log('Sequence completed');
        }
      ]}
      wrapper="span"
      cursor={true}
      style={{
        fontSize: '1.7em',
        display: 'inline-block',
        fontWeight: '100', 
        backgroundColor: 'black', 
        color: 'white', 
      }}
    />
  );
};

export default AboutText;
