import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_u6op9ls',
  templateId: 'template_kjrkboi', 
  publicKey: 'VyG6mRGf3pAIfwSNl'
};

// Send Lead Email
export const sendLeadEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: 'interiorsbypreyashi@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      project_location: formData.projectLocation,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString()
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, result };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
};

// Send Subscriber Email  
export const sendSubscriberEmail = async (email) => {
  try {
    const templateParams = {
      to_email: 'techsupersta4@gmail.com',
      subscriber_email: email,
      subscription_date: new Date().toLocaleDateString(),
      subscription_time: new Date().toLocaleTimeString()
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      'subscriber_template_id', // Create separate template
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, result };
  } catch (error) {
    console.error('Subscriber email failed:', error);
    return { success: false, error };
  }
};
