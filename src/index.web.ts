import { v4 as uuidv4 } from 'uuid';

function v4() {
  return uuidv4();
}

const uuid = {
  v4,
};

export default uuid;
