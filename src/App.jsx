import Exam1 from "./exam/Exam1";
import Exam2 from "./exam/Exam2";
import Exam4 from "./exam/Exam4";
import Exam3 from "./exam/Exam3";
import { useState } from "react";


export default function App() {

  const [exam, setExam] = useState("")

  const renderExam = () => {
    switch (exam) {
      case "Triangle":
        return <Exam1 />;
      case "Ratio":
        return <Exam2 />;
      case "Mapping":
        return <Exam3 />;
      case "DisplayChart":
        return <Exam4 />;
      default:
        return <div>Please select an exam</div>;
    }
  };

  const listButton = ["Triangle", "Ratio", "Mapping", "DisplayChart"];



  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-10 p-5">
          {
            listButton.map((nameButton) => (
              <button key={nameButton} onClick={() => setExam(nameButton)}>
                {nameButton}
              </button>
            ))
          }
        </div>
      </div>
      {/* EXAM */}
      <div className="flex flex-col items-center py-10">
        {renderExam()}
      </div>
    </div>
  )
}