import { TypeAnimation } from 'react-type-animation';

const AboutText = () => {
  return (
    <TypeAnimation
      sequence={[
        'since a young age i have always loved creating. from making short films with my moms old camcorder, to putting together thousand piece puzzles, to building rube goldberg machines in my living room, everything creative has always intrigued me',
        () => {
          console.log('Sequence completed');
        }
      ]}
      wrapper="span"
      cursor={true}
      style={{
        fontSize: '2em',
        display: 'inline-block',
        fontWeight: '100', 
        backgroundColor: 'black', 
        color: 'white', 
      }}
    />
  );
};

export default AboutText;
