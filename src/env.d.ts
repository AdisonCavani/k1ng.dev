declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SANITY_API_VERSION: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    SANITY_STUDIO_REVALIDATE_SECRET: string;
    GITHUB_PAT: string;
  }
}
