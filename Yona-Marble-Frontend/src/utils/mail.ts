import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export const sendEmail = async (
  formElement: HTMLFormElement
): Promise<EmailJSResponseStatus> => {
  return await emailjs.sendForm(
    import.meta.env.VITE_MAIL_SERVICE_ID,
    import.meta.env.VITE_MAIL_TEMPLATE_ID,
    formElement,
    import.meta.env.VITE_MAIL_USER_ID
  );
};
