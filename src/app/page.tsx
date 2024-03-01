import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
	return (
		<div className='w-full min-h-screen bg-bg-main flex justify-center'>
			<div className='w-[35rem] h-full flex flex-col mt-24'>
				<section className='mb-4 flex items-center gap-x-2'>
					<FontAwesomeIcon icon={faCircle} className='h-2 text-green' />
					<span className='text-white font-medium text-xs'>Online.</span>
				</section>
				<section className='text-[2.6rem] font-semibold'>
					<h1 className='text-white leading-10 tracking-wide'>
						Hey, I&apos;m <span>Maciek</span>
					</h1>
					<h1 className='bg-pink-gradient bg-clip-text text-transparent tracking-wide'>Frontend Developer.</h1>
				</section>
			</div>
		</div>
	);
}
