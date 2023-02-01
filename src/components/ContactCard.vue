<script setup>
// Js
import { ref } from "vue";
import { db } from "../firebase/index.js";
import { doc, addDoc, collection } from "firebase/firestore";

// Components
import SvgHandler from "./SvgHandler.vue";
import { animate } from "motion";
import { Motion } from "motion/vue";

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

function EmailInput() {
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
  isAttempted.value = true;

  // Debug
  // const result = regex.test(email.value);
  const result = true;

  if (result == true) {
    isValidEmail.value = true;
    isSent.value = true;

    // await addDoc(collection(db, "websiteMessages"), {
    //   email: email.value,
    //   message: message.value,
    //   time: new Date(),
    // });
  } else {
    isValidEmail.value = false;

    await animate("#submitButton", { opacity: [0, 1] }, { at: 0, duration: 5 })
      .finish;
  }

  console.log("ContactCard button pressed!");
}
</script>

<template>
  <!-- ContactCard -->
  <div class="border-2 border-zinc-700/40 pb-8 pt-6 px-4 rounded-lg">
    <div class="space-y-6">
      <!-- Email section -->
      <div>
        <label for="email" class="text-gray-100 text-sm font-poppins"
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
          />
          <div
            v-if="isValidEmail == false && isSent == false"
            class="absolute ml-0.5 font-poppins text-sm text-red-500"
          >
            Please enter a valid email address
          </div>
        </div>
      </div>

      <!-- Message section -->
      <div>
        <label for="comment" class="text-gray-100 text-sm font-poppins"
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
          ></textarea>
        </div>
      </div>

      <!-- Submit button -->
      <div v-if="isSent == false">
        <button
          id="submitButton"
          @click="SendMessage()"
          class="flex w-full justify-center items-center rounded-md border border-transparent bg-bteal-50 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-bteal-50 focus:outline-none focus:ring-2 focus:ring-bteal-50 focus:ring-offset-2"
        >
          <p class="mr-3 py-0.5 font-poppins text-sm">Send Message</p>

          <SvgHandler name="MailIcon" />
        </button>
      </div>
      <div v-else>
        <button
          class="flex w-full justify-center items-center rounded-md border border-transparent bg-bpink-50 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-bpink-50 focus:outline-none focus:ring-2 focus:ring-bpink-50 focus:ring-offset-2"
        >
          <p class="mr-3 py-0.5 font-poppins text-sm">Message Sent!</p>

          <SvgHandler name="SentIcon" />
        </button>
      </div>
    </div>
  </div>
</template>
