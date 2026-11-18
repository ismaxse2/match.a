const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': ['eslint'],
  '*.{css,json,md,mdx}': ['prettier --check'],
};

export default lintStagedConfig;
