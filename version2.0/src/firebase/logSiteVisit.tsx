import { collection, addDoc } from "firebase/firestore";
import { db } from ".";
import axios from "axios";

export const logSiteVisit = async () => {
  let ipAddress = "";
  let location = { city: "", country: "" };

  // Fetch visitor's IP address
  try {
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    ipAddress = ipResponse.data.ip;
  } catch {
    console.error("Error logging site visit: 0");
  }

  // Fetch location data based on the IP address
  try {
    const locationResponse = await axios.get(
      `http://ip-api.com/json/${ipAddress}`
    );
    location = locationResponse.data;
  } catch {
    console.error("Error logging site visit: 1");
  }

  // Log data to Firestore
  try {
    const docRef = await addDoc(collection(db, "siteVisits"), {
      sectionsVisited: [],
      ipAddress,
      location,
      timestamp: new Date(),
    });

    return docRef.id;
  } catch {
    console.error("Error logging site visit: 2");
  }
};
