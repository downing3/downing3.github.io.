import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'creator', // Types 'One'
        1500, // Waits 1s
        'student', // Deletes 'One' and types 'Two'
        1500, // Waits 2s
        'sister', // Types 'Three' without deleting 'Two'
        1500, // Waits 2s
        'daughter', // Types 'Three' without deleting 'Two'
        1500, // Waits 2s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={2}
     style={{
  fontSize: '2em',
  display: 'inline-block',
  fontWeight: '100', // Set the font weight to thin
  backgroundColor: 'black', // Set the background color to black
  color: 'white', // Set the font color to white
}}
    />
  );
};

export default TypingAnimation;