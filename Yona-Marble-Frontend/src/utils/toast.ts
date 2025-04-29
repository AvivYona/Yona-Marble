import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (types: "error" | "success", message: string) => {
  toast[types](message, {
    position: "bottom-center",
    autoClose: 3000,
    theme: "light",
    
  });
};
