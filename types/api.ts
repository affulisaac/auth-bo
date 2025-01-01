export type ApiResponse<T> = {
    data: T | null;
    error: string | null;
    status: number;
    message: string
  };
  
  export type RequestConfig = {
    headers?: HeadersInit;
    cache?: RequestCache;
    tags?: string[];
    revalidate?: number;
  };
  