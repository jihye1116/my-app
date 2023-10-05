import Image from "next/image";
import CoffeeIcon from "../../../components/Icons/CoffeeIcon";
import Link from "next/link"
import Button from "../../../components/atoms/Button";
export default function Header() {
  return (
    <header className="px-24 py-4 bg-lightGray drop-shadow-sm">
      <div className="flex flex-col items-center gap-4 mx-auto max-w-7xl lg:flex-row lg:gap-0 lg:justify-between">
        <Link href="/">
          <Image src="/Logo.svg" alt="로고" width={300} height={300}/>
        </Link>
        <div className="flex items-center gap-12 font-bold">
          <Link href="/">Github</Link>
          <Link href="https://portfolio.bssm.io">about Me</Link>
          
          <Button>
            <CoffeeIcon />
            <span>Coffe Chat with Me</span>
          </Button>

        </div>
      </div>
    </header>
  );
}
