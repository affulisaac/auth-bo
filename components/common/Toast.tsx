"use client";

import React from "react";
import toast from "react-hot-toast";

const notificationStyles = {
  success: {
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    borderColor: "border-green-500",
  },
  error: {
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-500",
  },
  warning: {
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
    borderColor: "border-orange-500",
  },
  loading: {
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    borderColor: "border-yellow-500",
  },
} as const;

type ToastType = keyof typeof notificationStyles;

interface ToastComponentProps {
  title: string;
  description: string;
  type: ToastType;
}

const ToastComponent: React.FC<ToastComponentProps & { id: string }> = ({
  title,
  description,
  type,
  id,
}) => {
  const { bgColor, textColor, borderColor } = notificationStyles[type];

  return (
    <div
      className={`max-w-xl w-full ${bgColor} shadow-lg rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-l-4 ${borderColor}`}
      style={{ height: "80px" }}
    >
      <div className={`flex-1 w-0 p-4 ${borderColor}`}>
        <div className="flex items-center">
          <div className="ml-3 flex-1">
            <p className={`text-lg font-semibold ${textColor}`}>{title}</p>
            <p className={`mt-1 text-base ${textColor}`}>{description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(id)}
          className="p-4 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

let loadingToastId: string | null = null;

export const showToast = (
  title: string,
  description: string,
  type: ToastType,
  duration: number = 4000
) => {
  toast.custom(
    (t: { id: string }) => (
      <ToastComponent
        title={title}
        description={description}
        type={type}
        id={t.id}
      />
    ),
    { duration: duration }
  );
};

export const showLoadingToast = (title: string) => {
  if (!loadingToastId) {
    loadingToastId = toast.custom(
      (t: { id: string }) => (
        <ToastComponent
          description={title}
          title={title}
          type="loading"
          id={t.id}
        />
      ),
      { duration: Infinity }
    );
  }
};

export const clearLoadingToast = () => {
  if (loadingToastId) {
    toast.dismiss(loadingToastId);
    loadingToastId = null;
  }
};

export default ToastComponent;
