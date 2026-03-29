import type { CodegenConfig } from '@graphql-codegen/cli';
import { resolve } from 'path';
import * as dotenv from 'dotenv';

// Tự động nạp biến môi trường từ file .env (Để Lão đại chạy lệnh gọn nhẹ nhất)
dotenv.config({ path: resolve(__dirname, '.env') });

const config: CodegenConfig = {
  overwrite: true,
  // Sử dụng biến môi trường đã được nạp
  schema: process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL || 'http://localhost:1337/graphql',
  documents: ['graphql/**/*.graphql'],
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
