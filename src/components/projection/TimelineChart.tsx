import SegmentedBarChart from "../ui/SegmentedBarChart";
import SolidProgressBar from "../ui/SolidProgressBar";
import TimelineNode from "../ui/TimelineNode";

const mockTimelineData = [
    {
        value: 2679930.0,
        year: "2025",
        age: "45 anos",
        tag: "Hoje",
        visualization: {
            type: "solid" as const,
            progress: 30,
        },
    },
    {
        value: 3173960.0,
        valorization: 18.37,
        year: "2035",
        age: "55 anos",
        visualization: {
            type: "bars" as const,
            highlightPercentage: 50,
        },
    },
    {
        value: 2173960.0,
        valorization: -31.51,
        year: "2045",
        age: "65 anos",
        visualization: {
            type: "bars" as const,
            highlightPercentage: 30,
        },
    },
];

const TimelineChart = () => {
    return (
        <div className="flex w-full max-w-5xl gap-x-4 rounded-lg p-8">
            {mockTimelineData.map((node, index) => (
                <TimelineNode
                    key={node.year}
                    value={node.value}
                    valorization={node.valorization}
                    year={node.year}
                    age={node.age}
                    tag={node.tag}
                    isFirst={index === 0}
                >
                    {node.visualization.type === "solid" ? (
                        <SolidProgressBar
                            progress={node.visualization.progress}
                        />
                    ) : (
                        <SegmentedBarChart
                            barCount={32}
                            highlightPercentage={
                                node.visualization.highlightPercentage
                            }
                        />
                    )}
                </TimelineNode>
            ))}
        </div>
    );
};

export default TimelineChart;
