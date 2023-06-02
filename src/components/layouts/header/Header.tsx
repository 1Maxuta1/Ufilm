import React from "react";
import { useState } from "react";
import DarkModeButton from "../../buttons/DarkModeButton";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../auth";
// import LoginModal from "./loginModal";

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [loginNickname, setloginNickname] = useState("");

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(false);
    setValidationError(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation
    if (loginEmail.trim() === "" || password.trim() === "") {
      setValidationError(true);
      return;
    }

    // Handle login logic here

    // Reset form
    setLoginEmail("");
    setloginNickname("");
    setPassword("");
    setValidationError(false);
    setShowLoginModal(false);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform registration logic here
    // Reset form
    setLoginEmail("");
    setPassword("");
    setValidationError(false);
    setShowRegistrationModal(false);
  };

  return (
    <div id="header" className="header items-center h-15 rounded-t-2xl">
      <div className="flex gap-8 justify-around items-center">
        <DarkModeButton />
        <Link to="/">
          <img
            src="/images/icons/ufilm-website-favicon.png"
            className="w-14 h-14"
          />
        </Link>
        <div className="w-12">
          <a
            href="#"
            className="inline-flex gap-1 bg-[#BAA5D9] opacity-50 rounded-md items-center"
            onClick={handleLoginClick}
          >
            Вхід
            <svg
              className=""
              stroke="currentColor"
              fill="none"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1.2em"
              width="1.2em"
            >
              <path
                d="M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z"
                fill="currentColor"
              />
              <path
                d="M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.69599 6.0774L10.1042 4.6572L16.4951 10.9941L10.1582 17.385Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="#"
            className="bg-[#BAA5D9] opacity-50 rounded-md"
            onClick={handleRegistrationClick}
          >
            Реєстрація
          </a>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-8">
            <button
              className="h-6 w-6 bg-red-800 text-white rounded-full"
              onClick={closeModal}
            >
              <svg
                className="flex justify-center "
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7,7 L17,17 M7,17 L17,7"
                ></path>
              </svg>
            </button>
            <h2 className="text-2xl mb-4">Вхід на сайт</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="loginEmail">Логін або email</label>
                <input
                  type="text"
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              {validationError && (
                <p className="text-red-500 flex justify-start pb-4">
                  Неправильний Логін або пароль
                </p>
              )}
              <div className="flex items-center justify-between mb-4">
                <Link to="/recover-password" className="text-blue-500">
                  Забули пароль?
                </Link>
                <label htmlFor="rememberMe" className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  Запам'ятати мене
                </label>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Увійти
              </button>
            </form>
          </div>
        </div>
      )}
      {showRegistrationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-8">
            <button
              className="h-6 w-6 bg-red-800 flex justify-end text-white rounded-full"
              onClick={closeModal}
            ></button>
            <h2 className="text-2xl mb-4">Реєстрація на сайті</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="loginEmail">Ваш email</label>
                <input
                  type="text"
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="loginEmail">Ваш логін </label>
                <input
                  type="text"
                  id="loginNickname"
                  value={loginNickname}
                  onChange={(e) => setloginNickname(e.target.value)}
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              {validationError && (
                <p className="text-red-500 flex justify-start pb-4">
                  Неправильний логін або пароль
                </p>
              )}
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="rememberMe" className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />Я
                  погоджуюсь з правилами сайту
                </label>
              </div>
              <button
                onClick={AuthProvider}
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Зареєструватися
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
