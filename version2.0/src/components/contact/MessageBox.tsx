import { IoIosSend } from "react-icons/io";
import { ProjectButton } from "../global/ProjectButton";

export const MessageBox = () => {
  return (
    <div className="w-full max-w-xs border-2 bg-projectForeground border-projectBorder p-6 rounded-lg">
      <div className="space-y-6">
        <div>
          <label className="text-projectDark text-sm">Your email address</label>
          <div className="mt-1">
            <input
              className="relative w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary"
              aria-label="email input field"
              placeholder="email"
            />
            <div
              v-show="isValidEmail == false && isSent == false"
              className="absolute ml-0.5 text-sm text-red-500"
            >
              Please enter a valid email address
            </div>
          </div>
        </div>

        <div>
          <label className="text-projectDark text-sm">Message</label>
          <div className="mt-1">
            <textarea
              rows={4}
              maxLength={500}
              className="w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-projectDark text-projectBackground caret-projectForeground shadow-sm focus:border-projectPrimary focus:outline-none focus:ring-projectPrimary"
              aria-label="message input field"
            />
          </div>
        </div>

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
    </div>
  );
};
