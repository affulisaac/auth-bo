"use server";

import { addParam, apiCall } from "@/lib/helpers";
import { HttpMethod } from "@/lib/types";
import { revalidatePath } from "next/cache";

const STATUS_CODE = [200, 201];

export const performApiAction = async <T>({
  baseUrl,
  page,
  pageSize,
  searchTerm,
  type,
  id,
  body,
  cache,
}: {
  baseUrl: string;
  page?: number;
  pageSize?: number;
  searchTerm?: string | null;
  type?: "get" | "put" | "delete" | "post";
  id?: string;
  body?: Record<string, T>;
  cache?: RequestCache;
}) => {
  let url = baseUrl;

  if (page !== undefined && pageSize !== undefined) {
    url += `?PageIndex=${page}&PageSize=${pageSize}`;
  }

  url = addParam("SearchTerm", searchTerm, url);

  if (id) {
    url = `${url}/${id}`;
  }


  const HTTP_METHODS = {
    get: HttpMethod.GET,
    put: HttpMethod.PUT,
    delete: HttpMethod.DELETE,
    post: HttpMethod.POST,
  };
  const method: HttpMethod = HTTP_METHODS[type ?? "get"];;

  const response = await apiCall<T>({
    url: url,
    method: method,
    body: type === "put" || type === "post" ? body : undefined,
    cache,
  });

  if (type !== "get") {
    revalidatePath("/");
  }

  return {
    data: response.data,
    message: response.message,
    error:
      response.code && !STATUS_CODE.includes(response.code)
        ? response.message
        : undefined,
  };
};
