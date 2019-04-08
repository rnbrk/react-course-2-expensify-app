/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// This is needed to set up Enzyme 3 to work with the Enzyme adapter voor React version 16.
// For more information, check this video @ 06:30
// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900158?start=0

// Or the documentation of Enzyme
// https://airbnb.io/enzyme/
Enzyme.configure({ adapter: new Adapter() });

// Needed so the Node environment values for the Firebase TEST database will get used
// and not the development or production environment values
DotEnv.config({ path: '.env.test' });
