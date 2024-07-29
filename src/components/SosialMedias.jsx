import siteConfig from '../site-config.js'
import { isDark } from './store.js';

const handleNewDarkFilePath = (isDark, DarkPath, LightPath) =>{
	isDark.subscribe((dark) => {
		const merryElement = document.getElementById("merry");
		if (merryElement) {
			if (dark) {
				merryElement.src = DarkPath;
			} else {
				merryElement.src = LightPath;
			}
		}
	});
}

export default function SoialMedia(){
	
	const Darkpath = "/goingmerry.white.svg"
	const Lightpath = "/goingmerry.black.svg"

	handleNewDarkFilePath(isDark,Darkpath,Lightpath)

	return(
		<div>
				{siteConfig.socialLinks.map((link,index) => (
					<a
					key={index}
					aria-label={link.text}
					href={link.href}
					target="_blank"
					className="prose-link ml-1"
					>
						<i className={link.icon + " size-5"} />
						{link.text}
						</a>
				))}

				<a className="prose-link ml-1">
					<img
						src="/goingmerry.white.svg"
						alt=""
						height="30"
						width="30"
						id="merry"
						className="mb-2 inline-block"/>
						
					webring
				</a>
		</div>
	)
}