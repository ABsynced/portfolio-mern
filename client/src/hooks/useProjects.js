import { useEffect, useState } from 'react';
import { fetchProjects } from '../api/client';
import { placeholderProjects } from '../data/projects';

export function useProjects() {
  const [projects, setProjects] = useState(placeholderProjects);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchProjects()
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setProjects(data);
          setUsingFallback(false);
        }
      })
      .catch(() => {
        // silently keep placeholder data
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, usingFallback };
}
