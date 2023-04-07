import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-gray-800 text-white">
            <nav className="flex items-center justify-between px-4 py-2 md:py-4">
                <div className="logo text-xl font-bold">
                    <Link href="/">Logo</Link>
                </div>
                <ul className="hidden md:flex md:items-center md:justify-center md:flex-1 md:mx-4">
                    <li>
                        <Link href="/" className="px-3 py-2 hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="px-3 py-2 hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="px-3 py-2 hover:text-gray-300">
                          Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className="px-3 py-2 hover:text-gray-300">
                           FAQ
                        </Link>
                    </li>
                </ul>
                <div className="auth-buttons flex items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign in
                    </button>
                </div>
            </nav>
        </header>
    );
}
