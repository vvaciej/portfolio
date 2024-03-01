import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div className='bg-bg-img w-full h-full z-[-1] object-cover brightness-[0.25] fixed'></div>
			<div className='w-full min-h-screen flex justify-center'>
				<div className='w-[35rem] h-full flex flex-col mt-24'>
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
					<section className='mt-8 border-b-[1px] pb-4 border-zinc-600'>
						<p className='text-zinc-400 text-[15.4px] leading-6'>
							Hi, I am Maciek, passionate front-end developer from Poland, student of computer science with knowledge of
							React and Next. Ready to create innovative web solutions!
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
