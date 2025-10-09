import { useState } from 'react';

function Portfolio() {
  const [selectedActivities, setSelectedActivities] = useState([]); // Mock selected

  const mockActivities = [
    { id: 1, title: 'Hackathon Win', description: 'SRM Hackathon 2025', type: 'Tech' },
    { id: 2, title: 'Sports Event', description: 'College Football Match', type: 'Sports' },
  ];

  const handleToggle = (id) => {
    setSelectedActivities(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleExport = () => {
    console.log('Exporting portfolio:', selectedActivities);
    alert('Portfolio exported! (Mock PDF generated—check console)');
    // Later: react-pdf or jsPDF for real PDF
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Portfolio</h2>
      <p className="text-gray-600 mb-6">Select approved activities to build your shareable portfolio.</p>

      <div className="space-y-4">
        {mockActivities.map((activity) => (
          <div
            key={activity.id}
            className={`p-4 border rounded-md cursor-pointer ${
              selectedActivities.includes(activity.id) ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'
            }`}
            onClick={() => handleToggle(activity.id)}
          >
            <h3 className="font-semibold text-gray-800">{activity.title}</h3>
            <p className="text-sm text-gray-600">{activity.description}</p>
            <span className="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 mt-2">
              {activity.type}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleExport}
          disabled={selectedActivities.length === 0}
          className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          Export Portfolio (PDF)
        </button>
      </div>

      {selectedActivities.length > 0 && (
        <div className="mt-4 p-4 bg-green-50 rounded-md">
          <p className="text-sm text-green-800">
            {selectedActivities.length} activities selected. Click to toggle.
          </p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
