import React from "react";
import { Alert, Button } from "antd";
import {
  ErrorResponse,
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from "react-router-dom";

type StatusHandler = (info: {
  error: ErrorResponse;
  params: Record<string, string | undefined>;
}) => React.ReactNode | null;

interface Props {
  defaultStatusHandler?: StatusHandler;
  statusHandlers?: Record<number, StatusHandler>;
  unexpectedErrorHandler?: (error: unknown) => React.ReactNode | null;
}

const getErrorMessage = (error: unknown) => {
  if (typeof error === "string") {
    return error;
  }

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  console.error("Unable to get error message for error", error);
  return "Unknown error";
};

const ErrorPage: React.FC<Props> = ({
  defaultStatusHandler = ({ error }) => (
    <Alert message={`${error.status} ${error.data}`} type="error" showIcon />
  ),
  statusHandlers,
  unexpectedErrorHandler = (error) => (
    <Alert message={getErrorMessage(error)} type="error" showIcon />
  ),
}) => {
  const error = useRouteError();
  const params = useParams();

  if (typeof document !== "undefined") {
    console.error(error);
  }

  const renderErrorMsg = () => {
    return isRouteErrorResponse(error) ? (
      <div>
        {(statusHandlers?.[error.status] ?? defaultStatusHandler)({
          error,
          params,
        })}
      </div>
    ) : (
      <div>{unexpectedErrorHandler(error)}</div>
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Alert
        message="Oops, something's not right."
        description="We're having trouble loading this page."
        type="error"
        showIcon
      />
      {renderErrorMsg()}
      <Button
        type="primary"
        onClick={() => window.location.reload()}
        style={{ marginTop: "10px" }}
      >
        Refresh Page
      </Button>
    </div>
  );
};

export default ErrorPage;
