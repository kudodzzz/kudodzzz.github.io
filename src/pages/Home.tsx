import { ParallaxBanner } from "react-scroll-parallax";
import cls from "./Home.module.scss";
import Gura from "./../assets/images/gura.png";
import { Element } from 'react-scroll'
import { Badge, Button, Card, Grid, Heading, IconButton, Link, Text, Tooltip } from "@radix-ui/themes";
import { PiCodeDuotone, PiDiscordLogoDuotone, PiEnvelopeDuotone, PiGithubLogoDuotone, PiInfoDuotone, PiMagicWandDuotone, PiPhoneCallDuotone, PiFacebookLogoDuotone, PiMatrixLogoDuotone, PiTelegramLogoDuotone } from "react-icons/pi";
import type { accentColors } from "@radix-ui/themes/props";

type AccentColors = (typeof accentColors)[number];

import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import rustIcon from "./../assets/icons/rust.svg";
import reactIcon from "./../assets/icons/react.svg";
import csIcon from "./../assets/icons/cs.svg";
import javaIcon from "./../assets/icons/java.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import luaIcon from "./../assets/icons/lua.svg";
import luauIcon from "./../assets/icons/luau.svg";
import phpIcon from "./../assets/icons/php.svg";
import pythonIcon from "./../assets/icons/python.svg";

import GSVN from "./../assets/projects/gamestorevn.com_.webp";
import EMC2 from "./../assets/projects/emc2.png";

const ListSocial = [
    {
        name: "Discord",
        icon: <PiDiscordLogoDuotone size={25} />,
        url: "https://discord.com/users/810874313372467210"
    },
    {
        name: "GitHub",
        icon: <PiGithubLogoDuotone size={25} />,
        url: "https://github.com/kudodzzz"
    },
];

const List = [
    {
        image: "",
        name: "DukeeHub",
        type: "Roblox/Web",
        tech: [
            "Luau",
            "JavaScript",
            "CSS",
            "PHP"
        ],
        description: "roblox exploits",
        buttons: [
            {
                name: "Website",
                url: "https://dukee.ct.ws"
            },
            {
                name: "Discord",
                url: "https://discord.gg/WYMXvrnpz2"
            }
        ]
    },
    {
        image: "",
        name: "DukeeMobile",
        type: "Software",
        tech: [
            "Python"
        ],
        description: "a software that helps you automatically connect ADB wireless and automatically mirror the screen from your phone to your computer",
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/DukeeHub/DukeeMobile"
            }
        ]
    },
    {
        image: "",
        name: "DuoliFarmer",
        type: "Userscript",
        tech: [
            "JavaScript"
        ],
        description: "a duolingo xp farming tool",
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/kudodzzz/DuoliFarmer"
            }
        ]
    },
    {
        image: "",
        name: "DuoCheater",
        type: "Userscript",
        tech: [
            "JavaScript"
        ],
        description: "duolifarmer’s upgraded version",
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/kudodzzz/DuoCheater"
            },
            {
                name: "Website",
                url: "https://duocheater.kdz.ct.ws"
            },
        ]
    {
        image: "",
        name: "K2KWatch",
        type: "Web",
        tech: [
            "HTML",
            "CSS",
            "JS"
        ],
        description: "a simple movie-watching website coded with html, css and js. bruh, i don’t even consider it a project anymore…",
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/kudodzzz/K2KWatch"
            },
            {
                name: "Website",
                url: "https://watch.kdz.ct.ws"
            },
        ]
    {
        image: "",
        name: "KdzApi",
        type: "API",
        tech: [
            "Python (Flask)"
        ],
        description: "nothing to say..",
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/kdzjr/KdzApi"
            },
            {
                name: "Website",
                url: "https://api.kdz.ct.ws"
            }
        ]
    }

]

