import { useState } from 'react';
import PoliticiansLayout from '@/components/PoliticiansLayout';
import Politician from '@/components/Politician';

const Appointees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterRole, setFilterRole] = useState('all');
  
  // Mock data for political appointees
  const appointees = [
    {
      id: '1',
      name: 'Eugene Arhin',
      position: 'Director of Communications',
      region: 'Greater Accra',
      party: 'NPP',
      role: 'Communications',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.7,
      reviewCount: 435,
      promiseCount: 30,
      completedPromises: 18,
    },
    {
      id: '2',
      name: 'Charles Bissue',
      position: 'Presidential Staffer',
      region: 'Western',
      party: 'NPP',
      role: 'Presidential Office',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.3,
      reviewCount: 325,
      promiseCount: 25,
      completedPromises: 12,
    },
    {
      id: '3',
      name: 'Clara Napaga Tia Sulemana',
      position: 'Presidential Staffer',
      region: 'Northern',
      party: 'NPP',
      role: 'Presidential Office',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.2,
      reviewCount: 267,
      promiseCount: 18,
      completedPromises: 14,
    },
    {
      id: '4',
      name: 'Nana Asante Bediatuo',
      position: 'Executive Secretary to the President',
      region: 'Eastern',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.9,
      reviewCount: 422,
      promiseCount: 35,
      completedPromises: 23,
    },
    {
      id: '5',
      name: 'Francis Asenso-Boakye',
      position: 'Former Deputy Chief of Staff',
      region: 'Ashanti',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 4.0,
      reviewCount: 378,
      promiseCount: 28,
      completedPromises: 19,
    },
    {
      id: '6',
      name: 'Samuel Abu Jinapor',
      position: 'Former Deputy Chief of Staff',
      region: 'Savannah',
      party: 'NPP',
      role: 'Executive Office',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.8,
      reviewCount: 412,
      promiseCount: 32,
      completedPromises: 17,
    },
  ];
  
  // Extract unique regions and roles for filters
  const regions = [...new Set(appointees.map(a => a.region))];
  const roles = [...new Set(appointees.map(a => a.role))];
  
  // Generate filter options
  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    ...regions.map(region => ({ value: region, label: `${region} Region` }))
  ];
  
  const roleOptions = [
    { value: 'all', label: 'All Roles' },
    ...roles.map(role => ({ value: role, label: role }))
  ];
  
  // Filter appointees based on search and filters
  const filteredAppointees = appointees.filter(appointee => {
    const matchesSearch = appointee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         appointee.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = filterRegion === 'all' || appointee.region === filterRegion;
    const matchesRole = filterRole === 'all' || appointee.role === filterRole;
    
    return matchesSearch && matchesRegion && matchesRole;
  });

  // Reset all filters
  const clearFilters = () => {
    setSearchQuery('');
    setFilterRegion('all');
    setFilterRole('all');
  };

  return (
    <PoliticiansLayout
      title="Political Appointees"
      description="View information about current political appointees and special advisors in the Government of Ghana."
      searchPlaceholder="Search by name or position..."
      filterOptions1={regionOptions}
      filterOptions2={roleOptions}
      filter1Value={filterRegion}
      filter2Value={filterRole}
      filter1Label="Region"
      filter2Label="Role"
      onSearchChange={setSearchQuery}
      onFilter1Change={setFilterRegion}
      onFilter2Change={setFilterRole}
      onClearFilters={clearFilters}
      searchQuery={searchQuery}
      hasResults={filteredAppointees.length > 0}
      noResultsTitle="No Appointees Found"
      noResultsDescription="No political appointees match your current filters. Try adjusting your search criteria."
    >
      {filteredAppointees.map((appointee) => (
        <Politician key={appointee.id} {...appointee} />
      ))}
    </PoliticiansLayout>
  );
};

export default Appointees;
