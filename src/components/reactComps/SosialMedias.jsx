import siteConfig from '../../site-config.js'

export default function SoialMedia(){

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
