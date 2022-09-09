import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserSigninForm } from "../component/user.component";
import { SigninUserProvider } from "../providers/user.provider";
import { appName } from "./app.feature";

export const UserSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    SigninUserProvider(email, password)
      .then((response) => {
        let data = response.data;
        localStorage.setItem("TOKEN", `JWT ${data.token}`);
        localStorage.setItem("EMAIL", data.email);
        localStorage.setItem("IS_LOGIN", true);
        navigate(appName.ecommerce + "/profile");
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

export const UserProfile = () => {
  const [userMeta, setUserMeta] = useState({});

  useEffect(() => {
    setUserMeta({
      email: localStorage.getItem("EMAIL"),
      token: localStorage.getItem("TOKEN"),
    });
    console.log("ini kepanggil bro!");
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">{JSON.stringify(userMeta)}</div>
        </div>
      </div>
    </>
  );
};
