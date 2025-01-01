import { ApiCallParams, ApiResponse } from "./types";

export async function apiCall<T>({
  url,
  method,
  body,
  cache,
}: ApiCallParams): Promise<ApiResponse<T>> {
  const BASE_API_URL = process.env.BASE_API_URL!;

  const headers: HeadersInit = {
    "Content-Type":
      body instanceof FormData ? "multipart/form-data" : "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
    body: body instanceof FormData ? body : JSON.stringify(body),
    cache: cache ?? "default",
  };

  try {
    const response = await fetch(`${BASE_API_URL}${url}`, options);

    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return {
        message: "No Content",
        code: 204,
        data: null,
        subCode: "0",
        errors: null,
      };
    }

    const results = (await response.json()) as ApiResponse<T>;

    return {
      message: results.message ?? "Success",
      code: results.code ?? 200,
      data: results.data ?? null,
      subCode: results.subCode ?? "0",
      errors: results.errors ?? null,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("API Call Error:", errorMessage);

    return {
      message: errorMessage,
      code: 500,
      data: null,
      subCode: "0",
      errors: error,
    };
  }
}

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const debounce = (
  func: (...args: any[]) => void,
  wait: number
): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
};

export const formatDate = (date: Date, addTime?: boolean) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
    ...(addTime && { hour: "numeric", minute: "numeric", second: "numeric" }),
  });
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const trimText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const setSearchParam = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(name, value);
  history.pushState(null, "", "?" + urlParams.toString());
};

export const addParam = (
  key: string,
  value: string | null | undefined,
  url: string
): string => {
  if (!value) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}`;
};

export const isDateString = (str: string): boolean => {
  if (str.length < 10) return false;
  const parsedDate = Date.parse(str);
  return !isNaN(parsedDate) && !isNaN(new Date(parsedDate).getTime());
};
