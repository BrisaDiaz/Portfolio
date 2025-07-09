// ui/Header/index.tsx
'use client' // Asegúrate de que este componente sea un Client Component

import { forwardRef, useEffect, useState, useId } from 'react'
import styles from './styles.module.css'
import ModeButton from '@/components/ModeButton'
import MenuButton from '@/components/MenuButton'
import Menu from '@/components/Menu'
import { useParams } from 'next/navigation'
import Cookies from 'js-cookie' // Sigue siendo útil para setear la cookie
import { useWindowSize } from '@hooks'
import { HeaderData } from '@types'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  colorMode: 'dark' | 'light' // Esto se convierte más en un valor inicial/default
  data: HeaderData | null
}

function Header(props: HeaderProps, ref?: React.LegacyRef<HTMLElement>) {
  const { data, ...other } = props
  const params = useParams()

  // El estado interno para el tema ahora maneja la UI del Header
  // y refleja el estado actual del tema.
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>(() => {
    // Inicializar el estado desde localStorage o la preferencia del sistema
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return props.colorMode // Fallback para SSR inicial
  })

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsMenuOpen((state) => !state)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    closeMenu()
  }, [params])

  const menuID = useId()
  const menuButtonID = useId()
  const windowSize = useWindowSize()

  const isMdScreen =
    windowSize?.width == undefined ? true : windowSize?.width >= 768

  function handleToggle() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    // 1. Actualiza el atributo data-theme en el <html> inmediatamente
    document.documentElement.setAttribute('data-theme', newTheme)

    // 2. Guarda la preferencia en localStorage para persistencia rápida
    localStorage.setItem('theme', newTheme)

    // 3. Opcional: Guarda la preferencia en una cookie para que el SSR la recoja
    //    Esto es redundante para el *flicker* en sí, pero útil para SEO/SSR.
    Cookies.set('theme', newTheme)

    // 4. Actualiza el estado local del componente
    setCurrentTheme(newTheme)
  }

  return (
    <header {...other} ref={ref} className={`${styles['header']}`}>
      <div className={styles['header-inner']}>
        <ModeButton
          className='tooltip tooltip--right'
          data-tooltip='Switch theme'
          onClick={handleToggle}
          mode={currentTheme}
        />

        {isMenuOpen ? (
          <div className={styles['backdrop']} onClick={closeMenu} />
        ) : (
          <></>
        )}
        {isMdScreen ? (
          <></>
        ) : (
          <MenuButton
            onClick={toggleMenu}
            isOpen={isMenuOpen}
            aria-haspopup='menu'
            aria-label='navigation menu'
            role='button'
            aria-expanded={isMenuOpen}
            className={styles['menu-button']}
            aria-controls={menuID}
            id={menuButtonID}
          />
        )}
        <Menu
          onClose={closeMenu}
          className={styles['menu']}
          id={menuID}
          links={data?.menu_links || []}
          {...(isMdScreen
            ? {}
            : {
                'aria-labelledby': menuButtonID,
                'data-open': isMenuOpen,
                'aria-orientation': 'vertical',
              })}
        />
      </div>
    </header>
  )
}

export default forwardRef(Header)
