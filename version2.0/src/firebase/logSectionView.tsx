import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from ".";

export const logSectionView = async (
  sessionId: string,
  sectionName: string
) => {
  // Log data to Firestore
  try {
    const docRef = doc(db, "siteVisits", sessionId);
    await updateDoc(docRef, {
      sectionsVisited: arrayUnion(sectionName),
    });
  } catch {
    console.error("Error logging section view");
  }
};
