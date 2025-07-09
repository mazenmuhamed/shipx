import * as React from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * By default, the breakpoint is set to `768px` for mobile devices.
 * You can change this value to suit your needs.
 * This hook will return true if the screen width is less than the breakpoint.
 * It will also update the value when the screen is resized.
 */
export function useBreakPoint(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < breakpoint)
    return () => mql.removeEventListener('change', onChange)
  }, [breakpoint])

  return !!isMobile
}
