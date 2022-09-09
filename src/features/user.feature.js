import { useState } from "react";
import { UserSigninForm } from "../component/user.component";
import { SigninUserProvider } from "../providers/user.provider";

export const UserSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    SigninUserProvider(email, password)
      .then((response) => {
        let data = response.data;
        localStorage.setItem("TOKEN", `JWT ${data.token}`);
        localStorage.setItem("EMAIL", data.email);
        localStorage.setItem("IS_LOGIN", true);
      })
      .catch((err) => alert(err));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const nilai = e.target.value;

    if (key === "email") {
      setEmail(nilai);
    } else if (key === "password") {
      setPassword(nilai);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Signin Gramedio.com</h5>
                <UserSigninForm
                  email={email}
                  password={password}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
