import React, { useEffect } from "react";
import { useState } from "react";
import DarkModeButton from "../../buttons/DarkModeButton";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../auth";
import LoginModal from "../../modals/LoginModal";
import RegistrationModal from "../../modals/RegistrationModal";
import { getAuth, signOut } from "firebase/auth";
// import LoginModal from "./loginModal";

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const [currentUser, setCurrentUser] = useState<null | any>(null);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
  };

  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((isUser) => {
      if (isUser != null) {
        setCurrentUser(isUser);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  console.log(currentUser);
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

        <div className=" flex gap-3">
          {currentUser == null ? (
            <>
              <a
                href="#"
                className="inline-flex px-2 py-1 gap-1 bg-[#BAA5D9] opacity-50 rounded-md items-center"
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
                className=" px-2 py-1 bg-[#BAA5D9] opacity-50 rounded-md"
                onClick={handleRegistrationClick}
              >
                Реєстрація
              </a>
            </>
          ) : (
            <>
              <Link to="/profile">Профіль</Link>
              <button onClick={handleSignOut}>Вийти</button>
            </>
          )}
        </div>
      </div>
      <LoginModal
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
      <RegistrationModal
        setShowRegistrationModal={setShowRegistrationModal}
        showRegistrationModal={showRegistrationModal}
      />
    </div>
  );
};

export default Header;
