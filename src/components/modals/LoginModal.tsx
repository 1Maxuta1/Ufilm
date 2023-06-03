import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createFBUser } from "../../utils/createFBUser";
import { createFirestoreUser } from "../../utils/createFirestoreUser";
import { login } from "../../utils/login";

interface ILoginModal {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<boolean>;
}

const LoginModal = ({ showLoginModal, setShowLoginModal }: ILoginModal) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      login(values.email, values.password);
      formik.resetForm();
      setShowLoginModal(false);
    },
  });

  return showLoginModal ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-8">
        <button
          className="h-6 w-6 bg-red-800 text-white rounded-full"
          onClick={() => setShowLoginModal(false)}
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
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="loginEmail">Логін або email</label>
            <input
              type="text"
              id="loginEmail"
              {...formik.getFieldProps("email")}
              className="w-full border-gray-300 border rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="w-full border-gray-300 border rounded-md px-3 py-2"
            />
          </div>
          {formik.errors.password && (
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
  ) : null;
};

export default LoginModal;
