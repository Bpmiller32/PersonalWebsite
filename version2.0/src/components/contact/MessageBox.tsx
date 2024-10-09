import { IoIosSend } from "react-icons/io";
import { ProjectButton } from "../global/ProjectButton";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Regex for email validation
const regex: RegExp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const MessageBox = () => {
  const [, setRender] = useState(0);
  const [animate, setAnimate] = useState(0);

  const errorAnimation = useAnimation();

  useEffect(() => {
    errorAnimation.start({
      x: [0, -6, 5, -3, 2, 0],
      rotateY: [0, -9, 7, -5, 3, 0],
    });
  }, [animate, errorAnimation]);

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const isButtonPressedOnce = useRef(false);
  const isValidEmail = useRef(true);
  const isMessageBoxDisabled = useRef(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailRef.current) {
      emailRef.current.value = event.target.value;
    }

    // Check if valid with regex
    const regexResult: boolean = regex.test(emailRef.current?.value as string);

    if (regexResult) {
      isValidEmail.current = true;
    } else {
      isValidEmail.current = false;
    }

    // Rerender after button is pressed once
    if (isButtonPressedOnce.current) {
      setRender((prev) => prev + 1);
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (messageRef.current) {
      messageRef.current.value = event.target.value;
    }
  };

  const handleButtonClicked = () => {
    isButtonPressedOnce.current = true;
    isMessageBoxDisabled.current = true;

    setAnimate((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-xs border-2 bg-projectForeground border-projectBorder p-6 rounded-lg space-y-6">
      <div>
        <label className="text-projectDark text-sm">Your email address</label>
        <div className="mt-1">
          <input
            ref={emailRef}
            onChange={handleEmailChange}
            disabled={isMessageBoxDisabled.current ? true : false}
            className={
              "relative w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary" +
              (isMessageBoxDisabled.current ? " bg-projectDark" : "")
            }
            aria-label="email input field"
            placeholder="email"
          />
          {isValidEmail.current ? (
            <></>
          ) : (
            <motion.div
              initial={{ x: 0, rotateY: 0 }}
              animate={errorAnimation}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.065, 0.185, 0.315, 0.435, 0.5],
              }}
              className="absolute ml-0.5 text-sm text-red-500"
            >
              Please enter a valid email address
            </motion.div>
          )}
        </div>
      </div>

      <div>
        <label className="text-projectDark text-sm">Message</label>
        <div className="mt-1">
          <textarea
            ref={messageRef}
            onChange={handleMessageChange}
            disabled={isMessageBoxDisabled.current ? true : false}
            rows={4}
            maxLength={500}
            className={
              "w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary" +
              (isMessageBoxDisabled.current ? " bg-projectDark" : "")
            }
            aria-label="message input field"
          />
        </div>
      </div>

      <button onClick={handleButtonClicked}>test</button>

      <ProjectButton
        text={
          <div className="flex items-center space-x-2">
            <p>Send Message</p>
            <IoIosSend className="h-5 w-5" />
          </div>
        }
        className="w-full"
      />
    </div>
  );
};