const skills: {
    name: string,
    icon: string,
    description: string,
    color: AccentColors,
    textColor: string
}[] = [
        {
            name: "TypeScript",
            icon: tsIcon,
            description: "javascript with types. pure javascript suck :)",
            color: "blue",
            textColor: "#007acc"
        },
        {
            name: "Python",
            icon: pythonIcon,
            description: "i often mess around with this language doing random stuff, but i still have a few decent products.",
            color: "blue",
            textColor: "#306998"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "in case typescript is not here",
            color: "yellow",
            textColor: "#f7df1e"
        },
        {
            name: "Node.js",
            icon: nodeJSIcon,
            description: "javascript on server? yes pls",
            color: "green",
            textColor: "#3c873a"
        },
        {
            name: "Java",
            icon: javaIcon,
            description: "discord bot with java?",
            color: "red",
            textColor: "#e5484d"
        },
        {
            name: "C#",
            icon: csIcon,
            description: "bad",
            color: "purple",
            textColor: "#a179dc"
        },
        {
            name: "PHP",
            icon: phpIcon,
            description: "i still use it occasionally, but it seems that I’ve switched to Node.js.",
            color: "purple",
            textColor: "#a179dc"
        },
        {
            name: "C++",
            icon: cppIcon,
            description: "segmentation fault",
            color: "blue",
            textColor: "#649ad2"
        },
        {
            name: "React",
            icon: reactIcon,
            description: "i'm not going back to pure js",
            color: "indigo",
            textColor: "#61dafb"
        },
        {
            name: "Lua",
            icon: luaIcon,
            description: "um.. i switched to luau to make roblox game, exploits.",
            color: "blue",
            textColor: "#61dafb"
        },
        {
            name: "Luau",
            icon: luauIcon,
            description: "just as i said, make roblox game, exploits.",
            color: "blue",
            textColor: "#61dafb"
        }
    ]

export default function PageHome() {
    return (
        <div className={cls.HomePage}>
            <Element name="home" className={cls.Main}>
                <ParallaxBanner
                    layers={[{ image: Gura, speed: -30, className: cls.BannerInner }]}
                    className={cls.Banner}
                />
                <div className={cls.Info}>
                    <Heading className={cls.Hello} size="6">
                        Kudodzzz
                    </Heading>
                    <Text size="2" color="gray">
                        welcome to my landing page (づ｡◕‿‿◕｡)づ
                    </Text>
                </div>
            </Element>
            <Element name="about-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiInfoDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            about me
                        </Heading>
                        <Text size="1" color="gray">
                            there's really nothing to it. the truth is just terrible…
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyAbout}>
                    {/* <img src={banner} alt="banner" className={cls.BannerAbout} /> */}

                    <div className={cls.Content}>
                        <Text size="2" color="gray">
                            i'm a 24-year-old guy who likes to do programming stuff, gaming, and anime. from Vietnam<br />
                        </Text>
                    </div>
                </div>
            </Element>
            <Element name="my-skills" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiMagicWandDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my skills
                        </Heading>
                        <Text size="1" color="gray">
                            what skills? do i have any skill? lmao
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto">
                    {skills.map((skill, index) => (
                        <Card variant="surface" key={index} className={cls.TechCard}>
                            <IconButton size="4" color={skill.color} variant="soft">
                                <img src={skill.icon} alt={skill.name} className={cls.TechLogo} />
                            </IconButton>
                            <div>
                                <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4">
                                    {skill.name}
                                </Heading>
                                <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1">
                                    {skill.description}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="my-projects" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiCodeDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my projects
                        </Heading>
                        <Text size="1" color="gray">
                            heh... nothing could be worse.
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyProjects}>
                    {List.map((project, index) => (
                        <Card variant="surface" key={index} className={cls.Projects}>
                            <img src={project.image} alt={project.name} className={cls.ProjectImage} />

                            <div className={cls.ProjectInfoContainer}>
                                <div className={cls.ProjectInfo}>
                                    <Heading size="3" className={"PrettyTitle"}>
                                        {project.name} <Badge size="1" style={{ marginLeft: 4 }}>{project.type}</Badge>
                                    </Heading>
                                    <Text size="1" color="gray" className={cls.ProjectDescription}>
                                        {project.description}
                                    </Text>
                                    <div className={cls.ProjectTech}>
                                        {project.tech.map((tech, index) => (
                                            <Badge variant="outline" key={index} size="1" className={cls.ProjectTechItem}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className={cls.space}></div>
                                <div className={cls.Action}>
                                    {project.buttons.map((button, index) => (
                                        <a href={button.url} target="_blank" rel="noreferrer">
                                            <Button size="1" key={index} variant="solid" className={cls.ProjectButton}>
                                                {button.name}
                                            </Button>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Element>
            <Element name="contact-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiPhoneCallDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            contact
                        </Heading>
                        <Text size="1" color="gray">
                            um... hi? (don't call me at 3am pls)
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyContact}>
                    <Text align="center" size="3" color="gray">
                        i only have 2 contact methods, is that too little...?<br />
                    </Text>

                    <div className={cls.List}>
                        {ListSocial.map((social, index) => (
                            <Tooltip content={social.name} key={index}>
                                <a href={social.url} target="_blank" title={social.name} rel="noreferrer">
                                    <IconButton size="4" variant="surface" className={cls.Social}>
                                        {social.icon}
                                    </IconButton>
                                </a>
                            </Tooltip>
                        ))}
                    </div>

                </div>
            </Element>
        </div>
    )
}
