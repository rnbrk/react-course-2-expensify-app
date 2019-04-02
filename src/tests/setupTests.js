import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// This is needed to set up Enzyme 3 to work with the Enzyme adapter voor React version 16.
// For more information, check this video @ 06:30
// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900158?start=0

// Or the documentation of Enzyme
// https://airbnb.io/enzyme/
