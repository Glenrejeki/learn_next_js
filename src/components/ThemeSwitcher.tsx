"use client"
import { useEffect, useState } from "react"



function ThemeSwitcher() {
    const [dark, setDark] = useState(false)

    useEffect(()=>{
      const saveTheme = localStorage.getItem('theme')
      if(saveTheme === 'dark-mode') {
        setDark(true)
        document.body.classList.add('dark-mode')
      }
    }, []) 


    useEffect(()=> {
      if (dark){
        document.body.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('theme','')
      }
    })

  return (
    <div>
        <button id="theme-switcher" className="theme-switcher" onClick={()=>setDark(!dark)}>Ganti tema</button>

    </div>
  )
}

export default ThemeSwitcher
