import { collection, addDoc } from "firebase/firestore";
import { db } from ".";
import axios from "axios";

export const logPageLoad = async (componentName: string) => {
  let ipAddress = "";
  let location = { city: "", country: "" };

  // Fetch visitor's IP address
  try {
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    ipAddress = ipResponse.data.ip;
  } catch {
    console.error("Error logging page load: 0");
  }

  // Fetch location data based on the IP address
  try {
    const locationResponse = await axios.get(
      `http://ip-api.com/json/${ipAddress}`
    );
    location = locationResponse.data;
  } catch {
    console.error("Error logging page load: 1");
  }

  // Log data to Firestore
  try {
    await addDoc(collection(db, "pageLoads"), {
      componentName,
      ipAddress,
      location,
      timestamp: new Date(),
    });
  } catch {
    console.error("Error logging page load: 2");
  }
};
