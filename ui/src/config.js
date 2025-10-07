let agenticConfig = {
  apiBaseUrl: '',
  merchantId: '',
  chatTheme: 'light',
  env: 'production',
  customCssUrl: null
};

export function loadAgenticConfig(overrides = {}) {
  agenticConfig = { ...agenticConfig, ...overrides };

  // Environment fallback
  if (import.meta.env.VITE_API_BASE_URL)
    agenticConfig.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (import.meta.env.VITE_ENV)
    agenticConfig.env = import.meta.env.VITE_ENV;

  // Global variable fallback
  if (window.AgenticAIConfig) {
    agenticConfig = { ...agenticConfig, ...window.AgenticAIConfig };
  }

  // Inject CSS
  if (agenticConfig.customCssUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = agenticConfig.customCssUrl;
    document.head.appendChild(link);
  } else {
    import('./styles/agentic-default.css');
  }

  // Load theme variables (CSS vars)
  import('./styles/theme-vars.css');

  return agenticConfig;
}

export function getAgenticConfig() {
  return agenticConfig;
}
