import logo from "../../assets/whatsapp.svg";
import style from "./WhasappIcon.module.css";
// WhatsAppIcon.tsx

export const WhatsappIcon = () => {
  const text = "שלום%20אני%20מעוניין%20במידע%20נוסף";
  return (
    <a
      href={`https://wa.me/972505470523?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "90px",
        left: "20px",
        zIndex: 9999,
      }}
    >
      <img className={style.icon} src={logo} aria-label="WhatsApp" />
    </a>
  );
};
