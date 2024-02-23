import DashboardBox from "@/components/DashboardBox";
import { useTheme, Box, Typography } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import BoxHeader from "@/components/BoxHeader";
import { PieChart, Pie, Cell } from "recharts";
import FlexBetween from "@/components/FlexBetween";
import { useMemo } from "react";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];



const I_Grid = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const { data: kpiData } = useGetKpisQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            }
          ]
        }
      )
    }
  }, [kpiData]);

  return (
    <>
      <DashboardBox gridArea={"i"}>
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" pr="0 1rem" textAlign={"center"}>
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart
                width={110}
                height={100}
              >
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
    </>
  );
};

export default I_Grid;
