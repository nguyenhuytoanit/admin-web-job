import { useSnackbar } from "notistack";
import { useCallback } from "react";

const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const successNotify = useCallback(
    (message, options = {}) => {
      enqueueSnackbar(message, { variant: "success", autoHideDuration: 2500, ...options });
    },
    [enqueueSnackbar]
  );
  const errorNotify = useCallback(
    (message, options = {}) => {
      enqueueSnackbar(message, { variant: "error", autoHideDuration: 2500, ...options });
    },
    [enqueueSnackbar]
  );
  const warningNotify = useCallback(
    (message, options = {}) => {
      enqueueSnackbar(message, { variant: "warning", autoHideDuration: 2500, ...options });
    },
    [enqueueSnackbar]
  );
  const infoNotify = useCallback(
    (message, options = {}) => {
      enqueueSnackbar(message, { variant: "info", autoHideDuration: 2500, ...options });
    },
    [enqueueSnackbar]
  );
  const closeNotify = useCallback(() => {
    closeSnackbar();
  }, [closeSnackbar]);
  return {
    successNotify,
    errorNotify,
    warningNotify,
    infoNotify,
    closeNotify,
  };
};
export { useNotify };
