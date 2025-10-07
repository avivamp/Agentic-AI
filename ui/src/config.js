let agenticConfig = {
  apiBaseUrl: '',
  merchantId: '',
  chatTheme: 'light',
  env: 'production'
};

export function loadAgenticConfig(configOverrides = {}) {
  // Prefer inline overrides first (merchant init)
  agenticConfig = { ...agenticConfig, ...configOverrides };

  // Fallback to env variables (if injected at build)
  if (import.meta.env.VITE_API_BASE_URL)
    agenticConfig.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (import.meta.env.VITE_ENV)
    agenticConfig.env = import.meta.env.VITE_ENV;

  // Check global window variable (for CDN script usage)
  if (window.AgenticAIConfig) {
    agenticConfig = { ...agenticConfig, ...window.AgenticAIConfig };
  }

  return agenticConfig;
}

export function getAgenticConfig() {
  return agenticConfig;
}
