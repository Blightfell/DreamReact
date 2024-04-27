import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme to set the text color to white
const theme = createTheme({
    components: {
        MuiChartAxis: {
            styleOverrides: {
                root: {
                    color: 'white', // Set axis label color to white
                },
            },
        },
    },
});

export default function BasicBars() {
    return (
        <ThemeProvider theme={theme}> {/* Apply the custom theme */}
            <div className="chart-view">
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B'] }]} // Ensure data aligns with the series
                    series={[
                        { data: [500, 1500, 2000] },
                        { data: [150, 500, 0] },
                        { data: [0, 5] },
                    ]}
                width={350}
                    height={300}
                />
                <div className='flex items-center justify-center gap-6 md:gap-10'>
                    <div className='flex items-center gap-2'>
                        <img className='h-3 md:h-5' src="Assets/Images/All Icons/Rectangle 59.svg" alt="" />
                        <p>Waifu Points</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='h-3 md:h-5' src="Assets/Images/All Icons/Rectangle 58.svg" alt="" />
                        <p>Llama Points</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
