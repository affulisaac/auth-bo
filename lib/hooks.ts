import { showToast } from "@/components/Toast";
import { useCallback, useEffect, useRef, useState } from "react";
import { ApiResult, ModalActionType, UseModalActionsProps } from "./types";
import { performApiAction } from "./actions";
import { setSearchParam } from "./helpers";
import { FormikHelpers } from "formik";

export const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      showToast("Success", "Copied to clipboard", "success");
    } catch (error) {
      setCopied(false);
      if (error instanceof Error) {
        showToast(error.name, error.message, "error", Infinity);
      } else {
        showToast("Error", "Failed to copy text", "error", Infinity);
      }
    }
  };

  return { copied, copyToClipboard };
};

export const useFetchData = <T>({
  baseUrl,
  searchTerm,
  page,
  pageSize,
  cache,
}: {
  baseUrl: string;
  searchTerm?: string | null;
  page?: string | null;
  pageSize?: string | null;
  cache?: RequestCache;
}): {
  data: ApiResult<T> | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} => {
  const [data, setData] = useState<ApiResult<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const currentPage = useRef<number>(Number(page) || 1);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data: fetchedData, error: fetchError } =
        await performApiAction<T>({
          baseUrl,
          page: currentPage.current,
          pageSize: Number(pageSize),
          searchTerm,
          cache,
        });

      if (fetchError) {
        setError(fetchError);
        showToast("An error occurred", fetchError, "error", Infinity);
        setLoading(false);
        return;
      }

      if (fetchedData) {
        setData(fetchedData);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      showToast(
        "An error occurred",
        "An unexpected error occurred",
        "error",
        Infinity
      );
    } finally {
      setLoading(false);
    }
  }, [baseUrl, searchTerm, pageSize]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    currentPage.current = Number(page) || 1;
    fetchData();
  }, [fetchData, page]);

  return { data, loading, error, refetch };
};

export const useDeleteData = <T>({
  baseUrl,
}: {
  baseUrl: string;
}): {
  deleteData: (id: string) => Promise<void>;
  loading: boolean;
  error: string | null;
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteData = useCallback(
    async (id: string) => {
      setLoading(true);
      setError(null);

      try {
        const { error: deleteError } = await performApiAction<T>({
          baseUrl: `${baseUrl}/${id}`,
          type: "delete",
        });

        if (deleteError) {
          setError(deleteError);
          showToast("An error occurred", deleteError, "error", Infinity);
          setLoading(false);
          return;
        }

        showToast("Success", "Item deleted successfully", "success", Infinity);
      } catch (err) {
        setError("An unexpected error occurred");
        showToast(
          "An error occurred",
          "An unexpected error occurred",
          "error",
          Infinity
        );
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { deleteData, loading, error };
};

export const useCreateData = <T>(
  baseUrl: string
): {
  data: ApiResult<T> | null;
  loading: boolean;
  error: string | null;
  createRecord: (data: T) => Promise<void>;
} => {
  const [data, setData] = useState<ApiResult<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createRecord = useCallback(
    async (newRecord: T) => {
      setLoading(true);
      setError(null);

      try {
        const { data: createdData, error: createError } =
          await performApiAction<T>({
            baseUrl,
            type: "post",
            body: newRecord as Record<string, T>,
          });

        if (createError) {
          setError(createError);
          showToast("An error occurred", createError, "error", Infinity);
          return;
        }

        if (createdData) {
          setData(createdData);
          showToast(
            "Record created successfully",
            "Success",
            "success",
            Infinity
          );
        }
      } catch (err) {
        setError("An unexpected error occurred");
        showToast(
          "An error occurred",
          "An unexpected error occurred",
          "error",
          Infinity
        );
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { data, loading, error, createRecord };
};

export const useUpdateRecord = <T>(
  baseUrl: string
): {
  data: ApiResult<T> | null;
  loading: boolean;
  error: string | null;
  updateRecord: (id: string, updatedRecord: T) => Promise<void>;
} => {
  const [data, setData] = useState<ApiResult<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateRecord = useCallback(
    async (id: string, updatedRecord: T) => {
      setLoading(true);
      setError(null);

      try {
        const { data: updatedData, error: updateError } =
          await performApiAction<T>({
            baseUrl: `${baseUrl}/${id}`,
            type: "put",
            body: updatedRecord as Record<string, T>,
          });

        if (updateError) {
          setError(updateError);
          showToast("An error occurred", updateError, "error", Infinity);
          return;
        }

        if (updatedData) {
          setData(updatedData);
          showToast(
            "Record updated successfully",
            "Success",
            "success",
            Infinity
          );
        }
      } catch (err) {
        setError("An unexpected error occurred");
        showToast(
          "An error occurred",
          "An unexpected error occurred",
          "error",
          Infinity
        );
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { data, loading, error, updateRecord };
};

export const useModalSettings = <T>() => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [action, setAction] = useState<ModalActionType | null>(
    ModalActionType.Add
  );

  const openModal = (item: T | null, action: ModalActionType) => {
    setSelectedItem(action === ModalActionType.Add ? null : item);
    setAction(action);
    setSearchParam({ name: "modal_open", value: "true" });
  };

  return { selectedItem, action, openModal };
};

function hasIdProperty<T>(item: T): item is T & { id: string } {
  return !!item && typeof item === "object" && "id" in item;
}

export const useModalActions = <T, U>({
  selectedItem,
  createRecord,
  updateRecord,
  deleteData,
  refetch,
  creating,
  updating,
  deleting,
  errorCreating,
  errorUpdating,
  errorDeleting,
}: UseModalActionsProps<T, U>) => {
  const handleModalAction = useCallback(
    async (action: ModalActionType, values?: U, actions?: FormikHelpers<U>) => {
      const isSuccess = () =>
        !creating &&
        !errorCreating &&
        !updating &&
        !errorUpdating &&
        !deleting &&
        !errorDeleting;

      const actionMap: Record<ModalActionType, () => Promise<void>> = {
        [ModalActionType.Delete]: async () => {
          if (selectedItem && hasIdProperty(selectedItem)) {
            await deleteData(selectedItem.id);
          }
        },
        [ModalActionType.Add]: async () => {
          if (values) await createRecord(values);
        },
        [ModalActionType.Edit]: async () => {
          if (selectedItem && values && hasIdProperty(selectedItem)) {
            await updateRecord(selectedItem.id, values);
          }
        },
      };

      await actionMap[action]?.();

      if (isSuccess()) {
        actions?.setSubmitting(false);
        actions?.resetForm();
        refetch();
      }

      setSearchParam({ name: "modal_open", value: "false" });
    },
    [
      deleteData,
      createRecord,
      updateRecord,
      refetch,
      selectedItem,
      creating,
      errorCreating,
      updating,
      errorUpdating,
      deleting,
      errorDeleting,
    ]
  );

  return handleModalAction;
};
