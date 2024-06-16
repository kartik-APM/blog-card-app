export type BlogCardProps = {
    imgSrc: string;
    header: Header;
    body: Body;
}

export type Header = {
    badgeText: string;
    headerText: string;
}

export type Body = {
    bodyText: string;
    buttonLink: string;
}