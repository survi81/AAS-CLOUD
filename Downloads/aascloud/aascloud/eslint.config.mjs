import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended rules
  ...compat.extends("next/core-web-vitals"),
  
  // Custom rules
  {
    rules: {
      // Disable the 'no-unescaped-entities' rule to allow apostrophes in JSX
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;

