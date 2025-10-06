import { TErrorSources, TGenericErrorResponse } from "../interface/error";

export const handleDuplicateError = (err: Error): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extactedMessage = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extactedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};
