import DashboardBox from "@/components/DashboardBox";
import { useTheme, Box, Typography } from "@mui/material";
import BoxHeader from "@/components/BoxHeader";


const J_Grid = () => {

  const { palette } = useTheme();

  return (
    <>
      <DashboardBox gridArea={"j"}>
        <BoxHeader title="Overall Summery and Explanation Data" sideText="+15%" />
        <Box
          height={"15px"}
          margin={"1.25rem 1rem 0.4rem 1rem"}
          bgcolor={palette.primary[800]}
          borderRadius={"1rem"}
        >
          <Box
            height={"15px"}
            bgcolor={palette.primary[600]}
            borderRadius={"1rem"}
            width={"40%"}
          >

          </Box>
        </Box>
        <Typography margin={"0 0 0 1rem"} variant="h6">
          Is-thay arter-quay, Arblemay andway O.cay excelsway ithway isingray ofitspray andway eamlinedstray expensesway. Ategicstray initiativesway andway efficiencyway ivedray exceptionalway inancialfay erformancepay, eforcingray ourway ositionpay asway anway ustryindray eaderlay ommittedcay otay ofitabilitypray andway iscalfay esponsibilityray.
        </Typography>
      </DashboardBox>
    </>
  );
};

export default J_Grid;
