import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Sample name; you can replace with dynamic user name from auth context or props
    const userName = 'Payal';

    const chartData = {
        labels: ['Machine Learning', 'Web Dev', 'Data Science', 'Design'],
        datasets: [
            {
                label: 'Career Match Score',
                data: [85, 65, 92, 40],
                backgroundColor: '#1bcedeff',
                borderColor: '#2D3436',
                borderWidth: 2,
                borderRadius: 6
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Your Past Assessment Summary',
                color: '#304E86',
                font: { size: 18 }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 20 }
            }
        }
    };

    return (
        <div className="container py-5">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="text-muted mb-1">Hi, {userName} 👋</h4>
                    <h2 className="text-primary">Welcome back to your Dashboard</h2>
                </div>
                <button className="btn text-white" style={{ backgroundColor: '#0D40A5' }}>
                    View Full Report
                </button>
            </div>

            {/* Recommendation Card */}
            <div className="card shadow p-4 mb-4 bg-white">
                <h5 className="text-muted mb-3">Latest Recommendation</h5>
                <p><strong>Data Scientist</strong> based on your previous attempt on <em>July 22, 2025</em></p>
                <p className="text-muted">AI matched you with a <strong>92%</strong> fit.</p>
            </div>

            {/* Graph Card */}
            <div className="card shadow p-4 bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Action Buttons */}
            <div className="mt-4 d-flex justify-content-between">
                <Link to="/assessment/self-discovery" className="btn btn-outline-primary">
  Retake Assessment
</Link>

                <button className="btn text-white" style={{ backgroundColor: '#0D40A5' }}>
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
