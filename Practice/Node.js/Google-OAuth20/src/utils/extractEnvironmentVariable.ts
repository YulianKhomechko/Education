interface IEnvironmentVariables {
  PORT: string;
  DB_URL: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  COOKIE_KEY: string;
}

export function extractEnvironmentVariable(key: keyof NodeJS.ProcessEnv & keyof IEnvironmentVariables): string {
  const value = process.env[key];

  if (value === undefined) {
    const message = `The environment variable "${key}" does not exist".`;

    throw new Error(message);
  }

  return value;
}
