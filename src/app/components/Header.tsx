import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <div className="flex flex-col text-center ">
      <h1 className="">H. Grasso </h1>
      <h3>Frontend Developer</h3>
      <a href="http://h-grasso.dev">
        <p>h-grasso.dev</p>
      </a>
      
      <div className="flex justify-evenly my-4">
        <a href="mailto:aitch.grasso@gmail.com" target="_blank" rel="noopener noreferrer" className="flex justify-center gap-4 bg-white hover:bg-rose-300 rounded text-black w-2/5 p-2 items-center">
          <FontAwesomeIcon icon={faEnvelope}  size="sm"/>
          <h3 className="text-black">Email</h3>
        </a>
        <a href="https://www.linkedin.com/in/hgrasso/" target="_blank" rel="noopener noreferrer" className="flex justify-center gap-4 rounded  bg-sky-500 w-2/5 items-center hover:bg-sky-600">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="sm"
            className="hover:text-stone-300"
          />
          <h3 className="text-white">LinkedIn</h3>
        </a>
      </div>
    </div>
  );
}
