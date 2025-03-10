import emailjs from "emailjs-com";

export const sendEmail = async (formElement: HTMLFormElement) => {
  await emailjs
    .sendForm(
      import.meta.env.VITE_MAIL_SERVICE_ID,
      import.meta.env.VITE_MAIL_TEMPLATE_ID,
      formElement,
      import.meta.env.VITE_MAIL_USER_ID
    )
    .then(
      () => {
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
};
