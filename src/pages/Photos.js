import React, { useContext } from "react";

import Image from "../components/Image";
import { getClass } from "../utils";
import { AppContext } from "../components/AppContext";

function Photos() {
  const context = useContext(AppContext);

  const images = context.pics.map((pic, index) => (
    <Image key={pic.id} img={pic} className={getClass(index)} />
  ));

  return <main className="photos">{images}</main>;
}

export default Photos;
