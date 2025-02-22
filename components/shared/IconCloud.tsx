import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const IconCloudDemo = () => {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden  bg-background px-20 pb-20 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default IconCloudDemo;
