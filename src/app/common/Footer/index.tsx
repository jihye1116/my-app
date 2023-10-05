import Image from "next/image";

export default function Footer() {

    const footerList = [
        {
            title: "GET IN TOUCH",
            list: ["010-XXXX-XXXX"]
        },
        {
            title: "Follow Me",
            list: ["instagram", "facebook"]
        },
        {
            title: "About Me",
            list: ["010-XXXX-XXXX"]
        },
    ]

    return (
      <footer className="px-24 bg-lightGray">
      <div className="mx-auto max-w-7xl">
          <div className="pt-[70px] pb-[77px] flex gap-16 flex-col md:flex-row md:gap-40">
          <div className="flex flex-col gap-5">
              <Image src="/Logo.svg" alt="로고" width={218} height={52} />
              <span className="text-lg">Digitaldastin by Dastin Darmawan</span>
          </div>

          <div className="flex gap-24">

        {            
            footerList.map(({ title, list }) => (
                <div className="flex flex-col gap-6" key={title}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <ul className="flex flex-col gap-5 text-lg">
                    {list.map((content) => (
                    <li key={content}>{content}</li>
                    ))}
                </ul>
                </div>
            ))
        }

          </div>
          </div>
      </div>
      <div className="py-[26px] border-t border-lightGray">
          © 2022 Digitaldastin
      </div>
      </footer>
    )
  }
  