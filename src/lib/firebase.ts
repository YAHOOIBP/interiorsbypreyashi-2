import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG2R1qndbYsJot-MstTwgtaIdw-bjUprM",
  authDomain: "pmdesign-96bb0.firebaseapp.com",
  projectId: "pmdesign-96bb0",
  storageBucket: "pmdesign-96bb0.firebasestorage.app",
  messagingSenderId: "38509101664",
  appId: "1:38509101664:web:fdb030e2d94f880f1cf905",
  measurementId: "G-Y09T2VK5J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };

// Function to generate unique lead ID
export const generateLeadId = async (): Promise<string> => {
  try {
    const leadsRef = collection(db, 'leads');
    const q = query(leadsRef, orderBy('createdAt', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);
    
    let nextNumber = 1;
    if (!querySnapshot.empty) {
      const lastDoc = querySnapshot.docs[0];
      const lastId = lastDoc.data().leadId;
      const lastNumber = parseInt(lastId.split('-')[1]);
      nextNumber = lastNumber + 1;
    }
    
    return `IBP-${nextNumber.toString().padStart(4, '0')}`;
  } catch (error) {
    console.error('Error generating lead ID:', error);
    return `IBP-${Date.now().toString().slice(-4)}`;
  }
};

// Function to submit lead
export const submitLead = async (leadData: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}) => {
  try {
    const leadId = await generateLeadId();
    const docRef = await addDoc(collection(db, 'leads'), {
      leadId,
      ...leadData,
      createdAt: new Date(),
      status: 'new'
    });
    
    return { success: true, leadId, docId: docRef.id };
  } catch (error) {
    console.error('Error submitting lead:', error);
    return { success: false, error };
  }
};