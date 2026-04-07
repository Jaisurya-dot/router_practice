import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-16 bg-white">
            {/* Hero Section / Mission */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Our Mission</h2>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    We’re on a mission to <br />
                    <span className="text-slate-500">humanize the digital world.</span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                    Founded in 2024, we started with a simple idea: technology should work for people, not the other way around. Today, we help over 10,000 teams streamline their operations through intuitive design and ethical AI.
                </p>
            </section>

            {/* Stats Section */}
            <section className="bg-slate-900 py-16 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Founded', value: '2024' },
                            { label: 'Team Members', value: '45+' },
                            { label: 'Countries', value: '12' },
                            { label: 'Raised', value: '$12M' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-indigo-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Preview Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Meet the founders</h2>
                        <p className="text-slate-600 mt-2">The humans behind the code.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Member Card */}
                    {[1, 2, 3].map((member) => (
                        <div key={member} className="group">
                            <div className="aspect-[4/5] bg-slate-100 rounded-3xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300" />
                                {/* <img src="..." className="object-cover w-full h-full" alt="Team member" /> */}
                                <div className="w-full h-full flex items-center justify-center text-slate-400 italic">
                                    Image Placeholder
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Alex Rivers</h3>
                            <p className="text-indigo-600 font-medium">CEO & Co-founder</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;