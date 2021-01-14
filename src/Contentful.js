import { createClient } from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

export default createClient({
  space: process.env.REACT_APP_API_KEY,
  accessToken: process.env.REACT_APP_ASSESS_TOKEN,
});
