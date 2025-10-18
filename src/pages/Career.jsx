import { useRef } from 'react';

const Career = () => {
    const sectionRef = useRef(null);

    const roles = [
        {
            title: "Frontend Architect",
            department: "Engineering",
            location: "Remote",
            description: "Build immersive interfaces that bring stories to life.",
            skills: ["React", "TypeScript", "Next.js"],
            icon: "⚡"
        },
        {
            title: "Content Creator",
            department: "Content",
            location: "Hybrid",
            description: "Transform information into compelling narratives.",
            skills: ["Writing", "Research", "Multimedia"],
            icon: "📖"
        },
        {
            title: "AI Engineer",
            department: "AI/ML",
            location: "Remote",
            description: "Design algorithms that amplify meaningful conversations.",
            skills: ["Python", "NLP", "TensorFlow"],
            icon: "🤖"
        },
        {
            title: "Community Manager",
            department: "Growth",
            location: "Global",
            description: "Build communities where diverse voices are heard.",
            skills: ["Community", "Analytics", "Social Media"],
            icon: "🌍"
        }
    ];

    const perks = [
        {
            title: "Remote Work",
            description: "Work from anywhere in the world",
            icon: "✈️"
        },
        {
            title: "Learning Budget",
            description: "Annual budget for skill development",
            icon: "📈"
        },
        {
            title: "Equity Package",
            description: "Meaningful equity in the company",
            icon: "⚖️"
        },
        {
            title: "Health Coverage",
            description: "Comprehensive health and wellness",
            icon: "🧘"
        }
    ];

    return (
        <div 
            ref={sectionRef}
            className="min-h-screen bg-white relative overflow-hidden px-4 py-12"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-xl opacity-5 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`,
                        }}
                    >
                        {['💼', '🚀', '🌟'][i % 3]}
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Join Our Team
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                        Help us redefine how the world shares and experiences stories.
                    </p>
                    <div className="inline-flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 font-medium">We're hiring!</span>
                    </div>
                </div>

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-white rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
                        >
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-3xl mb-3">{role.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {role.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                                                {role.department}
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                                                {role.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {role.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {role.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Perks & Benefits */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                        Why Join Us?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="group p-5 bg-white rounded-xl border border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <div className="text-2xl mb-3">
                                    {perk.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {perk.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {perk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Culture Section */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        Our Culture
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Radical transparency",
                            "Build for impact",
                            "Celebrate diversity",
                            "Learn continuously",
                            "Trust and autonomy",
                            "Global perspective"
                        ].map((principle, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                <span className="text-gray-700 font-medium">{principle}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 text-gray-900 border border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Make an Impact?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto text-lg">
                        Join us in building the future of meaningful conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold transform hover:scale-105 transition-all duration-300">
                            View Open Roles
                        </button>
                        <button className="px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-xl font-bold transform hover:scale-105 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Career;