import { IoIosSend } from "react-icons/io";

export const FormArea = () => {
  return (
    <div className="mx-auto w-full max-w-xs border-2 bg-neutralForground border-neutralBorder pb-8 pt-6 px-4 rounded-lg">
      <div className="space-y-6">
        <div>
          <label className="text-textDark text-sm">Your email address</label>
          <div className="mt-1">
            <input
              className="relative w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-textDark text-neutralBackgound caret-neutralForground shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
              aria-label="email input field"
              placeholder="email"
            />
            <div
              id="emailValidate"
              v-show="isValidEmail == false && isSent == false"
              className="absolute ml-0.5 text-sm text-red-500"
            >
              Please enter a valid email address
            </div>
          </div>
        </div>

        <div>
          <label className="text-textDark text-sm">Message</label>
          <div className="mt-1">
            <textarea
              rows={4}
              maxLength={500}
              className="w-full text-sm appearance-none rounded-md border px-3 py-2 placeholder-textDark text-neutralBackgound caret-neutralForground shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
              aria-label="message input field"
            />
          </div>
        </div>

        <button
          className={`
            relative w-full z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg text-sm border-[1px] 
            border-primary px-4 py-1.5
            text-textLight transition-all duration-500
            
            before:absolute before:inset-0
            before:-z-10 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-secondary
            before:transition-transform before:duration-1000
            before:content-[""]
    
            hover:scale-105 hover:text-textBright
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-95`}
        >
          <div className="flex items-center space-x-2">
            <p>Send Message</p>
            <IoIosSend className="h-5 w-5" />
          </div>
        </button>
      </div>
    </div>
  );
};
