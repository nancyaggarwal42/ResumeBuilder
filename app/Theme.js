import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeMode } from './store/themeSlice'

function Theme({
    size='lg',
    className=''
}){
    
    const isDarkMode = useSelector(state => state.theme.isDarkMode)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[isDarkMode])
    
    return(
        <div>
            <button onClick={()=>dispatch(onChangeMode())} className={`py-2 px-3 rounded-full bg-slate-100 dark:bg-slate-700 duration-400 ${className}`}>
                <FontAwesomeIcon icon={faLightbulb} size={size} />
            </button>
        </div>
    )
}

export default  Theme