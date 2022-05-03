import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import PhishingIcon from '@mui/icons-material/Phishing';
import SetMealIcon from '@mui/icons-material/SetMeal';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import CheckIcon from '@mui/icons-material/Check';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: 'background.paper',
        background: 'none',
      }}
    >
      <Tabs
        value={value}
        TabIndicatorProps={{
          style: {
            backgroundColor: "blue"
          }
        }}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          "&& .Mui-selected": {
            color: "white"
          }
        }}
      >
        <Tab icon={<SummarizeIcon />} aria-label="License" label="Licensed" />
        <Tab icon={<RestaurantIcon />} label="Keep Catch" />
        <Tab icon={<CleanHandsIcon />} label="Clean" />
        <Tab icon={<PhishingIcon />} label="Live Bait" />
        <Tab icon={<SetMealIcon />} label="Filet Fish" />
        <Tab icon={<ConstructionIcon />} label="Equipment" />
        <Tab icon={<ChildFriendlyIcon />} label="Child Friendly" />
        <Tab icon={<CheckIcon />} label="10+ Years Experience" />
      </Tabs>
    </Box>
  );
}