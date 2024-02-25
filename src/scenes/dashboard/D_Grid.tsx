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
  Line,
  Legend,
  LineChart,
} from "recharts";




const D_Grid = () => {
  const { data: operationalData } = useGetKpisQuery();
  const { palette } = useTheme();



  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => ({
        name: month.substring(0, 3),
        "Operational Expenses": operationalExpenses,
        "Non Operational Expenses": nonOperationalExpenses,
      }))
    );
  }, [operationalData]);


  return (
    <>
      <DashboardBox gridArea={"d"}>
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend height={20} wrapperStyle={{
            }} />
            <Line
              yAxisId={"left"}
              type={"monotone"}
              dataKey={"Non-Operational Expenses"}
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId={"right"}
              type={"monotone"}
              dataKey={"Operational Expenses"}
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default D_Grid;
