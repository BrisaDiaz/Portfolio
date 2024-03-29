'use client'

import { forwardRef, useEffect, useState, useId } from 'react'
import styles from './styles.module.css'
import ModeButton from '@/components/ModeButton'
import MenuButton from '@/components/MenuButton'
import Menu from '@/components/Menu'
import { useParams, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useWindowSize } from '@hooks'
import { HeaderData } from '@types'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  colorMode: 'dark' | 'light'
  data: HeaderData | null
}
function Header(props: HeaderProps, ref?: React.LegacyRef<HTMLElement>) {
  const { colorMode = 'dark', data, ...other } = props
  const params = useParams()
  const router = useRouter()
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
    Cookies.set('theme', colorMode === 'dark' ? 'light' : 'dark')
    router.refresh()
  }

  return (
    <header {...other} ref={ref} className={`${styles['header']}`}>
      <div className={styles['header-inner']}>
        <ModeButton
          className="tooltip tooltip--right"
          data-tooltip="Switch theme"
          onClick={handleToggle}
          mode={colorMode}
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
            aria-haspopup="menu"
            aria-label="navigation menu"
            role="button"
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
