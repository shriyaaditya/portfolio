
import React from "react";

const ProjectCard = ({ title, description, month, date, seeMore, tags }) => {
  return (
    <div className="bg-[#20203B] border border-white/10 rounded-2xl p-5 w-full max-w-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
      
      <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
        <span>{month}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-white/10 px-2 py-1 rounded-md text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={seeMore}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-purple-400 hover:underline"
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;