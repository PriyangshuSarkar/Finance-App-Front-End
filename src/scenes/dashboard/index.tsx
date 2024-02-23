import { Box, useMediaQuery } from "@mui/material";
import A_Grid from "./A_Grid";
import B_Grid from "./B_Grid";
import C_Grid from "./C_Grid";
import D_Grid from "./D_Grid";
import E_Grid from "./E_Grid";
import F_Grid from "./F_Grid";
import G_Grid from "./G_Grid";
import H_Grid from "./H_Grid";
import I_Grid from "./I_Grid";
import J_Grid from "./J_Grid";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;



const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreens
          ? {
            gridTemplateColumns: "repeat(3 , minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
          }
          : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
          }
      }
    >
      <A_Grid />
      <B_Grid />
      <C_Grid />
      <D_Grid />
      <E_Grid />
      <F_Grid />
      <G_Grid />
      <H_Grid />
      <I_Grid />
      <J_Grid />
    </Box>
  );
};

export default Dashboard;
