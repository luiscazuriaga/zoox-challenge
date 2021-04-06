const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const logger = (
  type: string,
  namespace: string,
  message: string,
  object?: unknown
): void => {
  console[type](
    `[${getTimeStamp()}] [${type.toUpperCase()}] [${namespace}] ${message}`,
    object || ""
  );
};

export default logger;
