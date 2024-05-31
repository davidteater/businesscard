import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="p-5 bg-neutral-950 rounded-xl shadow-inner">
      <div className="flex justify-evenly h-8 bg-neutral-950 ">
        <a href="https://github.com/AitchGrasso/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon
          icon={faGithubAlt}
          size="2x"
          className="hover:text-rose-300"
          />
        </a>
        <a href="https://x.com/h_grasso" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon
          icon={faXTwitter}
          size="2x"
          className="hover:text-rose-300"
          />
        </a>
        <a href="https://www.threads.net/@aitch_grasso" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon
          icon={faThreads}
          size="2x"
          className="hover:text-rose-300"
          />
        </a>
        <a href="https://www.linkedin.com/in/hgrasso/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon
          icon={faLinkedinIn}
          size="2x"
          className="hover:text-rose-300"
          />
        </a>
      </div>
    </div>
  );
}
