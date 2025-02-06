<script setup>
// Js
import { ref, onMounted } from "vue";
import { db } from "../firebase/index.js";
import { addDoc, collection } from "firebase/firestore";
import { animate } from "motion";

// Components
import SvgHandler from "./SvgHandler.vue";

const appWidth = ref(null);

// Regex for email validation
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regex = new RegExp(re);

// Form values
const email = ref(null);
const message = ref(null);

// States
const isAttempted = ref(false);
const isSent = ref(false);
const isValidEmail = ref(true);
const buttonText = ref("Submit Message");

function EmailInput() {
  // Called on every event but after if submit button was pressed once
  if (isAttempted.value == true) {
    const result = regex.test(email.value);

    if (result == true) {
      isValidEmail.value = true;
    } else {
      isValidEmail.value = false;
    }
  }
}

async function SendMessage() {
  try {
    // Message has already been sent
    if (isSent.value == true) {
      console.log('Message already sent, preventing duplicate submission');
      return;
    }

    // Button was pressed
    isAttempted.value = true;

    // Check if email is valid
    const result = regex.test(email.value);

    if (result == true) {
      console.log('Email validation passed, proceeding with submission');
      
      if (!message.value) {
        console.error('Message is empty');
        return;
      }

      isValidEmail.value = true;

      // Prepare message data
      const messageData = {
        email: email.value,
        message: message.value,
        time: new Date(),
      };
      console.log('Preparing to send message:', messageData);

      // Add to Firestore
      const docRef = await addDoc(collection(db, "websiteMessages"), messageData);
      console.log('Message successfully saved to Firestore with ID:', docRef.id);

      // Update UI
      isSent.value = true;
      buttonText.value = "Message Sent!";

      animate(
        "#submitButton",
        { backgroundSize: ["150% 150%", "0% 0%"] },
        { duration: 0.5 }
      );
      animate("#buttonText", { opacity: [0, 1] }, { duration: 0.5 });
    } else {
      console.log('Email validation failed');
      isValidEmail.value = false;

      animate(
        "#emailValidate",
        {
          transform: [
            "translateX(0)",
            "translateX(-6px) rotateY(-9deg)",
            "translateX(5px) rotateY(7deg)",
            "translateX(-3px) rotateY(-5deg)",
            "translateX(2px) rotateY(3deg)",
            "translateX(0)",
          ],
        },
        {
          offset: [0, 0.065, 0.185, 0.315, 0.435, 0.5],
          duration: 1,
        }
      );
    }
  } catch (error) {
    console.error('Error sending message:', error);
    buttonText.value = "Error - Try Again";
  }
}

onMounted(() => {
  // Set app dimensions on mount and on browser window resize
  appWidth.value = window.innerWidth;

  window.addEventListener("resize", () => {
    appWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <!-- ContactCard -->
  <div
    :class="{
      'border-2 border-zinc-700/40 pb-8 pt-6 px-4 rounded-lg': true,
      'min-w-[25rem]': appWidth > 425,
    }"
  >
    <div class="space-y-6">
      <!-- Email section -->
      <div>
        <label for="email" class="text-zinc-200 text-sm font-poppins"
          >Email address</label
        >
        <div class="mt-1">
          <input
            v-model="email"
            :disabled="isSent == true"
            @input="EmailInput()"
            :class="{
              'relative w-full font-poppins text-sm appearance-none rounded-md border px-3 py-2 placeholder-zinc-200 shadow-sm focus:border-bteal-50 focus:outline-none focus:ring-bteal-50': true,
              'border-gray-300': isSent == false,
              'border-zinc-700/40': isSent == true,
            }"
            aria-label="email input field"
          />
          <div
            id="emailValidate"
            v-show="isValidEmail == false && isSent == false"
            class="absolute ml-0.5 font-poppins text-sm text-red-500"
          >
            Please enter a valid email address
          </div>
        </div>
      </div>

      <!-- Message section -->
      <div>
        <label for="comment" class="text-zinc-200 text-sm font-poppins"
          >Message</label
        >
        <div class="mt-1">
          <textarea
            v-model="message"
            rows="4"
            :disabled="isSent == true"
            :class="{
              'w-full font-poppins text-sm appearance-none rounded-md border px-3 py-2 placeholder-zinc-200 shadow-sm focus:border-bteal-50 focus:outline-none focus:ring-bteal-50': true,
              'border-gray-300': isSent == false,
              'border-zinc-700/40': isSent == true,
            }"
            aria-label="message input field"
          ></textarea>
        </div>
      </div>

      <!-- Submit button -->
      <button
        id="submitButton"
        aria-label="submitButton"
        @click="SendMessage()"
        :class="{
          'bg-bteal-50 bg-[length:150%,150%] hover:from-teal-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-bteal-50 focus:ring-offset-2':
            isSent == false,
          'bg-bpink-50 bg-[length:0%,0%] cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-bpink-50 focus:ring-offset-2':
            isSent == true,
          'flex w-full justify-center items-center rounded-md border border-transparent py-2 px-4 bg-gradient-to-r from-bteal-50 to-bteal-50 bg-no-repeat bg-center text-sm font-medium text-zinc-200 shadow-sm': true,
        }"
      >
        <p id="buttonText" class="mr-3 py-0.5 font-poppins text-sm">
          {{ buttonText }}
        </p>

        <SvgHandler v-if="isSent == false" name="MailIcon" />
        <SvgHandler v-else name="SentIcon" />
      </button>
    </div>
  </div>
</template>
