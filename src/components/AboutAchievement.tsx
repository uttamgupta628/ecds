
export default function AboutAchievement() {
  const timelineData: {
    year: string;
    color: "orange" | "red" | "purple";
    bottomText: string;
    topText: string;
  }[] = [
    {
      year: "2016",
      color: "orange",
      bottomText:
        "Effibar is Born.\nPartnership Energeotek,\nSweden Elecsis, United Kingdom.",
      topText: "",
    },
    {
      year: "2017",
      color: "red",
      bottomText: "",
      topText: "Partnership\nSimelectro, France",
    },
    {
      year: "2018",
      color: "purple",
      bottomText: "MIDF, Malaysia\nProject\nUSD 2.5 Mil.",
      topText:
        "Collaboration ALB Wasserfilter\nBlaufaktor GmbH & Co. KG,\nGermany",
    },
    {
      year: "2019/20",
      color: "orange",
      bottomText: "",
      topText: "",
    },
    {
      year: "2021",
      color: "red",
      bottomText:
        "Urban Mobility Project\nUSD 11Mil Partnership\nVeolia, France, Ltd Japan",
      topText: "",
    },
    {
      year: "2022",
      color: "purple",
      bottomText: "",
      topText: "VIT Projects SAP SF\nTeamcenter,\nProjects in Korea",
    },
    {
      year: "2023/24",
      color: "orange",
      bottomText:
        "Overseas Partnership in South\nKorea TN Solutions,\nEco-Almag EinsSky",
      topText: "",
    },
    {
      year: "2024/25",
      color: "red",
      bottomText: "",
      topText:
        "Joint Venture\nCXP. Joint Venture\nCubeBio,Korea. Joint Venture\nAERY AI, South Korea",
    },
  ];

  const getColorClasses = (color: "orange" | "red" | "purple") => {
    const colors: Record<
      "orange" | "red" | "purple",
      { circle: string; line: string; dot: string; stroke: string }
    > = {
      orange: {
        circle: "border-orange-500",
        line: "border-orange-500",
        dot: "bg-orange-500",
        stroke: "#f97316",
      },
      red: {
        circle: "border-red-500",
        line: "border-red-500",
        dot: "bg-red-500",
        stroke: "#ef4444",
      },
      purple: {
        circle: "border-purple-600",
        line: "border-purple-600",
        dot: "bg-purple-600",
        stroke: "#9333ea",
      },
    };

    return colors[color];
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        TIMELINE & ACHIEVEMENTS
      </h1>

      <div className="border-4 border-blue-500 p-8 relative overflow-hidden">
        {/* Timeline container */}
        <div className="relative flex items-center justify-between">
          {timelineData.map((item, index) => {
            const colorClasses = getColorClasses(item.color);

            return (
              <div
                key={index}
                className="flex flex-col items-center relative"
                style={{ flex: 1 }}
              >
                {/* Top content */}
                <div className="h-32 flex flex-col items-center justify-end mb-4">
                  {item.topText && (
                    <>
                      <div className="text-xs text-center mb-2 whitespace-pre-line leading-tight">
                        {item.topText}
                      </div>
                      <div
                        className={`w-0.5 h-8 border-l-2 border-dashed ${colorClasses.line}`}
                      ></div>
                      <div
                        className={`w-2 h-2 rounded-full ${colorClasses.dot} mb-1`}
                      ></div>
                    </>
                  )}
                </div>

                {/* Circle with year */}
                <div
                  className={`w-20 h-20 rounded-full border-4 ${colorClasses.circle} bg-white flex items-center justify-center z-10 relative`}
                >
                  <span className="text-lg font-bold">{item.year}</span>
                </div>

                {/* Bottom content */}
                <div className="h-32 flex flex-col items-center justify-start mt-4">
                  {item.bottomText && (
                    <>
                      <div
                        className={`w-2 h-2 rounded-full ${colorClasses.dot} mt-1`}
                      ></div>
                      <div
                        className={`w-0.5 h-8 border-l-2 border-dashed ${colorClasses.line}`}
                      ></div>
                      <div className="text-xs text-center mt-2 whitespace-pre-line leading-tight">
                        {item.bottomText}
                      </div>
                    </>
                  )}
                </div>

                {/* Connecting curves */}
                {index < timelineData.length - 1 && (
                  <svg
                    className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                    width="100"
                    height="64"
                  >
                    <path
                      d={`M 0 32 Q ${
                        index % 2 === 0 ? "50 0" : "50 64"
                      } 100 32`}
                      fill="none"
                      stroke={colorClasses.stroke}
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
