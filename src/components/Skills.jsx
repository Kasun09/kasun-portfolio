import { Code2, Database, Palette, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
    {
        category: "Programming Languages",
        icon: Code2,
        skills: ["Python", "Java", "C#", "Kotlin", "JavaScript", "C"],
        color: "text-blue-400"
    },
    {
        category: "Frontend Frameworks",
        icon: Palette,
        skills: ["React", "HTML & CSS", "Tailwind CSS"],
        color: "text-purple-400"
    },
    {
        category: "Database",
        icon: Database,
        skills: ["SQL", "Firebase Realtime DB"],
        color: "text-green-400"
    },
    {
        category: "Others",
        icon: Cpu,
        skills: ["git", "postman", "Photoshop", "IoT Platforms", "Arduino", "ESP32"],
        color: "text-orange-400"
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center animate-fade-in">
                        Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        A comprehensive toolkit spanning multiple domains of software development and emerging technologies
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <Card
                                key={category.category}
                                className="p-6 bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex flex-col h-full">
                                    <div className={`p-3 bg-primary/10 rounded-lg w-fit mb-4 ${category.color}`}>
                                        <category.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-display font-semibold mb-4">
                                        {category.category}
                                    </h3>
                                    <div className="flex-1">
                                        <ul className="space-y-2">
                                            {category.skills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="text-muted-foreground flex items-center gap-2"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;