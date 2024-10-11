import { collection, addDoc } from "firebase/firestore";
import { db } from ".";
import axios from "axios";

export const logPageLoad = async (componentName: string) => {
  try {
    // Fetch visitor's IP address
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    const ipAddress = ipResponse.data.ip;

    // Fetch location data based on the IP address
    const locationResponse = await axios.get(
      `http://ip-api.com/json/${ipAddress}`
    );
    const { city, country } = locationResponse.data;

    // Log data to Firestore
    await addDoc(collection(db, "pageLoads"), {
      componentName,
      ipAddress,
      location: {
        city,
        country,
      },
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error logging page load: ", error);
  }
};
