import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, where } from "firebase/firestore";

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

// Function to generate unique subscription ID
export const generateSubscriptionId = async (): Promise<string> => {
  try {
    const subscriptionsRef = collection(db, 'newsletters');
    const q = query(subscriptionsRef, orderBy('createdAt', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);
    
    let nextNumber = 1;
    if (!querySnapshot.empty) {
      const lastDoc = querySnapshot.docs[0];
      const lastId = lastDoc.data().subscriptionId;
      if (lastId) {
        const lastNumber = parseInt(lastId.split('-')[1]);
        nextNumber = lastNumber + 1;
      }
    }
    
    return `SUB-${nextNumber.toString().padStart(4, '0')}`;
  } catch (error) {
    console.error('Error generating subscription ID:', error);
    return `SUB-${Date.now().toString().slice(-4)}`;
  }
};

// Function to submit newsletter subscription
export const submitSubscription = async (subscriptionData: {
  email: string;
  source?: string;
}) => {
  try {
    // Check if email already exists
    const subscriptionsRef = collection(db, 'newsletters');
    const emailQuery = query(subscriptionsRef, where('email', '==', subscriptionData.email.toLowerCase()));
    const existingSubscriptions = await getDocs(emailQuery);
    
    if (!existingSubscriptions.empty) {
      return { 
        success: false, 
        error: 'This email is already subscribed to our newsletter!' 
      };
    }

    // Generate subscription ID
    const subscriptionId = await generateSubscriptionId();
    
    // Add new subscription
    const docRef = await addDoc(subscriptionsRef, {
      subscriptionId,
      email: subscriptionData.email.toLowerCase(),
      source: subscriptionData.source || 'website',
      createdAt: new Date(),
      status: 'active',
      subscribedAt: new Date().toISOString(),
    });
    
    return { 
      success: true, 
      subscriptionId, 
      docId: docRef.id,
      message: 'Successfully subscribed to newsletter!'
    };
  } catch (error) {
    console.error('Error submitting subscription:', error);
    return { 
      success: false, 
      error: 'Failed to subscribe. Please try again later.' 
    };
  }
};

// Function to unsubscribe from newsletter
export const unsubscribeFromNewsletter = async (email: string) => {
  try {
    const subscriptionsRef = collection(db, 'newsletters');
    const emailQuery = query(subscriptionsRef, where('email', '==', email.toLowerCase()));
    const subscriptions = await getDocs(emailQuery);
    
    if (subscriptions.empty) {
      return { 
        success: false, 
        error: 'Email not found in subscription list.' 
      };
    }

    // Update status to inactive instead of deleting
    const subscriptionDoc = subscriptions.docs[0];
    await addDoc(collection(db, 'newsletters'), {
      ...subscriptionDoc.data(),
      status: 'unsubscribed',
      unsubscribedAt: new Date().toISOString(),
      updatedAt: new Date()
    });
    
    return { 
      success: true,
      message: 'Successfully unsubscribed from newsletter.'
    };
  } catch (error) {
    console.error('Error unsubscribing:', error);
    return { 
      success: false, 
      error: 'Failed to unsubscribe. Please try again later.' 
    };
  }
};