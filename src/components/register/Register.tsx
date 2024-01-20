import { useState } from "react";
import register from "../../assets/images/register.jpg";
import Button from "../button/Button";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    number: null,
    isAgreed: false,
  });

  const [formError, setFormError] = useState({
    nameError: false,
    emailError: false,
    usernameError: false,
    numberError: false,
    checkError: false,
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "on") {
      setFormData((prev) => {
        return { ...prev, isAgreed: e.target.checked };
      });
      setFormError((prev) => {
        return {
          ...prev,
          checkError: false,
        };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
      const key = e.target.name + "Error";
      setFormError((prev) => {
        return {
          ...prev,
          [key]: false,
        };
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    if (!formData.name.trim().length) {
      isValid = false;
      setFormError((prev) => {
        return { ...prev, nameError: true };
      });
    }
    if (!formData.email.trim().length) {
      isValid = false;
      setFormError((prev) => {
        return { ...prev, emailError: true };
      });
    }
    if (!formData.username.trim().length) {
      isValid = false;
      setFormError((prev) => {
        return { ...prev, usernameError: true };
      });
    }
    if (!formData.number) {
      isValid = false;
      setFormError((prev) => {
        return { ...prev, numberError: true };
      });
    }
    if (!formData.isAgreed) {
      isValid = false;
      setFormError((prev) => {
        return { ...prev, checkError: true };
      });
    }

    if (isValid) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  return (
    <div className={styles.registerPage}>
      <img src={register} className={styles.registerImage} />
      <div className={styles.formSection}>
        <h2 className={styles.registerHeading}>Super app</h2>
        <h4 className={styles.registerSubHeading}>Create your new account</h4>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.registerInput}
            placeholder="Name"
            name="name"
            onChange={handleFormData}
          />
          {formError.nameError && (
            <p className={styles.error}>Name cannot be empty</p>
          )}
          <input
            type="text"
            className={styles.registerInput}
            placeholder="UserName"
            name="username"
            onChange={handleFormData}
          />
          {formError.usernameError && (
            <p className={styles.error}>UserName cannot be empty</p>
          )}
          <input
            type="email"
            className={styles.registerInput}
            placeholder="Email"
            name="email"
            onChange={handleFormData}
          />
          {formError.emailError && (
            <p className={styles.error}>Email cannot be empty</p>
          )}
          <input
            type="number"
            className={styles.registerInput}
            placeholder="Mobile"
            name="number"
            onChange={handleFormData}
          />
          {formError.numberError && (
            <p className={styles.error}>Number cannot be empty</p>
          )}
          <div className={styles.checkInput}>
            <input type="checkbox" name="isAgreed" onChange={handleFormData} />
            <span className={styles.checkText}>
              Share my registration data with Superapp
            </span>
          </div>
          {formError.checkError && (
            <p className={styles.error}>Please check the box to register</p>
          )}
          <Button
            height="40px"
            width="380px"
            backgroundColor="#72DB73"
            type="submit"
          >
            SIGN UP
          </Button>
        </form>
        <div className={styles.tnc}>
          By clicking on Sign up you agree to Superapp{" "}
          <span className={styles.tncHighlight}>
            Terms and Conditions of Use
          </span>
        </div>
        <div className={styles.tnc}>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className={styles.tncHighlight}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
