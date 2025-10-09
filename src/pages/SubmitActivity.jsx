import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitActivity() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    type: 'Tech', // Dropdown options: Tech, Sports, Cultural
    file: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted activity:', formData);
    // Later: Axios POST /student/activity with formData (multipart for file)
    alert('Activity submitted! (Check console)');
    navigate('/'); // Back to dashboard
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit New Activity</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., SRM Hackathon Winner"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your achievement..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              id="type"
              name="type"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="Tech">Tech/Hackathon</option>
              <option value="Sports">Sports</option>
              <option value="Cultural">Cultural/Events</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
            Certificate/Proof (Optional)
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.jpg,.png"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange}
          />
          {formData.file && <p className="text-sm text-gray-600 mt-1">Selected: {formData.file.name}</p>}
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Activity
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitActivity;
