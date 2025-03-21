
// This service handles fetching data from the parliament website
import { useState, useEffect } from 'react';

export interface ParliamentMember {
  id: string;
  name: string;
  position: string;
  constituency?: string;
  region?: string;
  party?: string;
  image?: string;
  contact?: string;
}

export const useParliamentMembers = () => {
  const [members, setMembers] = useState<ParliamentMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParliamentMembers = async () => {
      setLoading(true);
      try {
        // In a real application, this would be an API call to a backend service
        // that scrapes the parliament website or uses their API if available
        // For demo purposes, we're creating mock data based on the website structure
        
        // Mock data based on parliament.gh/members
        // In production, this would be replaced with actual API calls
        const mockData: ParliamentMember[] = [
          {
            id: '1',
            name: 'Hon. Alban Sumana Kingsford Bagbin',
            position: 'Speaker of Parliament',
            region: 'National',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop',
          },
          {
            id: '2',
            name: 'Hon. Joseph Osei Owusu',
            position: 'First Deputy Speaker',
            constituency: 'Bekwai',
            region: 'Ashanti',
            party: 'NPP',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
          },
          {
            id: '3',
            name: 'Hon. Andrew Asiamah Amoako',
            position: 'Second Deputy Speaker',
            constituency: 'Fomena',
            region: 'Ashanti',
            party: 'Independent',
            image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop',
          },
          {
            id: '4',
            name: 'Hon. Osei Kyei-Mensah-Bonsu',
            position: 'Majority Leader',
            constituency: 'Suame',
            region: 'Ashanti',
            party: 'NPP',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop',
          },
          {
            id: '5',
            name: 'Hon. Alexander Kwamena Afenyo-Markin',
            position: 'Deputy Majority Leader',
            constituency: 'Effutu',
            region: 'Central',
            party: 'NPP',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop',
          },
          {
            id: '6',
            name: 'Hon. Haruna Iddrisu',
            position: 'Minority Leader',
            constituency: 'Tamale South',
            region: 'Northern',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop',
          },
          {
            id: '7',
            name: 'Hon. James Klutse Avedzi',
            position: 'Deputy Minority Leader',
            constituency: 'Ketu North',
            region: 'Volta',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop',
          },
          {
            id: '8',
            name: 'Hon. Frank Annoh-Dompreh',
            position: 'Majority Chief Whip',
            constituency: 'Nsawam-Adoagyiri',
            region: 'Eastern',
            party: 'NPP',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop',
          },
          {
            id: '9',
            name: 'Hon. Lydia Seyram Alhassan',
            position: 'Deputy Majority Chief Whip',
            constituency: 'Ayawaso West Wuogon',
            region: 'Greater Accra',
            party: 'NPP',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop',
          },
          {
            id: '10',
            name: 'Hon. Muhamad Mubarak Muntaka',
            position: 'Minority Chief Whip',
            constituency: 'Asawase',
            region: 'Ashanti',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?w=500&auto=format&fit=crop',
          },
          {
            id: '11',
            name: 'Hon. Ahmed Ibrahim',
            position: 'First Deputy Minority Whip',
            constituency: 'Banda',
            region: 'Bono',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop',
          },
          {
            id: '12',
            name: 'Hon. Comfort Doyoe Cudjoe-Ghansah',
            position: 'Second Deputy Minority Whip',
            constituency: 'Ada',
            region: 'Greater Accra',
            party: 'NDC',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop',
          },
        ];
        
        // Simulate API delay
        setTimeout(() => {
          setMembers(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch parliament members data');
        setLoading(false);
        console.error('Error fetching parliament members:', err);
      }
    };

    fetchParliamentMembers();
  }, []);

  return { members, loading, error };
};
