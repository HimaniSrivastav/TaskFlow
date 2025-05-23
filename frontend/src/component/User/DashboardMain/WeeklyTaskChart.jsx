import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components used
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function WeeklyTaskChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    try {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) {
        console.error("Couldn't get canvas 2D context");
        return;
      }

      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Completed',
              data: [8, 12, 6, 14, 10, 4, 2],
              backgroundColor: 'rgba(34, 197, 94, 0.8)',
              borderColor: 'rgba(34, 197, 94, 1)',
              borderWidth: 1,
              borderRadius: 4,
            },
            {
              label: 'Pending',
              data: [3, 2, 4, 1, 3, 2, 1],
              backgroundColor: 'rgba(251, 146, 60, 0.8)',
              borderColor: 'rgba(251, 146, 60, 1)',
              borderWidth: 1,
              borderRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              align: 'end',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      });
    } catch (err) {
      console.error("Error rendering WeeklyTaskChart:", err);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '300px', width: '100%' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
