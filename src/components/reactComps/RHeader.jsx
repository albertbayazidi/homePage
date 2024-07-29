import RToggleTheme from './RThemeToggle.jsx'


export default function RHeader(){
    return(
    <>
		<i id='currTheme' className='i-ri-moon-line'/>
		
			<button 
				onClick={(e)=>{RToggleTheme(e)}}
				>
				Trykk på meg 	
			</button>
    </>)
}