import React from 'react';

const Ideas = () => {
  const ideaPrompts = [
    "What are some innovative ways to improve our community?",
    "Share your favorite hobby and how it impacts your life.",
    "Discuss a recent book or article that inspired you.",
    "What are some challenges you've faced, and how did you overcome them?",
    "Share a travel experience that changed your perspective.",
    "What are your thoughts on current technology trends?",
    "How do you maintain work-life balance?",
    "Discuss a project you're passionate about and why.",
    "What skills would you like to learn and why?",
    "Share an idea for a community event or activity."
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 pt-16">
      <h2 className="text-2xl font-bold mb-4">Ideas to Share</h2>
      <p className="mb-4">Here are some prompts to get you started:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl px-4">
        {ideaPrompts.map((prompt, index) => (
          <div key={index} className="border p-4 rounded bg-white shadow hover:bg-gray-200 cursor-pointer">
            {prompt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
