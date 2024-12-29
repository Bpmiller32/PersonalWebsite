import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from ".";

export const logLinksClicked = async (
  sessionId: string,
  linkClicked: string
) => {
  // Log link click data to Firestore
  try {
    const docRef = doc(db, "siteVisits", sessionId);
    await updateDoc(docRef, {
      linksClicked: arrayUnion(linkClicked),
    });
  } catch {
    // console.error("Error logging link clicked");
  }
};
