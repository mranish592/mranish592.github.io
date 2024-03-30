export function Socials() {
    let socials = [
        {
            diplayText: "Github",
            link: "https://github.com/mranish592"
        },
        {
            diplayText: "LinkedIn",
            link: "https://www.linkedin.com/in/anish592/"
        },
        {
            diplayText: "Email",
            link: "mailto:mranish592@gmail.com"
        },
    
    ]

    return <>
        <span>
            {socials.map((social, index) => (

                    <a key={index} href={social.link} target="_blank">{social.diplayText} </a>
            ))}
        </span>
    </>
}