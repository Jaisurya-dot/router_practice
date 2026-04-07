import React, { useState } from 'react';
import Card from '../component/Card';

const Home = () => {

   
    // 'https://dummyjson.com/products'
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">



            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-100/50 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">New: Version 2.0 is live</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Scale your workflow <br />
                        <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            without the headache.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                        The all-in-one platform to manage your team, track your progress, and deliver results faster. Built for modern teams who value speed and clarity.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-200">
                            Start Free Trial
                        </button>
                        <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                            View Demo
                        </button>
                    </div>

                    {/* Social Proof / Trusted By */}
                    <div className="mt-20">
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by world-class teams</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                            {/* Replace with actual <img> tags */}
                            <div className="text-xl font-bold text-slate-800 italic">ACME</div>
                            <div className="text-xl font-bold text-slate-800 italic">GLOBEX</div>
                            <div className="text-xl font-bold text-slate-800 italic">SOYLENT</div>
                            <div className="text-xl font-bold text-slate-800 italic">INITECH</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Preview (Visual Placeholder) */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <Card/>
            </section>

        </div>
    );
};

export default Home;
