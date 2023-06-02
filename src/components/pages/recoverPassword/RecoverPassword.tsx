import { useState } from "react";
import { Link } from "react-router-dom";

const LoginModal = () => {
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
            Підтвердити
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
