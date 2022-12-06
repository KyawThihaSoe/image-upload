import axios from "axios";
import React, { useState } from "react";
import { PostMethod } from "../services/api-services";

const Test = () => {
  const [name, setName] = useState("");
  const [photo1, setPhoto1] = useState();
  const [photo2, setPhoto2] = useState();
  const Handlersend = async () => {
    console.log("name", name);
    console.log("photo1", photo1);
    console.log("photo2", photo2);
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("photo1", photo1);
      fd.append("photo2", photo2);
      const response = await axios.request(PostMethod(`api/testing`, fd));
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="file" onChange={(e) => setPhoto1(e.target.files[0])} />
      <input type="file" onChange={(e) => setPhoto2(e.target.files[0])} />
      <button onClick={Handlersend}>send</button>
    </>
  );
};

export default Test;
