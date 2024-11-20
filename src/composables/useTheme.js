import {ref} from 'vue'


const activeTheme = ref(localStorage.getItem('vue-note-theme') || 'light')


export default function useTheme(){
  const toggleTheme = () => {

    console.log('toggleTheme.................. click')
    activeTheme.value = activeTheme.value === 'light' ? 'dark' : 'light'


    if (activeTheme.value ==='dark') {
      document.body.classList.add('dark-theme')
    }else{
      document.body.classList.remove('dark-theme')
    }

    localStorage.setItem('vue-note-theme', activeTheme.value)
  }


  return {toggleTheme}
}