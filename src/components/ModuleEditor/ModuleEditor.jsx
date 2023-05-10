import { useState } from "react";

function ModuleEditor({ currentModule }) {
  const [currentPattern, setCurrentPattern] = useState(
    currentModule.patterns[0]
  );
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

  function changePattern(index) {
    setCurrentPattern(currentModule.patterns[index]);
    setCurrentPatternIndex(index);
  }

  return (
    <div className="px-4 bg-slate-600 self-center w-full rounded-xl shadow-slate-900 drop-shadow-md max-w-[1080px]">
      <div className="flex py-6 gap-4 text-slate-900 font-mono text-sm">
        <div className="grow">
          <span className="text-slate-400">Title:</span>
          <input
            type="text"
            className="px-2 mt-2 block w-full bg-white rounded-md text-sm shadow-sm"
            value={currentModule.title}
          />
        </div>
        <div className="grow">
          <span className="text-slate-400">Author:</span>
          <input
            type="text"
            className="px-2 mt-2 block w-full bg-white rounded-md text-sm shadow-sm"
            value={currentModule.author}
          />
        </div>
      </div>
      <div className="flex overflow-auto text-center text-xl shadow-slate-900 font-mono gap-[2px]">
        {currentModule.patterns.map((p, i) =>
          currentPatternIndex === i ? (
            <div
              key={i}
              className="flex-shrink-0 w-8 rounded-sm bg-blue-600 cursor-default text-slate-200 border border-blue-400"
            >
              {p.number}
            </div>
          ) : (
            <div
              key={i}
              onClick={() => changePattern(i)}
              class="flex-shrink-0 w-8 hover:bg-slate-400 rounded-sm cursor-pointer bg-slate-500 text-slate-900 border border-slate-400"
            >
              {p.number}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ModuleEditor;
