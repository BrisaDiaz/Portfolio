// app/theme-setter.js

;(function () {
  const themeKey = 'theme' // Clave de la cookie o localStorage
  const html = document.documentElement

  // Función para establecer el tema en el HTML
  function setTheme(theme) {
    html.setAttribute('data-theme', theme)
  }

  try {
    // 1. Intentar leer de localStorage (si la preferencia se guarda aquí también)
    //    Esto es útil para persistencia en el cliente sin depender solo de cookies
    const storedTheme = localStorage.getItem(themeKey)
    if (storedTheme) {
      setTheme(storedTheme)
      return // Si encontramos un tema en localStorage, lo usamos y salimos
    }

    // 2. Intentar leer de la cookie (para la primera carga/SSR)
    //    Parseamos las cookies manualmente ya que 'js-cookie' no está disponible tan temprano
    const cookieString = document.cookie
    const cookies = cookieString.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=')
      acc[name] = value
      return acc
    }, {})

    const cookieTheme = cookies[themeKey]
    if (cookieTheme) {
      setTheme(cookieTheme)
      // Opcional: si la cookie es la fuente, podrías querer actualizar localStorage para futuras cargas
      localStorage.setItem(themeKey, cookieTheme)
      return
    }

    // 3. Si no hay cookie ni localStorage, usar la preferencia del sistema
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const initialTheme = prefersDark ? 'dark' : 'light'
    setTheme(initialTheme)
    localStorage.setItem(themeKey, initialTheme) // Guardar para futuras cargas
  } catch (e) {
    // Fallback en caso de errores (ej. entornos sin acceso a DOM/localStorage)
    console.warn('Failed to set theme based on preferences', e)
    html.setAttribute('data-theme', 'dark') // Default fallback
  }
})()
