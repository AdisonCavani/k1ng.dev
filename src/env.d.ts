declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_SANITY_API_VERSION: string;
    PUBLIC_SANITY_DATASET: string | undefined;
    PUBLIC_SANITY_PROJECT_ID: string;
    GITHUB_PAT: string;
  }
}
