import Link from 'next/link';
import {Button} from "@/components/ui/button";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-end mx-4">
            <ul className="flex gap-2">
                <li>
                    <Button variant="outline">
                        <Link href="/"
                              className=" hover:underline">
                            첫번째 화면
                        </Link>
                    </Button>
                </li>
                <li className="ml-auto">
                    <Button variant="outline">
                        <Link href="/second"
                              className=" hover:underline">
                            두번째 화면
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
