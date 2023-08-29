import { useState, useEffect } from 'react';

const ApiID = 'joGFH4avHEqznKNh1AF4';

const Likes = () => {

let [idl, setIdl] = useState(1);
let [likes, setLikes] = useState(1);
function increaseLikes() {
  setLikes(likes + 1);
}

let CreateLikes = async idl =>{
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ApiID}/likes/`,
  {
    method: 'POST',
    body: JSON.stringify({
      item_id: idl
    }),
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
  });
  if (response.status === 201) {
    const data = await response.json();
    console.log(data);
  }
}
CreateLikes(idl);
}

export default Likes;