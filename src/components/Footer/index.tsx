import Image from "next/image";

export default function Footer() {
    return (
      <footer className="px-24 bg-lightGray">
      <div className="mx-auto max-w-7xl">
          <div className="pt-[70px] pb-[77px] flex gap-40">
          <div className="flex flex-col gap-5">
              <Image src="/Logo.svg" alt="로고" width={218} height={52} />
              <span className="text-lg">Digitaldastin by Dastin Darmawan</span>
          </div>

          <div className="flex gap-24">
              <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
              <ul className="flex flex-col gap-5 text-lg">
                  <li>010-XXXX-XXXX</li>
                  <li>demo@gmail.com</li>
              </ul>
              </div>
          </div>
          </div>
      </div>
      <div className="py-[26px] border-t border-lightGray">
          © 2022 Digitaldastin
      </div>
      </footer>
    )
  }
  