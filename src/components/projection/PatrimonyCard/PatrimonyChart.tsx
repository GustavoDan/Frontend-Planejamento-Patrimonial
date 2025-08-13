import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export interface DataPoint {
    name: string;
    [key: string]: number | string | null;
}

export interface LineConfig {
    dataKey: string;
    stroke: string;
    glowColor: string;
    isDashed?: boolean;
    hasDots?: boolean;
}

const formatYAxis = (value: number) => {
    if (value >= 1000000) return `R$ ${value / 1000000} M`;
    if (value >= 1000) return `R$ ${value / 1000}K`;
    return `R$ ${value}`;
};

interface PatrimonyChartProps {
    data: DataPoint[];
    lines: LineConfig[];
    yAxisDomain: [number, number];
}

const PatrimonyChart = ({ data, lines, yAxisDomain }: PatrimonyChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
            >
                <defs>
                    {lines.map((line) => (
                        <filter
                            key={`glow-${line.dataKey}`}
                            id={`glow-${line.dataKey}`}
                        >
                            <feDropShadow
                                dx="0"
                                dy="0"
                                stdDeviation="4"
                                floodColor={line.glowColor}
                            />
                        </filter>
                    ))}
                </defs>

                <XAxis
                    dataKey="name"
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={formatYAxis}
                    domain={yAxisDomain}
                />
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#404040"
                    vertical={false}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "#262626",
                        border: "none",
                        borderRadius: "8px",
                    }}
                />

                {lines.map((line) => (
                    <Line
                        key={line.dataKey}
                        type="monotone"
                        dataKey={line.dataKey}
                        stroke={line.stroke}
                        strokeWidth={3}
                        dot={
                            line.hasDots
                                ? {
                                      r: 6,
                                      fill: line.stroke,
                                      style: {
                                          filter: `url(#glow-${line.dataKey})`,
                                      },
                                  }
                                : false
                        }
                        strokeDasharray={line.isDashed ? "10 5" : "none"}
                        style={{ filter: `url(#glow-${line.dataKey})` }}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PatrimonyChart;
