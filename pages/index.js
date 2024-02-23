import React from "react";
import Link from 'next/link';
const HomePage = ()=>{

    return(
        <div>
            <h1>Welcome to the Home page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">
                         About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                         Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default HomePage;