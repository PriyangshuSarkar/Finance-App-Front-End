import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import BoxHeader from "@/components/BoxHeader";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
} from "recharts";


const C_Grid = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => ({
        name: month.substring(0, 3),
        revenue: revenue,
      }))
    );
  }, [data]);
  return (
    <>
      <DashboardBox gridArea={"c"}>
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph represents the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: 5,
              bottom: 58,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset={"5%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop offset={"95%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default C_Grid;
