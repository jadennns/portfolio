import clsx from "clsx";
import { useState } from "react";
import useDetect from "../../lib/detectMobile";

export default function ContactMe() {
  const [subject, setSubject] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [content, setContent] = useState<string>();

  const isMobile = useDetect();

  return (
    <section id="contact">
      <div className="animate-in slide-in-from-left-[6rem] duration-1000">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-3xl text-white font-bold">Contact Me</h1>
          <div
            className={clsx(
              isMobile
                ? "flex flex-col space-y-3"
                : "flex items-center space-x-4"
            )}
          >
            <input
              type="text"
              className="outline-none px-1 py-1 w-[20rem] bg-main-3 text-white placeholder:text-gray-300"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              placeholder="E-mail subject"
            />
            <input
              type="email"
              className="outline-none px-1 py-1 w-[15rem] bg-main-3 text-white placeholder:text-gray-300"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-mail address"
            />
          </div>
          <textarea
            className="p-1 outline-none w-[23rem] lg:w-[45rem] bg-main-3 text-white placeholder:text-gray-300 h-48"
            placeholder="Your message to send "
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="bg-main-1 rounded-md p-2 text-white font-semibold">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
}
