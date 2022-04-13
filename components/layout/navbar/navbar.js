import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
import {
	AiOutlineUser,
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineDown,
	AiOutlineSearch,
} from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import Logo from 'public/assets/logo-cultured-kid.svg'
import Portal from 'HOC/portal'
import ProfileDropdown from './profile-dropdown'

function Navbar() {
	const [showPortal, setshowPortal] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	const [showSearchbar, setShowSearchbar] = useState(false)

	const mobileMenu = (
		<div className=' w-screen h-screen bg-black  top-0 right-0 left-0 z-20 p-6 text-white font-Vollkorn flex flex-col content-evenly fixed md:hidden animate-fadein'>
			<div className='flex justify-end p-3'>
				<button
					className='outline-hidden'
					onClick={() => setshowPortal(!showPortal)}
				>
					<AiOutlineClose className='w-8 h-8' />
				</button>
			</div>
			<div className='h-1/2 flex justify-center content-center '>
				<ul className='list-none text-center flex flex-col justify-evenly'>
					<li className='text-2xl active:underline'>
						<Link href='/'>Paintings</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Drawings</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Sculptures</Link>
					</li>
					<li className='text-2xl active:underline'>
						<Link href='/'>Artists</Link>
					</li>
				</ul>
			</div>
			{!showSearchbar && (
				<div className='flex justify-evenly py-3 '>
					<button onClick={() => setShowSearchbar(true)}>
						<IoIosSearch className='w-5 h-5' />
					</button>
					<Link passHref href='/cart'>
						<a>
							<BsCart2 className='w-5 h-5' />
						</a>
					</Link>
					<button
						className='flex '
						onClick={() => setShowDropdown(!showDropdown)}
					>
						<AiOutlineUser className='w-5 h-5 ' />
						<AiOutlineDown className='w-4 h-3 my-auto text-gray-500 mt-1' />
					</button>
				</div>
			)}

			{showDropdown && <ProfileDropdown />}
			{showSearchbar && (
				<div className='px-4 py-2 border border-white shadow-sm flex align-baseline justify-between animate-fade-in-down  mx-auto'>
					<button
						className='p-1 my-auto'
						onClick={() => setShowSearchbar(false)}
					>
						<AiOutlineClose className='w-5 h-5 text-stone-500' />
					</button>
					<input
						type='text'
						placeholder='Enter art name'
						className='py-2 px-2 outline-none bg-black'
					/>
					<button className='p-1 my-auto'>
						<AiOutlineSearch className='w-5 h-5 text-stone-500' />
					</button>
				</div>
			)}
		</div>
	)
	return (
		<>
			<nav className='p-6 font-Vollkorn'>
				<div className='flex justify-between max-w-screen-2xl p-3'>
					<div className='md:w-1/5 my-auto'>
						<Link passHref href='/'>
							<a>
								<Image src={Logo} alt='logo'></Image>
							</a>
						</Link>
					</div>
					{showPortal && <Portal>{mobileMenu}</Portal>}
					<div className='hidden md:flex justify-evenly my-auto w-1/2 py-2 text-lg '>
						<Link passHref href='/'>
							Paintings
						</Link>
						<Link passHref href='/'>
							Drawings
						</Link>
						<Link passHref href='/'>
							Sculptures
						</Link>
						<Link passHref href='/'>
							Artists
						</Link>
					</div>
					{!showSearchbar && (
						<>
							<div className='hidden md:flex w-1/5  my-auto  py-3 '>
								<ul className='w-full md:flex  justify-evenly py-1'>
									<li>
										<button onClick={() => setShowSearchbar(true)}>
											<IoIosSearch className='w-5 h-5' />
										</button>
									</li>
									<li>
										<Link passHref href='/cart'>
											<a>
												<BsCart2 className='w-5 h-5' />
											</a>
										</Link>
									</li>
									<li
										onMouseEnter={() => setShowDropdown(true)}
										onMouseLeave={() => setShowDropdown(false)}
									>
										<button className='flex relative'>
											<AiOutlineUser className='w-5 h-5 ' />
											<AiOutlineDown className='w-4 h-3 my-auto text-gray-500 mt-1' />
										</button>
										{showDropdown && <ProfileDropdown />}
									</li>
								</ul>
							</div>
							<div className='md:hidden flex items-center'>
								<button
									className='outline-hidden mobile-menu-button'
									onClick={() => setshowPortal(!showPortal)}
								>
									<AiOutlineMenu className='h-6 w-6' />
								</button>
							</div>
						</>
					)}
					{showSearchbar && (
						<div className='hidden  px-2 py-2 border border-stone-600 shadow-sm md:flex align-baseline animate-fade-in-down '>
							<button
								className='p-1 my-auto'
								onClick={() => setShowSearchbar(false)}
							>
								<AiOutlineClose className='w-5 h-5 text-stone-500' />
							</button>
							<input
								type='text'
								placeholder='Enter art name'
								className='p-2 outline-none '
							/>
							<button className='p-1 my-auto'>
								<AiOutlineSearch className='w-5 h-5 text-stone-500' />
							</button>
						</div>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
