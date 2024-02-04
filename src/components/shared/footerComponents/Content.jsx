const { default: Link } = require("next/link")


const Content1 = ({ main, link1, link2, link3, link4, link5, link6, link7 }) => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-semibold' >{main}</h1>
            <div className='flex flex-col gap-6'>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link1}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link2}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link3}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link4}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link5}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link6}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link7}</Link>
            </div>
        </div>
    )
}
const Content2 = ({ main, link1, link2, link3, link4, link5, link6, link7 }) => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-semibold' >{main}</h1>
            <div className='flex flex-col gap-6'>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link1}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link2}</Link>
                <Link href='/' className='text-lg text-darkGray hover:text-black'>{link3}</Link>
            </div>
        </div>
    )
}

export const InternalLinks = () => {
    return (
        <Content2
            main="Internal Links"
            link1="Documentaries"
            link2="Themes"
            link3="Chrome casts"
        />
    )
}

export const EnterPrise = () => {
    return (
        <Content1
            main="Enterprise"
            link1="Download Chrome Browser"
            link2="Chrome Browser for"
            link3="Enterprise"
            link4="Chrome Browser Devices"
            link5="ChromeOS"
            link6="Google Cloud"
            link7="Google Workspace"
        />
    )
}