import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <span>Loading...</span> : users.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
};

export default App;
