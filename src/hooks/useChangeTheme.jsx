import React, { useEffect, useState } from 'react'

const useChangeTheme = () => {
  const [changeTheme, setChangeTheme] = useState(false)

  useEffect(() => {
    if (changeTheme) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [changeTheme])

  return { changeTheme, setChangeTheme }
}

export default useChangeTheme