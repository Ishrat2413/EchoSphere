import { useState, useEffect, useRef } from 'react';

const About = () => {
    const [activeSphere, setActiveSphere] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const spheres = [
        {
            title: "Voice Amplification",
            description: "We believe every story deserves to be heard. Our platform amplifies diverse voices and perspectives from around the globe.",
            icon: "🔊",
            color: "#FF6B6B"
        },
        {
            title: "Real-time Resonance",
            description: "Experience news as it unfolds with our live updating system that captures the pulse of global events.",
            icon: "🌐",
            color: "#4ECDC4"
        },
        {
            title: "Community Echoes",
            description: "Join conversations that matter. Our community-driven approach ensures authentic engagement.",
            icon: "👥",
            color: "#45B7D1"
        },
        {
            title: "Truth Verification",
            description: "Advanced fact-checking and source verification to maintain the integrity of every story.",
            icon: "✅",
            color: "#96CEB4"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSphereClick = (index) => {
        setActiveSphere(index);
    };

    return (
        <div
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden px-8 py-16"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    />
                ))}
            </div>

            <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            EchoSphere
                        </span>
                    </h1>
                    <div className="inline-block">
                        <p className="text-xl md:text-2xl text-gray-300 mb-4">
                            Where News Resonates
                        </p>
                        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform origin-left transition-transform duration-500 hover:scale-x-110">
                            <div className="h-full w-4 bg-white rounded-full animate-ping-slow opacity-60"></div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="text-center mb-20">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
                        In a world filled with noise, we create meaningful echoes.
                        The EchoSphere is more than a news platform—it's a symphony
                        of stories, voices, and perspectives that shape our understanding
                        of the world around us.
                    </p>
                </div>

                {/* Spheres Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 rounded-2xl">
                    {spheres.map((sphere, index) => (
                        <div
                            key={index}
                            onClick={() => handleSphereClick(index)}
                            className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${activeSphere === index
                                    ? 'bg-white bg-opacity-10 shadow-2xl'
                                    : 'bg-black bg-opacity-30 hover:bg-opacity-40'
                                } border border-gray-700 hover:border-cyan-400 group`}
                            style={{
                                borderColor: activeSphere === index ? sphere.color : undefined
                            }}
                        >
                            {/* Animated Background */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                style={{ backgroundColor: sphere.color }}
                            ></div>

                            <div className="text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {sphere.icon}
                            </div>

                            <h3 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${activeSphere === index ? 'text-cyan-300' : 'text-white'
                                }`}>
                                {sphere.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {sphere.description}
                            </p>

                            {/* Active Indicator */}
                            {activeSphere === index && (
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: sphere.color }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-6 bg-black bg-opacity-20 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-cyan-400 mb-2" data-count="50">
                            50+
                        </div>
                        <div className="text-gray-400">Countries Reached</div>
                    </div>
                    <div className="text-center p-6 bg-black bg-opacity-20 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-cyan-400 mb-2" data-count="1000">
                            1K+
                        </div>
                        <div className="text-gray-400">Daily Stories</div>
                    </div>
                    <div className="text-center p-6 bg-black bg-opacity-20 rounded-xl border border-gray-800">
                        <div className="text-4xl font-bold text-cyan-400 mb-2" data-count="5">
                            5M+
                        </div>
                        <div className="text-gray-400">Voices Amplified</div>
                    </div>
                </div>

                {/* Echo Visualization */}
                <div className="flex justify-center items-center">
                    <div className="relative w-64 h-64">
                        {/* Center Pulse */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-cyan-400 rounded-full animate-ping-slow"></div>
                            <div className="absolute w-8 h-8 bg-cyan-500 rounded-full animate-pulse"></div>
                        </div>

                        {/* Echo Rings */}
                        <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping-slow opacity-60"></div>
                        <div className="absolute inset-8 border-2 border-cyan-500 rounded-full animate-ping-slow delay-1000 opacity-40"></div>
                        <div className="absolute inset-16 border-2 border-cyan-600 rounded-full animate-ping-slow delay-2000 opacity-20"></div>

                        {/* Connection Nodes */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    transform: `rotate(${i * 45}deg) translateX(120px) rotate(-${i * 45}deg)`
                                }}
                            >
                                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(3); opacity: 0; }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default About;