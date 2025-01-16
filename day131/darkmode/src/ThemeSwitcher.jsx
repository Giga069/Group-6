import {Moon, Sun} from "lucide-react"
import {useState} from "react"
export default function ThemeSwitcher() {
    const[theme, setTheme] = useState(false)

    const handleDrkMode = () =>{
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setTheme(true)
      console.log('dark')
    }

    const handleLightMode = () =>{
      document.documentElement.classList.remove('dark')
      setTheme(false)      
    }

    return(
      <div className="relative cursor-pointer">
        {!theme && (<Sun onClick={() => handleDrkMode()} className="absolute top-0"/>)}
        {theme && (<Moon onClick={() => handleLightMode()} className="absolute top-0" color="#fff" />)}  
      </div>
    )

}