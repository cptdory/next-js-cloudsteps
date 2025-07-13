import Link from 'next/link';
export default function NavBar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar fixed border-b border-transparent backdrop-blur transition-all duration-50 w-full z-99 border-neutral-600/40 bg-black/80">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <img src="https://img1.wsimg.com/isteam/ip/e0b02d97-2d61-45fc-8661-84ba6f5d4cd1/blob-b59d32b.png/:/rs=w:207,h:68,cg:true,m/cr=w:207,h:68/qt=q:95" alt="" />
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal font-bold">
                            {/* Navbar menu content here */}
                            <li><Link href={"/"} className='hover:border-b-3 hover:border-yellow-300 hover:text-yellow-300 hover:bg-transparent bg-transparent border-b-3 border-transparent rounded-none'>Home</Link></li>
                            <li><a href="/#about-us" className='hover:border-b-3 hover:border-yellow-300 hover:text-yellow-300 hover:bg-transparent border-b-3 border-transparent rounded-none'>About Us</a></li>
                            <li><a className='hover:border-b-3 hover:border-yellow-300 hover:text-yellow-300 hover:bg-transparent border-b-3 border-transparent rounded-none'>Services</a></li>
                            <li><a className='hover:border-b-3 hover:border-yellow-300 hover:text-yellow-300 hover:bg-transparent border-b-3 border-transparent rounded-none'>Products</a></li>
                            <li><a className='hover:border-b-3 hover:border-yellow-300 hover:text-yellow-300 hover:bg-transparent border-b-3 border-transparent rounded-none'>Blogs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>HOME</a></li>
                    <li><a>ABOUT US</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>PRODUCTS</a></li>
                    <li><a>BLOGS</a></li>
                </ul>
            </div>
        </div>
    )
}