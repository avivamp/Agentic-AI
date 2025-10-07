
/**
 * AgenticAI UI Config Management
 *
 * Precedence: user overrides > global var > env > defaults
 * Config is immutable after first load.
 * All config options are validated.
 */

const DEFAULT_CONFIG = Object.freeze({
  apiBaseUrl: '',
  merchantId: '',
  chatTheme: 'light',
  env: 'production',
  customCssUrl: null
});

let _agenticConfig = null;

function validateConfig(cfg) {
  if (!cfg.apiBaseUrl || typeof cfg.apiBaseUrl !== 'string') {
    throw new Error('[AgenticAI Config] apiBaseUrl is required and must be a string.');
  }
  if (!cfg.merchantId || typeof cfg.merchantId !== 'string') {
    throw new Error('[AgenticAI Config] merchantId is required and must be a string.');
  }
  if (!['light', 'dark'].includes(cfg.chatTheme)) {
    throw new Error('[AgenticAI Config] chatTheme must be "light" or "dark".');
  }
  if (!['production', 'development', 'staging'].includes(cfg.env)) {
    throw new Error('[AgenticAI Config] env must be one of production, development, staging.');
  }
  if (cfg.customCssUrl && typeof cfg.customCssUrl !== 'string') {
    throw new Error('[AgenticAI Config] customCssUrl must be a string or null.');
  }
}

/**
 * Loads and freezes the AgenticAI config. Only runs once.
 * @param {object} overrides - User-supplied config overrides
 * @returns {object} config
 */
export function loadAgenticConfig(overrides = {}) {
  if (_agenticConfig) return _agenticConfig;

  // 1. Start with defaults
  let config = { ...DEFAULT_CONFIG };

  // 2. Environment variables (Vite)
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.VITE_API_BASE_URL) config.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    if (import.meta.env.VITE_ENV) config.env = import.meta.env.VITE_ENV;
  }

  // 3. Global variable (window.AgenticAIConfig)
  if (typeof window !== 'undefined' && window.AgenticAIConfig) {
    config = { ...config, ...window.AgenticAIConfig };
  }

  // 4. User overrides
  config = { ...config, ...overrides };

  // 5. Validation
  validateConfig(config);

  // 6. Inject CSS (custom or default)
  if (config.customCssUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = config.customCssUrl;
    document.head.appendChild(link);
  } else {
    import('./styles/agentic-default.css');
  }
  import('./styles/theme-vars.css');

  _agenticConfig = Object.freeze(config);
  return _agenticConfig;
}

/**
 * Returns the loaded AgenticAI config (must call loadAgenticConfig first)
 */
export function getAgenticConfig() {
  if (!_agenticConfig) throw new Error('AgenticAI config not loaded. Call loadAgenticConfig() first.');
  return _agenticConfig;
}
