import React, { SyntheticEvent, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { sendEmail } from "../../../utils/mail";
import theme from "../../../theme";
import { EmailJSResponseStatus } from "emailjs-com";
import { showToast } from "../../../utils/toast";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the changed field immediately
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    let newErrors = { ...errors };

    if (fieldName === "fullName") {
      if (!value.trim()) {
        newErrors.fullName = "שדה חובה.";
      } else if (!/^[\u0590-\u05FF\s]+$/.test(value)) {
        newErrors.fullName = "הקלד שם בעברית.";
      } else {
        newErrors.fullName = ""; // Clear error when valid
      }
    }

    if (fieldName === "phone") {
      if (!value.trim()) {
        newErrors.phone = "שדה חובה.";
      } else if (!/^(05[0-9]{8})$/.test(value)) {
        newErrors.phone = "הקלד מספר טלפון ישראלי.";
      } else {
        newErrors.phone = ""; // Clear error when valid
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    const isValid = validateForm();
    if (isValid) {
      const formElement = event.currentTarget as HTMLFormElement;
      try {
        showToast("success", "ההודעה נשלחה בהצלחה!");
        await sendEmail(formElement);
        setFormData({ fullName: "", phone: "" });
      } catch (error) {
        showToast("error", "אירעה שגיאה בעת שליחת ההודעה, אנא התקשרו אלינו");
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: "", phone: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "שדה חובה.";
      isValid = false;
    } else if (!/^[\u0590-\u05FF\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "הקלד שם בעברית.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "שדה חובה.";
      isValid = false;
    } else if (!/^(05[0-9]{8})$/.test(formData.phone)) {
      newErrors.phone = "הקלד מספר טלפון ישראלי. הקלד רק ספרות.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <Box
      sx={{
        mx: "auto",
        height: "auto",
        width: "100%",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      component="form" // Add this line to make it a form
      onSubmit={handleSubmit} // Add this line to handle form submission
    >
      {/* Full Name Field */}
      <Box sx={{ marginBottom: 3, width: "100%", mb: "3" }}>
        <TextField
          fullWidth
          label="שם"
          sx={{ textAlign: "right", color: theme.palette.primary.contrastText }}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          variant="standard"
          slotProps={{
            input: {
              sx: {
                borderRadius: "8px",
                textAlign: "right",
                color: theme.palette.primary.contrastText,
              },
            },
            inputLabel: {
              sx: {
                right: 0, // Position the label on the right
                transformOrigin: "top right", // Align label origin for RTL
                color: theme.palette.primary.contrastText,
              },
            },
            formHelperText: {
              sx: {
                position: "absolute",
                right: 0,
                top: "100%",
                color: "red", // Customize the error color
                fontSize: "0.875rem", // Customize the font size of the error message
              },
            },
          }}
        />
      </Box>

      {/* Phone Number Field */}
      <Box sx={{ marginBottom: 3, width: "100%" }}>
        <TextField
          fullWidth
          label="מספר טלפון"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          variant="standard"
          slotProps={{
            htmlInput: {
              inputMode: "numeric", // Ensures numeric keypad on mobile devices
              maxLength: 10, // Limit input to 10 characters
            },
            input: {
              sx: {
                borderRadius: "8px",
                textAlign: "right",
                color: theme.palette.primary.contrastText,
              },
            },
            inputLabel: {
              sx: {
                right: 0, // Position the label on the right
                transformOrigin: "top right", // Align label origin for RTL
                inputMode: "numeric", // Ensures numeric keypad on mobile devices
                maxLength: 10,
                color: theme.palette.primary.contrastText,
              },
            },
            formHelperText: {
              sx: {
                right: 0,
                top: "100%",
                textAlign: "right",
                color: "red", // Customize the error color
                fontSize: "0.875rem", // Customize the font size of the error message
              },
            },
          }}
        />
      </Box>

      {/* Submit Button */}
      <Box>
        <Button
          variant="contained"
          color={"inherit"}
          type="submit" // Change this to type="submit"
          sx={{ marginTop: "1vh" }}
        >
          שלח
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
