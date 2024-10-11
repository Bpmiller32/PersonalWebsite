import { IoIosSend } from "react-icons/io";
import { ActionButton } from "../global/ActionButton";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CiCircleCheck } from "react-icons/ci";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

// Regex for email validation
const regex: RegExp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const MessageBox = () => {
  // Force renders for animation or no
  const [, setRender] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Animation controls
  const errorAnimation = useAnimation();
  const disabledAnimation = useAnimation();

  // Template refs
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Gating variables
  const isButtonPressedOnce = useRef(false);
  const isValidEmail = useRef(false);
  const isMessageBoxEnabled = useRef(true);

  // Run whenever animate is changed
  useEffect(() => {
    if (!isValidEmail.current) {
      errorAnimation.start({
        x: [0, -6, 5, -3, 2, 0],
        rotateY: [0, -9, 7, -5, 3, 0],
      });
    }

    if (!isMessageBoxEnabled.current) {
      disabledAnimation.start({
        backgroundColor: "#9facac",
      });
    }
  }, [animate, errorAnimation, disabledAnimation]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update in emailRef's value
    if (emailRef.current) {
      emailRef.current.value = event.target.value;
    }

    // Check if valid with regex, change gate based on result
    const regexResult: boolean = regex.test(emailRef.current?.value as string);

    if (regexResult) {
      isValidEmail.current = true;
    } else {
      isValidEmail.current = false;
    }

    // Rerender without animate only after button is pressed once so that errortext only updates and corrects per keystroke after one attempt
    if (isButtonPressedOnce.current) {
      setRender((prev) => !prev);
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // Update messageRef's value
    if (messageRef.current) {
      messageRef.current.value = event.target.value;
    }
  };

  const handleButtonClicked = async () => {
    isButtonPressedOnce.current = true;

    // Send message to firebase, disable form
    if (isMessageBoxEnabled.current && isValidEmail.current) {
      try {
        await addDoc(collection(db, "websiteMessages"), {
          email: emailRef.current?.value,
          message: messageRef.current?.value,
          time: new Date(),
        });
      } catch (error) {
        console.error("Error sending message: ", error);
      }

      isMessageBoxEnabled.current = false;
    }

    // Rerender with animate every button click
    setAnimate((prev) => !prev);
  };

  return (
    <div className="w-full max-w-xs border-2 bg-projectForeground border-projectBorder p-6 rounded-lg">
      <p className="text-projectDark text-sm">Your email address</p>
      <motion.input
        ref={emailRef}
        onChange={handleEmailChange}
        disabled={isMessageBoxEnabled.current === true ? false : true}
        className="w-full text-sm appearance-none rounded-md border mt-1 px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary"
        initial={{ backgroundColor: "#fbfbfb" }}
        animate={disabledAnimation}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        aria-label="email input field"
        placeholder="email@domain.com"
      />
      {!isValidEmail.current && isButtonPressedOnce.current ? (
        <motion.div
          initial={{ x: 0, rotateY: 0 }}
          animate={errorAnimation}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.065, 0.185, 0.315, 0.435, 0.5],
          }}
          className="absolute mt-0.5 ml-0.5 text-sm text-red-500"
        >
          Please enter a valid email address
        </motion.div>
      ) : (
        <></>
      )}

      <p className="mt-8 text-projectDark text-sm">Message</p>
      <motion.textarea
        ref={messageRef}
        onChange={handleMessageChange}
        disabled={isMessageBoxEnabled.current === true ? false : true}
        rows={4}
        maxLength={500}
        className="w-full text-sm appearance-none rounded-md border mt-1 px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary"
        initial={{ backgroundColor: "#fbfbfb" }}
        animate={disabledAnimation}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        aria-label="message input field"
      />

      <ActionButton
        onClick={handleButtonClicked}
        disabled={isMessageBoxEnabled.current === true ? false : true}
        colors={
          isMessageBoxEnabled.current === true
            ? {
                borderColor: "border-projectPrimary",
                textColorBase: "text-projectBright",
                textColorHover: "text-projectBright",
                backgroundBase: "",
                backgroundHover: "bg-projectSecondary",
              }
            : {
                borderColor: "border-projectPrimary",
                textColorBase: "text-projectBright",
                textColorHover: "text-projectBright",
                backgroundBase: "bg-projectSecondary",
                backgroundHover: "bg-projectSecondary",
              }
        }
        text={
          isMessageBoxEnabled.current === true ? (
            <div className="flex items-center space-x-2">
              <p>Send Message</p>
              <IoIosSend className="h-5 w-5" />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <p>Message Sent</p>
              <CiCircleCheck className="h-5 w-5" />
            </div>
          )
        }
        className="w-full mt-3"
      />
    </div>
  );
};
