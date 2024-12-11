import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import "./Login.css";
import { useState, useEffect } from "react";
function Login() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length >= 10 && inputValue.includes("@")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputValue]);

  const [PassValue, setPassValue] = useState("");
  const [isValide, setIsValide] = useState(false);

  useEffect(() => {
    if (PassValue.length >= 8 ) {
      setIsValide(true);
    } else {
      setIsValide(false);
    }
  }, [PassValue]);
  const handleInputeChange = (e) => {
    setPassValue(e.target.value);
  };

  return (
    <>
      <div className="index">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/655f618561650bef5e9ab23f/releases/656a31b89b783cd1211b1802/img/rectangle-2.svg"
            />
            <div className="div" />
            <div className="text-wrapper">Fitness</div>
            <img
              className="element-f"
              alt="Element f"
              src="https://cdn.animaapp.com/projects/655f618561650bef5e9ab23f/releases/656a31b89b783cd1211b1802/img/1000-f-296326521-xnoqyf43riupmka6rlxw6oeorgstclmz-removebg-previ@2x.png"
            />
            <div className="text-wrapper-2">Login in</div>

            <input
              type="text"
              className="inputemail"
              name="mail"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <p
              className="Validate"
              style={
                isValid
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "lightpink" }
              }
            >
              {isValid ? "Valid Email" : "Invalid Email"}
            </p>

            <input
              type="text"
              className="inputpass"
              name="pass"
              placeholder="Password"
              value={PassValue}
              onChange={handleInputeChange}
            />
            <p
              className="Validate2"
              style={
                isValide
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "lightpink" }
              }
            >
              {isValide ? "Valid Password" : "Invalid Password"}
            </p>
            <Link to="/Home">
              <button className="primary-button">
                <div className="text-wrapper-3">Login</div>
              </button>
            </Link>

            <img
              className="removebg"
              alt="Removebg"
              src="https://cdn.animaapp.com/projects/655f618561650bef5e9ab23f/releases/656a31b89b783cd1211b1802/img/ca55pture-removebg-preview-1.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
