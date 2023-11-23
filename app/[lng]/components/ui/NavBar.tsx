import Link from 'next/link';
import {Button} from "@/components/ui/button";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-end mx-4 pb-3">
            <ul className="flex gap-2">
                <li>
                    <Link href="/"
                          className=" hover:underline">
                        <Button variant="outline">
                            첫번째 화면
                        </Button>
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link href="/second"
                          className=" hover:underline">
                        <Button variant="outline">
                            두번째 화면
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
