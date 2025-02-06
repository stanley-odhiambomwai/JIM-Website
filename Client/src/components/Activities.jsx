import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Activities = () => {
  const isAuthenticated = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/activities', {
          method: 'GET',
          credentials: 'include', 
        });

        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }

        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchActivities();
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div className="text-center">Loading activities...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Activities</h2>
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul className="mt-4">
          {activities.map(activity => (
            <li key={activity._id} className="border p-4 m-2 rounded bg-white shadow">
              <h3 className="font-bold">{activity.title}</h3>
              <p>{activity.description}</p>
              <p className="text-gray-500 text-sm">{new Date(activity.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activities;
