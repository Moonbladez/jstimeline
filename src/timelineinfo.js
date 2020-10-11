import React from "react"
import { FaNetworkWired, FaOpera, FaGoogle, FaFirefox, FaLinkedin, FaFacebook, FaTwitter, FaMicrophone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md"
import { RiPushpinFill, RiWebcamFill, RiInstagramFill } from "react-icons/ri"
import { BsFillChatSquareDotsFill } from "react-icons/bs"
import { GoBrowser } from "react-icons/go"
import { GrInternetExplorer } from "react-icons/gr"
import { SiMyspace, SiPinterest, SiSnapchat, SiGoogleassistant, SiHomeassistant, SiInternetarchive, SiProbot } from "react-icons/si"
import { FcWiFiLogo } from "react-icons/fc"

export const timelineInfo = [
    {
        title: "ARPANET",
        date: "1969",
        text: "The Advanced Research Projects Agency Network (ARPANET) was the first wide-area packet-switching network with distributed control and one of the first networks to implement the TCP/IP protocol suite",
        icon: <FaNetworkWired />,
        link: "https://en.wikipedia.org/wiki/ARPANET"

    },
    {
        title: "First Email Sent",
        date: "1972",
        text: "The first email was sent by Ray Tomlinson to himself",
        icon: <MdEmail />,
        link: "https://www.guinnessworldrecords.com/news/60at60/2015/8/1971-first-ever-email-392973#:~:text=We%20have%20Ray%20Tomlinson%20to,the%20First%20email%20in%201971.",
    },
    {
        title: "BBS",
        date: "1978",
        text: "Also known as a Bulletin Board System is a computer server running software that allows users to connec to the system using a terminal programme",
        icon: <RiPushpinFill />,
        link: "https://en.wikipedia.org/wiki/Bulletin_board_system"
    },
    {
        title: "IRC",
        date: "1988",
        text: "Internet Relay Chat is an application layer protocol that facilitates communication in the form of text.",
        icon: <BsFillChatSquareDotsFill />,
        link: "https://en.wikipedia.org/wiki/Internet_Relay_Chat"
    },
    {
        title: "First Live Webcam Stream",
        date: "1991",
        text: "",
        icon: <RiWebcamFill />
    },
    {
        title: "Mosaic",
        date: "1993",
        text: "Mosiac was one of the first web browers, and was instrumental in populizing the World Wide Web",
        icon: <GoBrowser />,
        link: "https://en.wikipedia.org/wiki/Mosaic_(web_browser)"
    },
    {
        title: "Netscape",
        date: "1994",
        link: "https://en.wikipedia.org/wiki/Netscape",
        text: "Originally Mosiac and was once a dominant web browser before looksing out to browers like Internet Explorer in the first Browser War",
        icon: <GoBrowser />,
        iconColor: "#007c85"
    },
    {
        title: "Internet Explorer",
        date: "1995",
        link: "https://en.wikipedia.org/wiki/Internet_Explorer",
        text: "Originally Mosiac and was once a dominant web browser before looksing out to browers like Internet Explorer in the first Browser War",
        icon: <GrInternetExplorer />,
        iconColor: "#00A4EF"
    },
    {
        title: "Opera",
        date: "1995",
        link: "https://en.wikipedia.org/wiki/Opera_(web_browser)",
        text: "One of the oldest web browsers still actively developed today",
        icon: <FaOpera />,
        iconColor: "#DD1B2D"
    },
    {
        title: "Wifi First Introduced to Consumers",
        date: "1997",
        link: "https://purple.ai/blogs/history-wifi/#:~:text=WiFi%20was%20invented%20and%20first,local%20area%20networks%20(WLANs)",
        text: "Wifi was first released to consumers, which lead to a set of standards called IEEE802.11",
        icon: <FcWiFiLogo />,
    },
    {
        title: "Google",
        date: "1998",
        link: "https://en.wikipedia.org/wiki/Google",
        text: "Founded by Larry Page and Sergey Brin who were Ph.D students at Stanford University at the time",
        icon: <FaGoogle />,
        iconColor: "#DB4437"
    },
    {
        title: "Firefox",
        date: "2002",
        link: "https://en.wikipedia.org/wiki/Firefox",
        text: "Is a free, open-source web browser. Released under the codename Pheonix by Mozilla community members who wanted a standalone browser instead of the application suite",
        icon: <FaFirefox />,
        iconColor: "#e66000",
    },
    {
        title: "Net Neutrality",
        date: "2003",
        text: "The term Net Neutrality is first penned by a Columbia  University law professor called Tim Wu",
        link: "https://www.wired.com/story/guide-net-neutrality/#:~:text=Columbia%20University%20law%20professor%20Tim,from%20using%20Wi%2DFi%20routers.",
        icon: <SiInternetarchive />
    },
    {
        title: "LinkedIn",
        date: "2003",
        text: "An online service used by professional networking, including employers posting jobs, and jobseekers posting resumes",
        link: "https://en.wikipedia.org/wiki/LinkedIn",
        icon: <FaLinkedin />
    },
    {
        title: "Facebook",
        date: "2004",
        text: "A popular social networking serviced. Founded by Mark Zuckerberg  and roommates while at Harvard. Originally it was only available to members of Harvard",
        link: "https://en.wikipedia.org/wiki/Facebook",
        icon: <FaFacebook />,
        iconColor: "#4267B2"
    },
    {
        title: "Twitter",
        date: "2006",
        text: "A popular microblogging and social networking service, where you interact with people via messaging known as tweets",
        link: "https://en.wikipedia.org/wiki/Twitter",
        icon: <FaTwitter />,
        iconColor: "#1DA1F2"
    },
    {
        title: "MySpace",
        date: "2006",
        text: "Once one of the largest social network services, reaching 100 million users per month",
        link: "https://en.wikipedia.org/wiki/Myspace",
        icon: <SiMyspace />
    },
    {
        title: "Pinterest",
        date: "2010",
        text: "A social media and image sharing service in the from of pinboards.",
        link: "https://en.wikipedia.org/wiki/Pinterest",
        icon: <SiPinterest />,
        iconColor: "#c8232c"
    },
    {
        title: "Instagram",
        date: "2010",
        text: "A photo and video sharing social networking service now owned by Facebook. Images can be editied with filters and organized with hashtags(#)",
        link: "https://en.wikipedia.org/wiki/Instagram",
        icon: <RiInstagramFill />,
        iconColor: "#8a3ab9"
    },
    {
        title: "Siri",
        date: "2011",
        text: "A virtual assistant useing voice queries to answer questions, perform actions and make recommendations",
        link: "https://en.wikipedia.org/wiki/Siri",
        icon: <FaMicrophone />
    },
    {
        title: "Snapchat",
        date: "2011",
        text: "A mulitmedia messaging service. Allowing users to take photos available for a short period before they become unavailable",
        link: "hhttps://en.wikipedia.org/wiki/Snapchat",
        icon: <SiSnapchat />,
        iconColor: "#FFFC00",
        iconFill: "#000000"
    },
    {
        title: "Cortana",
        date: "2014",
        text: "A virtual assistant made by Microsoft that uses the Bing search engine to perform tasks like setting reminders",
        link: "https://en.wikipedia.org/wiki/Cortana",
        icon: <SiHomeassistant />,
        iconColor: "#00A4EF"
    },
    {
        title: "Google Assistant",
        date: "2016",
        text: "An artifical intelligence powered virtual assistant which unlike others, can  engage in a two way conversation",
        link: "https://en.wikipedia.org/wiki/Google_Assistant",
        icon: <SiGoogleassistant />,
        iconColor: "#DB4437"
    }, {
        title: "The Future",
        text: "Robot and personal AI's are at an all time high. Social Networking sites have stagnated, but Facebook is still the highest ranked daily users. Everything is cloud based storage",
        icon: <SiProbot />,
        iconColor: "red",
        iconFill: "#000000"

    },



]