import logo from "../../assets/whatsapp.svg";
import style from "./WhasappIcon.module.css";
// WhatsAppIcon.tsx

export const WhatsappIcon = () => {
  const text = "שלום%20אשמח%20לקבוע%20פגישת%20התייעצות";
  return (
    <a
      href={`https://wa.me/972505470523?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "90px",
        left: "20px",
        width: "50px",
        height: "50px",
        zIndex: 9999,
      }}
    >
      <img className={style.icon} src={logo} aria-label="WhatsApp" />
    </a>
  );
};
