const standardCodes = {
  "400": "BAD_REQUEST",
  "401": "UNAUTHORIZED",
  "403": "FORBIDDEN",
  "404": "RESOURCE_NOT_FOUND",
  "422": "UNPROCESSABLE_ENTITY"
};

export default function createRestError(statusCode, message, code) {
  code = code || standardCodes[statusCode];
  return {
    statusCode,
    message,
    code
  };
}