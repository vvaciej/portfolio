'use client';

import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faSass } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import skillsImagesArr from '../data/skills-data.js';

export default function Home() {
	const [isLoaded, setLoaded] = useState<boolean>(false);
	const [hoveringFilmsPlayer, setHoveringFilmsPlayer] = useState<boolean>(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<>
			<div className='bg-bg-img w-full h-full z-[-1] object-cover brightness-[0.25] fixed'></div>
			<div className='w-full h-max flex justify-center overflow-hidden'>
				<div
					className={`w-[32rem] h-max flex flex-col mt-24 relative transition-all pb-24 ${
						isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[1rem] opacity-0'
					}`}>
					<section className='mb-3 flex items-center gap-x-2'>
						<FontAwesomeIcon icon={faCircle} className='h-2 text-green' />
						<span className='text-white font-medium text-xs'>Online.</span>
					</section>
					<section className='text-[2.6rem] select-none mb-3'>
						<h1 className='text-zinc-100 leading-10 tracking-wide font-bold w-max inline-block'>Hey, I&apos;m&nbsp;</h1>
						<div className='text-zinc-100 leading-10 tracking-wide font-semibold w-max inline relative'>
							<h1 className='inline-block relative z-10 w-[9.65rem]'>Maciek</h1>
							<div className="after:content-[''] after:h-3 after:w-[110%] after:bg-blue-purple-mix after:absolute after:left-[-9px] after:top-9 after:z-[-1]"></div>
							<div className="after:content-[''] after:h-full after:w-2 after:bg-[#050505] after:z-0 after:absolute after:left-[-9px] after:top-0 after:rotate-[9deg]"></div>
							<div className="after:content-[''] after:h-full after:w-2 after:bg-[#050505] after:z-0 after:absolute after:right-[-10px] after:top-0 after:rotate-[9deg]"></div>
						</div>
						<h1 className='bg-pink-gradient bg-clip-text text-transparent tracking-wide font-bold leading-10'>
							Frontend Developer.
						</h1>
					</section>
					<section className='mt-4 text-white'>
						<ul className='flex gap-x-3 text-sm'>
							<li>
								<a
									className='py-[11px] px-5 bg-btns rounded-3xl flex items-center gap-x-2 hover:scale-110 hover:bg-slate-100 hover:text-zinc-900 font-medium transition-all'
									href='https://github.com/vvaciej'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faGithub} className='h-4' />
									Github
								</a>
							</li>
							<li>
								<a
									href='https://discord.com/users/vvaciej'
									target='_blank'
									rel='noopener noreferrer'
									className='py-[11px] px-5 bg-btns rounded-3xl flex items-center gap-x-2 hover:scale-110 hover:bg-slate-100 hover:text-zinc-900 font-medium transition-all'>
									<FontAwesomeIcon icon={faDiscord} className='h-4' />
									Discord
								</a>
							</li>
							<li>
								<a
									href={'mailto:maciejskok2004@gmail.com'}
									className='py-[11px] px-5 bg-btns rounded-3xl flex items-center gap-x-2 hover:scale-110 hover:bg-slate-100 hover:text-zinc-900 font-medium transition-all'>
									<FontAwesomeIcon icon={faEnvelope} className='h-4' />
									Mail
								</a>
							</li>
						</ul>
					</section>
					<div className='mt-8 border-b-[1px] pb-4 border-zinc-600'>
						<p className='text-zinc-400 text-[15.4px] leading-6'>
							Hi, I am Maciek, passionate front-end developer from Poland, student of computer science with knowledge of
							React and Next. Ready to create innovative web solutions!
						</p>
					</div>
					<div className='text-white border-b-[1px] border-zinc-600 pb-8'>
						<h1 className='text-2xl mt-5 font-medium'>Projects</h1>
						<section className='mt-4 grid grid-cols-2'>
							<a
								href='https://www.vvaciej.codes'
								target='_blank'
								rel='noopener noreferrer'
								className='p-6 py-5 w-full bg-gray-46 rounded-lg cursor-pointer'
								onMouseOver={() => setHoveringFilmsPlayer(true)}
								onMouseLeave={() => setHoveringFilmsPlayer(false)}>
								<section className='flex w-full justify-between'>
									<h1 className='font-medium text-[16.8px]'>Films Player</h1>
									<ArrowUpRightIcon className={`${hoveringFilmsPlayer ? 'block' : 'hidden'} h-5`} />
								</section>
								<p className='mt-1 text-[14px] text-zinc-400 leading-6'>
									First bigger project, website is designed to watch popular films fully for free also there&apos;s
									opportunity to login by test email and password.
								</p>
								<section className='flex items-center gap-x-2 mt-4'>
									<img src='/icons/icons8-sass-50.png' className='h-5' alt='icon for sass' />
									<img
										src='https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png'
										className='h-5'
										alt='icon for nextjs'
									/>
									<img src='/icons/icons8-typescript-50.png' className='h-5' alt='icon for typescript' />
									<img src='/icons/icons8-tailwindcss-48.png' className='h-5' alt='icon for tailwindcss' />
									<img src='/icons/icons8-api-50.png' className='h-5' alt='icon for api' />
								</section>
							</a>
						</section>
					</div>
					<div>
						<h1 className='text-white text-2xl mt-5 font-medium'>Tech</h1>
						<section className='mt-4 grid grid-cols-3 gap-4'>
							{skillsImagesArr.map((skill: any, index: number) => (
								<div
									className='min-h-32 max-h-32 p-6 py-5 w-full bg-gray-46 rounded-lg cursor-pointer flex items-center flex-col gap-y-3 justify-center hover:brightness-75 transition-all'
									key={index}>
									<img src={skill.source} alt='image for one of language skill' className='h-10' />
									<h2 className='text-sm text-white font-medium'>{skill.name}</h2>
								</div>
							))}
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
