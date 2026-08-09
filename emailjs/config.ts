import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: "service_ktakil2",
  templateId: "template_38uk32l",
  publicKey: "EqrP97mPBB1xghwOD",
};

export const sendContactEmail = async (data: Record<string, unknown>) => {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    data,
    EMAILJS_CONFIG.publicKey
  );
};
