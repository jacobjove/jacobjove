export const printError = (error: any) => {
  if (error.networkError?.result?.errors) {
    error.networkError.result.errors.forEach(
      (error: {
        message: string;
        extensions: { code: string; exception: { stacktrace: string[] } };
      }) => {
        console.error(error.message);
        console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
      }
    );
  } else {
    console.error(error);
    typeof alert !== "undefined" && alert(error);
  }
};
