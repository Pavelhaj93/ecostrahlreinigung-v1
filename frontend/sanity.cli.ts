/**
 * Sanity CLI Configuration
 * Required by `sanity typegen generate` (runs on predev/prebuild) since sanity 5.8.
 * Learn more: https://www.sanity.io/docs/help/configuring-typegen-in-sanity-cli-config
 */

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  typegen: {
    path: './sanity/**/*.{ts,tsx,js,jsx}',
    schema: '../studio/schema.json',
    generates: './sanity.types.ts',
    overloadClientMethods: true,
  },
})
