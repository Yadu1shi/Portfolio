import { Icon } from "@iconify/react";

export default function Skills() {
  const iconClass = "transition-transform duration-300 hover:scale-110";

  const skills = [
    // Row 1
    [
      { icon: "devicon:cplusplus", size: 46 },
      { icon: "material-icon-theme:python", size: 46 },
      { icon: "vscode-icons:file-type-html", size: 46 },
      { icon: "picon:js", size: 40 },
      { icon: "vscode-icons:file-type-css2", size: 46 },
    ],
    // Row 2
    [
      { icon: "devicon:figma", size: 46 },
      { icon: "devicon:postman", size: 46 },
      { icon: "vscode-icons:file-type-vscode", size: 46 },
      { icon: "mdi:github", size: 46 },
      { icon: "catppuccin:vercel", size: 46 },
    ],
    // Row 3
    [
      { icon: "skill-icons:react-light", size: 46 },
      { icon: "vscode-icons:file-type-next", size: 46 },
      { icon: "simple-icons:express", size: 46 },
      { icon: "vscode-icons:file-type-node", size: 46 },
      { icon: "skill-icons:tailwindcss-light", size: 46 },
    ],
    // Row 4
    [
      { icon: "skill-icons:bootstrap", size: 46 },
      { icon: "simple-icons:framer", size: 46, color: "white" },
      { icon: "skill-icons:mongodb", size: 46 },
      { icon: "devicon:canva", size: 46 },
      { icon: "picon:msoffice", size: 46 },
    ],
  ];

  return (
    <div className="min-h-[850px] max-h-screen w-full flex flex-col items-center justify-start gap-6 md:gap-2 md:px-24 py-16">
      <div className="min-w-[288px] w-full min-h-[100px] flex flex-col items-center justify-around px-2">
        <h1 className="text-primary text-center font-heading font-bold text-4xl md:text-6xl">
          Tools & Technologies
        </h1>
        <p className="text-base font-subheading text-secondary text-center">
          Technologies I’ve worked with recently
        </p>
      </div>

      <div className="h-[500px] min-w-[340px] md:w-full px-2 py-6 flex flex-col items-center justify-start gap-6">
        <h1 className="font-heading text-center text-base md:text-2xl font-semibold text-primary">
          Skill stacks
        </h1>

        {skills.map((row, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full min-h-[60px] border-b-2 py-4 px-4"
          >
            {row.map((item, idx) => (
              <Icon
                key={idx}
                icon={item.icon}
                width={item.size}
                height={item.size}
                style={{ color: item.color || undefined }}
                className={iconClass}
              />
            ))}
          </div>
        ))}
      </div>

      <h1 className="text-center text-sm font-source text-secondary font-thin italic px-4">
        Always learning, always building. Whether it’s React or raw CSS — I’m here to grow.
      </h1>
    </div>
  );
}
