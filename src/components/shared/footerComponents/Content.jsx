const { default: Link } = require("next/link")


export const InternalLinks = () => {

    const Content1 = [
        { lablel: 'Internal Links', url: '/' },
        { lablel: 'Documentaries', url: '/' },
        { lablel: 'Themes', url: '/' },
        { lablel: 'Chrome casts', url: '/' },
    ]

    return (
        <>
            <div className="flex flex-col md:gap-4 gap-2">
                {
                    Content1.map((item, index) => (
                        <Link href={item.url} key={index} >
                            <h1 className={`${index === 0 && 'font-semibold text-lg md:pb-4 pb-2 text-black'} sm:text-lg text-base text-darkGray hover:text-black`} >{item.lablel}</h1>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export const EnterPrise = () => {

    const Content2 = [
        { lablel: 'Enterprise', url: '/' },
        { lablel: 'Download Chrome Browser', url: '/' },
        { lablel: 'Chrome Browser for', url: '/' },
        { lablel: 'Chrome Browser Devices', url: '/' },
        { lablel: 'ChromeOS', url: '/' },
        { lablel: 'Google Cloud', url: '/' },
        { lablel: 'Google Workspace', url: '/' },
    ]

    return (
        <>
            <div className="flex flex-col md:gap-4 gap-2">
                {
                    Content2.map((item, index) => (
                        <Link href={item.url} key={index} >
                            <h1 className={`${index === 0 && 'font-semibold cursor-text text-lg md:pb-4 pb-2 text-black'} sm:text-lg text-base text-darkGray hover:text-black`} >{item.lablel}</h1>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}