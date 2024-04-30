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
    // Define responsive widths and heights
    const chartDimensions = {
        xs: { width: 360, height: 300 }, // Mobile (small screens)
        sm: { width: 400, height: 320 }, // Tablets or larger mobile devices
        lg: { width: 800, height: 470 }, // Larger screens and desktops
    };

    return (
        <ThemeProvider theme={theme}> {/* Apply the custom theme */}
            <div className="chart-view"> {/* Ensure full width */}
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"> {/* Responsive width */}
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['04/07/2024', '04/08/2024'] }]} // Ensure data aligns with the series
                        series={[
                            { data: [500, 1500, 2000] },
                            { data: [150, 500, 0] },
                            { data: [0, 5] },
                        ]}
                        width={chartDimensions.xs.width} // Width for smaller screens
                        height={chartDimensions.xs.height} // Height for smaller screens
                        // margin={{ top: 30, bottom: 30, left: 100, right: 100 }}
                    />
                </div>
                <div className='flex items-center justify-center gap-6 md:gap-10 mt-4'>
                    <div className='flex items-center gap-2'>
                        <img className='h-3 md:h-5' src="Assets/Images/All Icons/Rectangle 59.svg" alt="Waifu Points" />
                        <p>Waifu Points</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='h-3 md:h-5' src="Assets/Images/All Icons/Rectangle 58.svg" alt="Llama Points" />
                        <p>Llama Points</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
