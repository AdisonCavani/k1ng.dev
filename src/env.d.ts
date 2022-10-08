/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
