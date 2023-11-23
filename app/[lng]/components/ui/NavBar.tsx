import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {HiChartPie, HiMiniTableCells} from "react-icons/hi2";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-end mx-4 pb-3">
            <ul className="flex gap-2">
                <li>
                    <Link href="/"
                          className=" hover:underline">
                        <Button variant="outline" className="flex flex-row justify-center items-center space-x-1">
                            <HiMiniTableCells fontSize={20}/>
                            <p>
                                첫번째 화면
                            </p>
                        </Button>
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link href="/second"
                          className=" hover:underline">
                        <Button variant="outline" className="flex flex-row justify-center items-center space-x-1">
                            <HiChartPie fontSize={20}/>
                            <p>
                                두번째 화면
                            </p>
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
