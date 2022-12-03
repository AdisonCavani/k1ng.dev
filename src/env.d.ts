declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_SANITY_API_VERSION: string;
    PUBLIC_SANITY_DATASET: string;
    PUBLIC_SANITY_PROJECT_ID: string;
    SANITY_STUDIO_REVALIDATE_SECRET: string;
    GITHUB_PAT: string;
  }
}
