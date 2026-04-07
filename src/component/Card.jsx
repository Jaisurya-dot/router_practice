import React from 'react'

const Card = ({ image, title, price, description }) => {
    return (
        <div className="group max-w-sm bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-2">

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image || "https://via.placeholder.com/400x300"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Price Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                    <span className="text-indigo-600 font-bold text-lg">${price}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {title || "Premium Feature"}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {description || "Enhance your workflow with our state-of-the-art tools designed for modern creators."}
                </p>

                {/* Action Button */}
                <button className="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Card