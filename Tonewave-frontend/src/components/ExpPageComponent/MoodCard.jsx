import React from "react";

const moodList = [
  { text: "Chill", border: "border-blue-300" },
  { text: "Commute", border: "border-primary" },
  { text: "Engergy Booster", border: "border-amber-600" },
  { text: "Feel good", border: "border-white" },
  { text: "Focus", border: "border-secondary" },
  { text: "Party", border: "border-teal-500" },
  { text: "Romance", border: "border-error" },
  { text: "Sad", border: "border-gray-500" },
  { text: "Happy", border: "border-yellow-400" },
  { text: "Lofi", border: "border-blue-300" },
  { text: "Hiphop", border: "border-gray-700" },
  { text: "Hiphop", border: "border-gray-700" },
  
];

const moodCardGroup = (list) => {
  const result = [];
  for (let i = 0; i < list.length; i += 4) {
    result.push(list.slice(i, i + 4));
  }
  return result;
};

const MoodCard = () => {
  const groups = moodCardGroup(moodList);

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      
      <div className="flex gap-4 md:justify-center">
        {groups.map((group, i) => (
          <div key={i} className="flex flex-col gap-2 w-[200px] md:w-lg xl:w-lg">
            {group.map((mood, j) => (
              <div
                key={j}
                className={`btn w-[200px] md:w-full bg-base-300 shadow-none p-4 border-l-8 border-0  ${mood.border}`}
              >
                {mood.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodCard;


