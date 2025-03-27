import { useState } from 'react';
import PoliticiansLayout from '@/components/PoliticiansLayout';
import Politician from '@/components/Politician';

const Ministers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterMinistry, setFilterMinistry] = useState('all');
  
  // Mock data for ministers
  const ministers = [
    {
      id: '1',
      name: 'Ken Ofori-Atta',
      position: 'Minister of Finance',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Finance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.2,
      reviewCount: 845,
      promiseCount: 124,
      completedPromises: 57,
    },
    {
      id: '2',
      name: 'Samuel Atta Akyea',
      position: 'Minister of Works and Housing',
      region: 'Eastern',
      party: 'NPP',
      ministry: 'Works and Housing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.9,
      reviewCount: 567,
      promiseCount: 95,
      completedPromises: 52,
    },
    {
      id: '3',
      name: 'Ursula Owusu-Ekuful',
      position: 'Minister of Communications',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Communications',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.1,
      reviewCount: 723,
      promiseCount: 87,
      completedPromises: 59,
    },
    {
      id: '4',
      name: 'Kwaku Agyemang-Manu',
      position: 'Minister of Health',
      region: 'Bono',
      party: 'NPP',
      ministry: 'Health',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 3.5,
      reviewCount: 912,
      promiseCount: 108,
      completedPromises: 73,
    },
    {
      id: '5',
      name: 'Matthew Opoku Prempeh',
      position: 'Minister of Energy',
      region: 'Ashanti',
      party: 'NPP',
      ministry: 'Energy',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      rating: 4.3,
      reviewCount: 678,
      promiseCount: 92,
      completedPromises: 71,
    },
    {
      id: '6',
      name: 'Shirley Ayorkor Botchwey',
      position: 'Minister of Foreign Affairs',
      region: 'Greater Accra',
      party: 'NPP',
      ministry: 'Foreign Affairs',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      rating: 4.0,
      reviewCount: 542,
      promiseCount: 76,
      completedPromises: 51,
    },
  ];
  
  // Extract unique regions and ministries for filters
  const regions = [...new Set(ministers.map(m => m.region))];
  const ministries = [...new Set(ministers.map(m => m.ministry))];
  
  // Generate filter options
  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    ...regions.map(region => ({ value: region, label: `${region} Region` }))
  ];
  
  const ministryOptions = [
    { value: 'all', label: 'All Ministries' },
    ...ministries.map(ministry => ({ value: ministry, label: `Ministry of ${ministry}` }))
  ];
  
  // Filter ministers based on search and filters
  const filteredMinisters = ministers.filter(minister => {
    const matchesSearch = minister.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         minister.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         minister.ministry.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = filterRegion === 'all' || minister.region === filterRegion;
    const matchesMinistry = filterMinistry === 'all' || minister.ministry === filterMinistry;
    
    return matchesSearch && matchesRegion && matchesMinistry;
  });

  // Reset all filters
  const clearFilters = () => {
    setSearchQuery('');
    setFilterRegion('all');
    setFilterMinistry('all');
  };

  return (
    <PoliticiansLayout
      title="Ministers of State"
      description="View information about current cabinet ministers and their portfolios in the Government of Ghana."
      searchPlaceholder="Search by name, position, ministry..."
      filterOptions1={regionOptions}
      filterOptions2={ministryOptions}
      filter1Value={filterRegion}
      filter2Value={filterMinistry}
      filter1Label="Region"
      filter2Label="Ministry"
      onSearchChange={setSearchQuery}
      onFilter1Change={setFilterRegion}
      onFilter2Change={setFilterMinistry}
      onClearFilters={clearFilters}
      searchQuery={searchQuery}
      hasResults={filteredMinisters.length > 0}
      noResultsTitle="No Ministers Found"
      noResultsDescription="No ministers match your current filters. Try adjusting your search criteria."
    >
      {filteredMinisters.map((minister) => (
        <Politician key={minister.id} {...minister} />
      ))}
    </PoliticiansLayout>
  );
};

export default Ministers;
