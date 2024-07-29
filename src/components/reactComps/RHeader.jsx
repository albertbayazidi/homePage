import RToggleTheme from './RThemeToggle.jsx'


export default function RHeader(){
    return(
    <div>
		<i id='currTheme' className='i-line-md:moon-rising-alt-loop w-1em h-1em'/>
			<button 
				onClick={(e)=>{RToggleTheme(e)}}
				>
				Trykk på meg 	
			</button>
    </div>)
}